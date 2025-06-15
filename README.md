# 项目简介

Vue 3 + TypeScript + Vite 模板。

## 启动项目

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## CSS规范

本项目CSS样式应遵循以下规范：

1. **优先使用UnoCSS**：

   - 项目已配置UnoCSS (presetWind4)
   - 对于常见的样式需求，优先使用UnoCSS的原子类
   - 示例：`class="flex items-center justify-between p-4 m-2"`

2. **使用Element Plus变量**：

   - 对于颜色、字体等，优先使用Element Plus提供的CSS变量
   - 常用变量：
     - `var(--el-color-primary)`: 主色
     - `var(--el-text-color-primary)`: 主要文字颜色
     - `var(--el-text-color-regular)`: 常规文字颜色
     - `var(--el-bg-color)`: 背景色
     - `var(--el-font-size-base)`: 基础字体大小

3. **自定义样式**：

   - 当UnoCSS和Element Plus变量无法满足需求时，可以编写自定义样式
   - 自定义样式应放在组件的`<style lang="scss" scoped>`块中
   - 尽量使用SCSS变量和嵌套语法保持代码整洁

4. **全局样式**：
   - 全局样式定义在`src/style.scss`中
   - 避免过多全局样式，优先使用组件级样式
