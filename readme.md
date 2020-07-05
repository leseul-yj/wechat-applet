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

## 导航超链接 navigator
1. navigator块元素
2. 可以跳转到其他的模块以及其他的小程序应用，但是不能跳转到其他的网站，例如百度

## scroll-view
1. 大部分配合js来使用
2. 就像是增加了屏内滚动条

## swiper 滑动插件
1. 微信特有单位 rpx
2. indicator-dots 是否显示小点
3. autoplay 自动播放 默认5s
4. circular 无缝衔接 最后一张播放后转到第一张
5. previous-margin 间隔

## 表单
1. button 
+ type primary warn default
+ size mini小按钮
2. input
+ type可以设置键盘类型
+ confirm-type 设置回车键的显示

## 其他组件
1. icon 图标 
+ size 大小
+ type 类型
2. progress 进度条
+ show-info 显示百分比
+ font-size 字体大小
+ border-radius 圆角
+ backgroudColor 背景色

## 框架
1. enablePullDownRefresh 下拉刷新
2. tabBar 导航栏

#### tips：app.json中pages提升模块 mac中option + 上箭头可以提升变量

## 单个页面配置
1. 单页面配置可以写在pages-单个模块-xxx.json 和app.json一样的

## 数据绑定
1. 写在js的data中 在html中用{{}}调用
```html
<text>{{title}}</text>
```
## wxml - if条件渲染
1.  在标签内部写入 wx:if="{{}}"
```html
<view>
	<text >if判断</text>
	<view wx:if="{{day==1}}">周1</view>
	<view wx:elif="{{day==2}}">周2</view>
	<view wx:elif="{{day==3}}">周3</view>
	<view wx:elif="{{day==4}}">周4</view>
	<view wx:elif="{{day==5}}">周5</view>
	<view wx:elif="{{day==6}}">周6</view>
	<view wx:elif="{{day==7}}">周日</view>
	<view wx:else>非法日期</view>
</view>
```
2. block空标签 最后不会在页面中显示 可以写入wx:if
```html
<view>
	<view>block</view>
	<block wx:if="{{false}}">
		<text>标题1</text>
		<navigator url="/pages/index/index" open-type="reLaunch">home</navigator>
	</block>
	<block wx:else>
		<text>标题2</text>
		<navigator url="/pages/dhive/dhive" open-type="redirect">dhive</navigator>
	</block>
</view>
```

## wxml-for列表渲染
1. 添加编译模式 调试的时候不依靠app.json 自成一个页面
2. wx:for 两个参数index索引 item数组的内容
3. x:for-index="i"自定义索引 wx:for-item="{{m}}"自定义item
```html
<view wx:for="{{5}}" wx:key="this">{{index}} {{item}} for循环</view>

<view wx:for="{{list}}" wx:for-index="i" wx:for-item="m" wx:key="i">{{i}} {{m.name_zh}}</view>

<view wx:for="{{list}}" wx:key="index">
	<text>名称：{{item.name_zh}}</text>-<text>年龄：{{item.age}}</text>
</view>
```