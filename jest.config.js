export default {
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },

  moduleFileExtensions: ["js", "jsx", "mjs"],

  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!@google/genai)"
  ],
};
