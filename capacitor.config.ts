import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.hiexam.inspector",
  appName: "HI Exam Prep",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
    scheme: "HI Exam Prep",
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: "#030712",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
