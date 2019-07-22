# react native 打包APP
## 1、在ios目录下新建bundle目录
```
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle


--entry-file ,ios或者android入口的js名称，比如index.js
--platform ,平台名称(ios或者android)
--dev ,设置为false的时候将会对JavaScript代码进行优化处理。
--bundle-output, 生成的jsbundle文件的名称，比如./ios/bundle/index.ios.jsbundle
--assets-dest 图片以及其他资源存放的目录,比如./ios/bundle

```


## 2、在package.json中添加编译命令
```
{
    "scripts":{
        "bundle-ios":"node node_modules/react-native/local-cli/cli.js bundle --entry-file index.js  --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle"
    }
}

```
####以后打包直接运行npm run bundle-ios即可

## 3、在Xcode中集成
```
离线包生成完成之后，可以在ios目录下看到一个bundle目录，这个目录就是bundle生成的离线资源。
需要在Xcode中添加资源到项目中，必须使用Create folder references的方式添加文件夹.

Add Files to "RNIos"

选择bundle文件,在option中选择Create folder references

添加到项目中的文件夹必须是蓝色

```


## 4、设置AppDelegate.m文件
```
修改AppDelegate.m中的加载包的方式（只需修改一次）,之后项目会自动跟据debug还是release状态加载不同的包

NSURL *jsCodeLocation;
#ifdef DEBUG
     //开发包
     jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#else
     //离线包
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];
#endif

```

修改debug状态

将项目由debug状态改成release状态，Xcode-->Product-->Scheme-->Edit Scheme...

选择 Generic iOS Device ,修改Version和Build号
clean一下项目，然后编译。此处生成.ipa文件的方式有多种，可以Archice,也可以先删除.app文件再在编译，将成的.app文件拖到iTunes里面生成。有了.ipa文件，接下来是上传app store还是内测就看你了

## 5、打包
```
Xcode-->Product-->archive

弹出框后，选择打包的项目点
Distribute App
选择发布类型，如（Sd Hoc）.
点 Next
None
点 Next
选择账户
点 Next
选择项目
点 Export
选择目录与地址
点 Export

```