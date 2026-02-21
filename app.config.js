
const IS_GH_PAGES = (process.env.EXPO_PUBLIC_IS_GH_PAGES || '').trim() === 'true';

export default {
  expo: {
    name: "12i code",
    slug: "12code",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.twelvecode.codingguide",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    experiments: {
      // If deploying to GitHub Pages, we need the subdirectory.
      // If deploying to Vercel/Netlify/Cloudflare (root domain), we don't.
      baseUrl: IS_GH_PAGES ? "/12i-code-guide" : ""
    },
    extra: {
      eas: {
        projectId: "3d2218e9-5a16-4726-9405-b61d85ed0971"
      }
    }
  }
};
