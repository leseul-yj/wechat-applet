# 微信小程序
## lesson1
1. 小程序不能超过2M
2. 下载微信小程序开发工具
3. 尽量不要选择游客模式 这是属于云开发

## 页面构架
+ pages---页面
+ utils---放公共的js
+ app.js --- 入口
+ app.js --- 配置项
+ app.wxss --- 样式
+ sitemap.json --- 小程序地图 
+ 点击右上角详情  本地设置 可以对project.comfig.json修改

## wxml标签
+ view 相当于div
+ app.json中的pages中的顺序决定渲染的顺序

## 创建组件
1. 一个文件夹里面必须有四个文件 一旦创建文件夹  在文件夹中新建page 会有四个文件
2. 直接在app.json的pages中添加文件路径
```js
  "pages": [
    "pages/logs/logs",
    "pages/index/index",
    "pages/energy/energy",
    "pages/dhive/dhive"
  ],
```

## 视图容器
1. view 相当于div 组件没有hover事件 但是有点击的hover-class hover-class后面的样式一定要在wxss中写 不然会报错
2. hover-stop-propagation 放在子元素中可以阻止向父元素冒泡
3. text相当于span标签 text标签可以选中文字 decode 可以对nbsp &lt解码
4. image相当于img标签 
+ mode属性设置图像比例（heightFix，widthFix）或者位置 
+ show-menu-by-longpress 长按显示显示图片菜单（如识别图片中的二维码）

