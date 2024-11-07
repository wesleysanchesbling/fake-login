import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  configPrettier, // Disable ESLint rules that might conflict with Prettier
  {
    plugins: {
      prettier: pluginPrettier,
      tailwindcss: pluginTailwindCSS,
    },
    rules: {
      'prettier/prettier': 'error', // Ensure that Prettier formatting is enforced
      'tailwindcss/no-custom-classname': 'off', // You can turn this on if you want to enforce Tailwind only
      'tailwindcss/classnames-order': 'warn', // Warn about incorrect Tailwind class order
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];
