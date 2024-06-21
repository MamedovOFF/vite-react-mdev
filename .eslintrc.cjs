module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "plugin:@shopify/typescript",
    "plugin:@shopify/react",
    "plugin:@shopify/prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Сначала обьявляем потом используем
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    // Import type
    "@typescript-eslint/consistent-type-imports": "error",
    // Последовательность обьявление сигнатур и методов
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // Преводит в единый способ обьявления типов мыссивов
    "@typescript-eslint/array-type": ["error", {
      default: 'array'
    }],
    // Использование типов TS (String - это JS, string - TS)
    "@typescript-eslint/ban-types": "error",
    // Дефолтные параметры функций в конец
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    // использовать все обьявления
    "@typescript-eslint/no-unused-vars": "error",

    "react/react-in-jsx-scope": 'off',

    "@shopify/jsx-no-hardcoded-content": 'off'
  },
}
