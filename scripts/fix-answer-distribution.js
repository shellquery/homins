/**
 * Fix answer distribution bias in question files.
 * Part 5, 6, 8 have ~100% of correct answers at position 0.
 * This script redistributes them evenly across positions 0-3.
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

function fixAnswerDistribution(filename) {
  const filepath = path.join(DATA_DIR, filename);
  const lines = fs.readFileSync(filepath, 'utf-8').split('\n');

  let questionCount = 0;
  let fixed = 0;
  let inOptions = false;
  let optionValues = [];
  let optionLineIndices = [];
  let correctAnswerLineIdx = -1;
  let currentCorrectAnswer = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Start of options array (exactly "options: [")
    if (trimmed === 'options: [') {
      inOptions = true;
      optionValues = [];
      optionLineIndices = [];
      continue;
    }

    if (inOptions) {
      // Each option line: exactly `"text",` at 6-space indent
      const optMatch = trimmed.match(/^"(.*)",?$/);
      if (optMatch) {
        optionValues.push(optMatch[1]);
        optionLineIndices.push(i);
      }
      // End of options array
      if (trimmed === '],') {
        inOptions = false;
      }
    }

    // correctAnswer line
    const caMatch = trimmed.match(/^correctAnswer:\s*(\d+),?$/);
    if (caMatch) {
      correctAnswerLineIdx = i;
      currentCorrectAnswer = parseInt(caMatch[1]);
    }

    // End of question object: "  }," at 2-space indent
    if (line === '  },' && correctAnswerLineIdx >= 0) {
      const targetPos = questionCount % 4; // Cycle 0,1,2,3 evenly

      if (optionValues.length === 4 && currentCorrectAnswer !== targetPos) {
        // Rotate the options so correct answer lands at targetPos
        const opts = [...optionValues];
        const correct = opts[currentCorrectAnswer];
        opts.splice(currentCorrectAnswer, 1);
        opts.splice(targetPos, 0, correct);

        // Update option lines
        const indent = lines[optionLineIndices[0]].match(/^(\s*)/)[1];
        for (let j = 0; j < 4; j++) {
          lines[optionLineIndices[j]] = `${indent}"${opts[j]}",`;
        }

        // Update correctAnswer line
        const caIndent = lines[correctAnswerLineIdx].match(/^(\s*)/)[1];
        lines[correctAnswerLineIdx] = `${caIndent}correctAnswer: ${targetPos},`;
        fixed++;
      }

      questionCount++;
      correctAnswerLineIdx = -1;
      currentCorrectAnswer = -1;
      optionValues = [];
      optionLineIndices = [];
    }
  }

  fs.writeFileSync(filepath, lines.join('\n'));
  console.log(`${filename}: ${questionCount} questions, ${fixed} redistributed`);
}

// Fix ALL parts — Part 1-4,7 are heavily biased toward index 1 (81-89%)
// Part 5,6,8 were previously all at index 0; re-running is safe (idempotent)
for (let i = 1; i <= 8; i++) {
  fixAnswerDistribution(`questions-part${i}.ts`);
}
console.log('Done.');
