# Button 按钮
----
### 基本用法
<div class="demo-block">
  <wen-button type="default" size="normal">默认按钮</wen-button>
  <wen-button type="primary" size="normal">主要按钮</wen-button>
</div>

### 禁用状态

<div class="demo-block">
  <wen-button type="primary" disabled size="normal">禁用按钮</wen-button>
</div>


::: demo
```html
<wen-button type="primary" disabled size="normal">禁用按钮</wen-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```normal```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <wen-button type="primary" size="normal">中等按钮</wen-button>
  <wen-button type="primary" size="small">小型按钮</wen-button>
  <div class="m-10">
    <wen-button size="large">大按钮</wen-button>
  </div>
</div>

::: demo
```html

<wen-button type="primary" size="normal">中等按钮</wen-button>
<wen-button type="primary" size="small">小型按钮</wen-button>
<wen-button size="large">大按钮</wen-button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,normal,small            |    —     |
| type     | 类型   | string    |   primary,default |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
