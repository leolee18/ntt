# 创建新项目
```
react-native init AwesomeProject
```

# 编译并运行
```
cd AwesomeProject
react-native run-ios
```


# 常用命令
``` bash
# install dependencies
npm install XXX
react-native init XXX --version 0.39.2
# link unlink
react-native link XXX
# 运行项目 cd到项目目录
react-native run-ios
react-native run-android
react-native run-ios --simulator "iPhone 4s"
# 启动node服务，当你run-ios 或者Android项目的时候会执行这个命令
react-native start / npm start
react-native start --port=8080
# 查看react-native的npm包的最新版本
npm info react-native
# react native升级到指定的X.Y.Z版本
react-native upgrade
# 查看当前reactNative版本
react-native –version
# 升级或降级npm包的版本
npm install –save react-native@0.26.3
# 列出已安装模块
npm list
npm list -g
npm -g list --depth 0
npm config list
# 显示模块详情
npm show react-navigation
# 升级当前目录下的项目的所有模块或者指定模块
npm update
npm update react-navigation
# 删除指定的模块
npm uninstall react-navigation
```


# 常用依赖安装
* React Navigation [连接](https://reactnavigation.org/docs/en/getting-started.html) 
__link__
``` bash
# Install the react-navigation
npm install --save react-navigation
# install react-native-gesture-handler
npm install --save react-native-gesture-handler
# Link native 
react-native link react-native-gesture-handler
```

* redux [连接](https://github.com/NextChampion/react-native-redux-navigation-example) 
``` bash
# Install redux
npm install --save redux
# Install react-redux
npm install --save react-redux
# Install redux-thunk
npm install --save redux-thunk
```

* react-native-swiper [连接](https://github.com/leecade/react-native-swiper)
``` bash
# Installation
npm install react-native-swiper --save
```

* react-native-video [连接](https://www.npmjs.com/package/react-native-video)
__link__
``` bash
# Installation
npm install --save react-native-video
# Link native 
react-native link react-native-video
```

* react-native-video-controls [连接](https://github.com/itsnubix/react-native-video-controls)
``` bash
# Installation
npm install --save react-native-video-controls
```

* react-native-sound [连接](https://github.com/zmxv/react-native-sound)
__link__
``` bash
# Installation
npm install react-native-sound --save
# Link native 
react-native link react-native-sound
```

* react-native-image-crop-picker [连接](https://github.com/ivpusic/react-native-image-crop-picker)
__link__
``` bash
# Installation
npm install react-native-image-crop-picker --save
# Link native 
react-native link react-native-image-crop-picker
```
[参考连接](https://www.jianshu.com/p/71dee6198b56)

<details>
<summary>native添加配置（ios and android）</summary>

``` bash
# android
## 1.在android/build.gradle添加以下代码
allprojects {
    repositories {
      mavenLocal()
      jcenter()
      maven { url "$rootDir/../node_modules/react-native/android" }

	  //我是要添加的...
      maven { url "https://jitpack.io" }
    }
}
## 2.在android/app/build.gradle添加以下代码
android {
    ...

    defaultConfig {
        //我是要添加的....
        vectorDrawables.useSupportLibrary = true
        ...
    }
    ...
}
## 3.在android/app/src/main/AndroidManifest.xml添加以下代码
<uses-permission android:name="android.permission.CAMERA"/>

# ios 
## 1.在info.plist内添加以下内容（相册、相机）
Privacy - Photo Library Usage Description
Privacy - Camera Usage Description
## 2.在target添加以下内容General添加以下内容（Embedded Binaries 选项）
RSKImageCropper.framework
QBImagePicker.Framework
```
</details>

* react-native-img-cache [连接](https://github.com/wcandillon/react-native-img-cache)
__link__
``` bash
# 前提需要 rn-fetch-blob
npm install --save rn-fetch-blob
# Link native 
react-native link rn-fetch-blob
# Installation
npm install react-native-img-cache --save
```

[参考连接](https://github.com/joltup/rn-fetch-blob)
<details>
<summary>native添加配置（ios and android）</summary>

``` bash
# android
## 1.在android/app/src/admin/AndroidManifest.xml添加以下代码
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.rnfetchblobtest"
    android:versionCode="1"
    android:versionName="1.0">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
+   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />                                               
+   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />                                              
+   <uses-permission android:name="android.permission.DOWNLOAD_WITHOUT_NOTIFICATION" />
    ...
## 2.在android/app/src/admin/AndroidManifest.xml添加以下代码
    <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
+           <action android:name="android.intent.action.DOWNLOAD_COMPLETE"/>                          
    </intent-filter>
# ios 
## 暂时无
```
</details>

* react-native-clear-app-cache [连接](https://github.com/midas-gufei/react-native-clear-app-cache)
__link__
``` bash
# Installation
npm install --save react-native-clear-app-cache
# Link native 
react-native link react-native-clear-app-cache
```

* react-native-device-info [连接](https://github.com/rebeccahughes/react-native-device-info)
__link__
``` bash
# Installation
npm install --save react-native-device-info
# Link native 
react-native link react-native-device-info
```

* react-native-datepicker [连接](https://github.com/xgfe/react-native-datepicker)
``` bash
# Installation
npm install react-native-datepicker --save
```

# 生命周期
## 1、装载阶段
```
# 在组建创建之前
getDefaultProps/defaultProps()
# 初始化组件的状态
getInitialState/constructor(props)
# 准备加载组件
componentWillMount()
# 第一次绘制
render()
# 第一次绘制之后
componentDidMount()

```
## 2、更新阶段
```
# 收到新的属性(props)
componentWillReceiveProps(nextProps)
# 接受到新的属性改变
shouldComponentUpdate(nextProps,nextState):boolen
# 准备更新组件
componentWillUpdate(nextProps,nextState)
# 更新新组件绘制
render()
# 更新完成界面后
componentDidUpdate(preProps,preState)

```
## 3、卸载阶段
```
# 要被从界面上移除时
componentWillUnmount()

```
