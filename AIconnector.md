# AI 接口说明
## 唤起
```
AIAudioManager.startAI();

AIAudioManager 原生类名
```
## 播放、暂停、上一首、下一首监听
```
this.aiManagerEmitter.addListener('EventAIPlay',(mObj) => {
	let state = mObj.state;
	if(state == 'play'){
		播放
	}else if(state == 'pause'){
		暂停
	}else if(state == 'next'){
		下一首
	}else if(state == 'prev'){
		上一首
	}else if(state == 'openView'){
		打开AI
	}else if(state == 'closeView'){
		关闭AI
	}
}); 
```
## 播放列表监听
```
this.aiManagerEmitter.addListener('EventAIPlayList',(albumId,albumName) => {
	let songList = mObj.result.data[0];
	albumId  分类ID
	albumName  分类名字
}); 
```
## 播放歌曲监听
```
this.aiManagerEmitter.addListener('EventAIPlaySong',(songObj) => {
	songObj 歌曲参数
});  
```