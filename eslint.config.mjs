import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Generated ANTLR output and build artifacts are not hand-maintained.
    ignores: ['dist/**', 'src/g4/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // The generated parser API uses non-null assertions and `any` at the
      // boundary; allow them in the thin glue code that talks to it.
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      // Allow intentionally-unused, underscore-prefixed parameters (e.g. when
      // implementing a wide interface signature).
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
);
