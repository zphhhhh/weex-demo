# weex-demo

> 模仿钉钉工作页面，基本完成

## 预览

```bash
npm install

npm run dev

npm run serve
```

## 文件结构

* `src/*`: 源码
    - `components`: 组件
    - `constants`: 存放常量
    - `data`: 存放数据
    - `App.vue`: 页面入口
* `app.js`: Weex 入口
* `index.html`: Weex Web 端预览

## 思路

- 定义`IconItem.vue`组件作为图标列表的项，定义`IconDrawer.vue`组件作为装满同类图标项的抽屉（列表），同时`IconDrawer.vue`预留`footer`插槽，方便自定义，在钉钉中的`管理员控制台`模块中使用了`footer`，即下面的 `SliderNews.vue`。
- 定义`SliderNews.vue`作为轮播消息组件，这里使用的 `<slider>` 仅支持左右滑动，因此与原生钉钉的消息模块有所差异，可改为动画实现上下滚动。
- 定义常量、数据文件，与页面分离。


## 遇到的问题？

- 子组件好像不支持`:class`绑定？  
原因：后发现问题是，父组件若使用了`<style scoped>`，则不支持给子组件使用`:class`绑定，这点是与 Vue 不同的。后去掉了父组件的 `scoped`。


## 其他
- 项目中使用的图片出自网上资源，仅做学习之用。