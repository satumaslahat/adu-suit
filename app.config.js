export default {
  expo: {
    name: "adu-suit",
    slug: "adu-suit",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    icon: "./assets/images/app-icon.png",
    splash: {
      image: "./assets/images/splash-icon.png",
      backgroundColor: "#D4F7E5",
      resizeMode: "contain",
    },
    android: {
      package: "com.satumaslahat.adusuit",
      adaptiveIcon: {
        foregroundImage: "./assets/images/app-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    ios: {
      bundleIdentifier: "com.satumaslahat.adusuit",
      supportsTablet: true,
    },
    extra: {
      eas: {
        projectId: "03f38555-45bf-4c4b-91d0-9047e479e859",
      },
    },
  },
};
