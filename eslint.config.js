module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    // Tambahkan atau sesuaikan aturan ESLint di sini
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off', // React 17+ tidak memerlukan import React di setiap file
    'react/prop-types': 'off', // Jika Anda menggunakan TypeScript atau tidak memerlukan validasi prop-types
  },
  settings: {
    react: {
      version: 'detect', // Secara otomatis mendeteksi versi React yang terinstal
    },
  },
};
