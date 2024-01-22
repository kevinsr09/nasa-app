module.exports = {
  extends: ['universe', 'universe/native', 'universe/web', 'universe/shared/typescript-analysis'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],

      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],

  plugins: ['react-hooks'],

  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { trailingComma: 'none', semi: false }]
  },

  env: {
    node: true
  }
}
