"use client";

import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-lg font-bold text-gray-100 mb-2">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-base font-semibold text-gray-200 mb-1.5 mt-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-sm font-semibold text-gray-200 mb-1 mt-2">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-sm text-gray-300 leading-relaxed mb-2">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-1 mb-2 text-sm text-gray-300">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-1 mb-2 text-sm text-gray-300">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-sm text-gray-300 leading-relaxed">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-100">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-blue-300">{children}</em>
        ),
        code: ({ children }) => (
          <code className="px-1.5 py-0.5 rounded bg-gray-800 text-cyan-300 text-xs font-mono">
            {children}
          </code>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-purple-500/50 pl-3 my-2 text-gray-400 italic">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="border-gray-700/50 my-3" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
