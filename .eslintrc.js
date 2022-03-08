module.exports = {
  // 根配置
  root: true,
  // 运行环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 全局变量
  globals: {
    // vue setup 全局语法宏
    defineProps: 'readonly',
    definedEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    // jest 测试
    jest: 'readonly',
  },
  // 基础规则
  extends: [
    'eslint:recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:vue/vue3-recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // 公共插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // 根据不同文件设置规则
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        'vue/one-component-per-file': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-undef': 'off',
      },
    }
  ],
  // 本地规则
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
  }
}