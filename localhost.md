# 本地服务
## 1、地址
```
open /Library/WebServer/Documents

```
## 2、启动
```
//开启apache:  sudo apachectl start

//重启apache:  sudo apachectl restart

//关闭apache:  sudo apachectl stop

```

## 2、修改本地服务器文件夹路径
```
终端输入open /etc
第一步打开apache2，这是系统自带的Apache目录；打开配置文件httpd.conf

DocumentRoot "/Library/WebServer/Documents"
<Directory "/Library/WebServer/Documents">
...
</Directory>

将路径修改为
DocumentRoot "/Users/用户名/WebServer"
<Directory "/Users/用户名/WebServer">
...
</Directory>

WebServer是在用户文件夹下新建的，修改完之后，在该配置文件中找到
#LoadModule php7_module libexec/apache2/libphp7.so
#LoadModule userdir_module libexec/apache2/mod_userdir.so

去掉注释（删除前面的#）,并保存，保存时会提示你输入管理员密码;

第二步，打开apache2文件下的users文件夹，找到用户名.conf配置文件(没有可以新建一个)并打开修改为
<Directory "/Users/用户名/WebServer/">
    Options Indexes MultiViews
    AllowOverride All
    Require all granted
</Directory>

保存退出；

```

## 3、PHP
```
自带PHP，只需要在Apache的配置文件中添加Apache对PHP的支持就好了

在终端中输入命令：
sudo vim /etc/apache2/httpd.conf

打开httpd.conf文件
去掉“LoadModule php7_module libexec/apache2/libphp7.so”注释符号

```
