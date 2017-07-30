# weex-demo

> 模仿钉钉工作页面，基本完成

可直接访问 https://zphhhhh.github.io/weex-demo/index.html 预览 Web 端

![app-web-chrome.jpg](./previews/app-web-chrome.jpg) ![app-weex-android.jpg](./previews/app-weex-android.jpg) 

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
- 修改 webpack 配置文件将 app.weex.js 输出到 android 目录下。


## 遇到的问题？

- 子组件好像不支持`:class`绑定？  
原因：后发现问题是，父组件若使用了`<style scoped>`，则不支持给子组件使用`:class`绑定，这点是与 Vue 不同的。后去掉了父组件的 `scoped`。
- 集成到 Android 开发环境时不显示 Weex 页面？  
原因：使用 Android Studio 新建工程时在`AndroidManifest.xml`配置文件中的`Application`下没有加入`android:name`属性，加入之后类似下面：
```xml
<!-- 在下面加入 `android:name=".WXApplication"`  -->
<application
    android:name=".WXApplication"
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:supportsRtl="true"
    android:theme="@style/AppTheme">
    <activity android:name=".MainActivity">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />

            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
    </activity>
</application>
```
- Android 图片无法加载？
原因：需自己手动实现，这里使用了 Picasso 开源库，移步：https://github.com/square/picasso
- Web 端正常而 Weex 端布局出错？
原因：由于平台问题，Weex 端不支持很多 Web 端的 CSS 属性，比如`border: 1px solid #ccc`要分开写，`flex`属性要写完整等等。

## 其他
- 项目中使用的图片出自网上资源，仅做学习之用。
