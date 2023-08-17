# Vue 3 + TypeScript + Vite

## 配置 prettier

```
pnpm i prettier -D
```

新增.prettierr.cjs文件，添加配置内容

```
module.exports = {
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  endOfLine: "auto",
};

```

## stylelint 配置

stylelint-config-html 用来解析html文件中的样式。
stylelint-config-recommended 是用来专门检验css文件
stylelint-config-recommended-vue 是用来检验vue文件中的样式。
stylelint-config-recess-order 检查css样式属性顺序
postcss-html 是一个基于 PostCSS 的插件，可以将 HTML 文件中的 CSS 样式提取出来，并将其生成对应的 CSS 样式文件。这个插件可以帮助我们有效地管理和组织 CSS 样式代码，并且可以减少冗余的 CSS 代码量，提高网页加载速度和性能。
stylelint-config-prettier 已与stylelint v15版本开始废弃
stylelint-config-prettier-scss 解决stylelint 和 prettier的冲突

版权声明：本文为原创文章，版权由本站（JavaScript中文网）拥有，严禁未经允许复制、转载、传播、篡改等任何行为，如需转载，请联系本站管理员获取书面授权

```
pnpm install --save-dev sass stylelint-config-recess-order postcss-scss postcss-html stylelint-config-recommended-vue stylelint-scss stylelint stylelint-config-prettier-scss stylelint-config-standard-scss stylelint-config-standard
```

新增文件.stylelintrc.cjs，并添加配置内容

```
module.exports = {
  // 注册 stylelint 的 prettier 插件
  // plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    // 样式属性顺序规则
    "stylelint-config-recess-order",
    // 接入 Prettier 规则
    'stylelint-config-prettier-scss',
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    // kebab-case
    "selector-class-pattern": null,
    "font-family-no-missing-generic-family-keyword": null,
  },
};
```

## 配置eslit

eslint: ESLint 的核心代码

prettier：prettier 插件的核心代码

eslint-config-prettier：解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

eslint-plugin-prettier：将 prettier 作为 ESLint 规范来使用

eslint-plugin-vue：包含常用的 vue 规范

@typescript-eslint/parser：ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码

@typescript-eslint/eslint-plugin：包含了各类定义好的检测 Typescript 代码的规范

```
pnpm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

新增.eslintrc.cjs 文件，配置内容

```
module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};

```

# 分支说明

```
main 分支
集成vue3 + vue-router + prettier + eslint + stylelint + axios
```
