# react native 打包APK
## 1、在终端里面,cd 到项目的根目录后.执行下面这行命令:
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

口令：lehuLeoleeShenzhen2019
姓氏：李
单位：奥斯科尔
职称：web
城市：上海
区域：上海
国家：中国

```
## 2、执行第一步会在根目录下会生成一个XXXXXX.keystore的文件,直接拿到android/app下.
```

```

## 3.在android/gradle.properties中加入:
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore

MYAPP_RELEASE_KEY_ALIAS=my-key-alias

MYAPP_RELEASE_STORE_PASSWORD=******

MYAPP_RELEASE_KEY_PASSWORD=******
```
#### ******换为你刚才输入的口令.

## 4.在android/app/build.gradle添加下面的红色字.
```
def enableProguardInReleaseBuilds = true

android {
...
    defaultConfig {
....
    }
    signingConfigs {
    release {
    storeFile file(MYAPP_RELEASE_STORE_FILE)
    storePassword MYAPP_RELEASE_STORE_PASSWORD
    keyAlias MYAPP_RELEASE_KEY_ALIAS
    keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }}
    splits {
....
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
           ...
        }
    }
  .....
            }
        }
    }
}
```

## 5.终端cd 到android目录下.执行命令
```
./gradlew assembleRelease

```
#### 等一下终端执行后显示BUILD SUCCESSFUL.
#### 成功打好了.在项目的android/app/outputs/apk下可见刚才打好的apk包

## 6.测试应用的发行版本
```
react-native run-android --variant=release

```

## 常见错误
```
# android打包apk根据官网操作出现的错误
Could not list contents of '/Users/xxxx/Downloads/xxxx/node_modules/node-pre-gyp/node_modules/.bin/needle'. Couldn't follow symbolic link.

根据提示路径一步步的查找最终在node-pre-gyp发现几个爆红的文件，这是找不到文件，只要把这几个找不到的文件删掉就可以了(nopt、needle、detct-libc、rc)

把路径下的隐藏文件删除，因为文件的引用不存在

```

## 清除项目
```
admin1deMacBook-Pro:android admin1$ adb uninstall com.partybuilding3
Success
admin1deMacBook-Pro:android admin1$ adb install -r /Users/admin1/AndroidStudioProjects/PartyBuilding3/android/app/build/outputs/apk/release/app-release.apk
Success
```
