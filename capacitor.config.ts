import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.hiexam.inspector",
  appName: "HI Exam Prep",
  webDir: "out",
  server: {
    iosScheme: "capacitor",
    androidScheme: "https",
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
    allowsLinkPreview: false,
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
