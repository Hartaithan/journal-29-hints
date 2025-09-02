import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  prettier,
  {
    rules: {
      "no-console": ["error", { allow: ["info", "error"] }],
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", ".astro/**", ".local/**"],
  },
];
