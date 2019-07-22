# Mac下使用Git和Git客户端
## 先到git官网：https://git-scm.com/download 下载安装
```
创建一个用户，名为gitter,用于专门管理git相关
adduser gitter
passwd gitter

切换到gitter用户
su gitter

创建空库
cd /home/gitter
mkdir pro1
cd pro1
git init --bare .git

```

## 拷贝一个 Git 仓库到本地
```
git clone [url]

$ git clone git@github.com:schacon/simplegit.git
Cloning into 'simplegit'...
remote: Counting objects: 13, done.
remote: Total 13 (delta 0), reused 0 (delta 0), pack-reused 13
Receiving objects: 100% (13/13), done.
Resolving deltas: 100% (2/2), done.
Checking connectivity... done.

克隆完成后，在当前目录下会生成一个 simplegit 目录
```

## 将文件添加到暂存区
```
git add 文件名
```

## 增加到版本库中
```
git commit -m '备注信息'
```

## 与GitHub有关的
```
先有本地库，后有远程库，将本地库push到远程库
关联本地仓库和GitHub库：git remote add origin 网站上的仓库地址
第一次将本地仓库推送到GitHub上：git push –u origin master
此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改

先有远程库，后有本地库，从远程库clone到本地库
从远程库克隆到本地：git clone 网站上的仓库地址

将远程存储库中的更改合并到当前分支中。在默认模式下，git pull是git fetch后跟git merge FETCH_HEAD的缩写原文出自【易百教程】，商业转载请联系作者获得授权，非商业请保留原文链接：https://www.yiibai.com/git/git_pull.html
$ git pull <远程主机名> <远程分支名>:<本地分支名>


git server:
git@47.111.171.139:/opt/gitrepo/deer.git
deergit!@#Go

```

## SSH警告
```
当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：

The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。

Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：

Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
这个警告只会出现一次，后面的操作就不会有任何警告了。
```
