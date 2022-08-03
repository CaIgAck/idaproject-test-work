export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "idaproject-test-work",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["@/plugins/vee-validate.js"],
  plugins: [
    { src: "~/plugins/vee-validate.js" },
    { src: "~/plugins/filters.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  styleResources: {
    scss: [
      "~assets/scss/style.scss",
      "~assets/scss/variable.scss",
      "~assets/scss/mixin.scss",
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
    transpile: ["vee-validate"],
  },

  babel: {
    compact: true,
    presets: ["@babel/plugin-proposal-optional-chaining"],
  },
};
