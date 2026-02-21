
const IS_GH_PAGES = (process.env.EXPO_PUBLIC_IS_GH_PAGES || '').trim() === 'true';

export default {
  expo: {
    name: "12code",
    slug: "12code",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
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
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
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
    }
  }
};
