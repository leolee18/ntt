import types from '../types.js'
import ser from '../../server/server';

const state={
	abool:false,
	auser:'',
	aname:'匿名',
	purview:[],
	adminlist:[]
}

const getters={
	auser(state){
		return state.auser;
	},
	aname(state){
		return state.aname;
	},
	abool(state){
		return state.abool;
	},
	admin(state){
		let mBool = false;
		if(state.purview[0] && state.purview[0] == '1'){
			mBool = true;
		}
		return mBool;
	},
	alist(state){
		let mBool = false;
		if(state.purview[1] && state.purview[1] == '1'){
			mBool = true;
		}
		return mBool;
	},
	aAddv(state){
		let mBool = false;
		if(state.purview[2] && state.purview[2] == '1'){
			mBool = true;
		}
		return mBool;
	},
	aMem(state){
		let mBool = false;
		if(state.purview[3] && state.purview[3] == '1'){
			mBool = true;
		}
		return mBool;
	},
	adminlist(state){
		return state.adminlist;
	}
}

const actions={
	loginFun({commit,state}, param){
		var senObj = {
    		"action":"login",
    		"username":param.username,
    		'password':ser.mMd5(param.password),
    		'yanZheng':param.yanzheng
    	}
    	ser.loadDataFun(ser.serAdd('adminLogin.php'),senObj,function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.ADMIN_LOGIN,msg.cont);
	  			if(typeof param.sessfun == 'function')param.sessfun(true);
        		
	  		}else{
	  			if(typeof param.sessfun == 'function')param.sessfun(false);
	  			
	  		}
    	})
	},
	upPassFun({commit,state}, param){
		var senObj = {
    		"oldPassw":ser.mMd5(param.oldPassw),
    		'newPassw':ser.mMd5(param.newPassw)
    	}
    	ser.loadDataFun(ser.serAdd('updataAdminPassword.php'),senObj,function(msg){
	  		if(msg.status == 'success'){
	  			if(typeof param.sessfun == 'function')param.sessfun(true);
	  		}else{
	  			if(typeof param.sessfun == 'function')param.sessfun(false);
	  		}
    	})
	},
	sessFun({commit,state},param){
    	ser.loadDataFun(ser.serAdd('adminLogin.php'),{action:'sess'},function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.ADMIN_LOGIN,msg.cont);
	  		}else{
	  			if(typeof param == 'function')param(false);
	  		}
    	})
	},
	removeAuser({commit,state}){
		commit(types.ADMIN_REMOVE);
	},
	adminList({commit,state}){
    	ser.loadDataFun(ser.serAdd('adminLogin.php'),{"action":"list"},function(msg){
	  		if(msg.status == 'success'){
        		commit(types.ADMIN_LIST,msg.cont);
	  		}
    	})
	},
	addAdmin({commit,state},param){
		param.mmima = ser.mMd5(param.mmima);
		ser.loadDataFun(ser.serAdd('adminLogin.php'),param,function(msg){
	  		if(msg.status == 'success'){
	  			if(typeof param.sessfun == 'function')param.sessfun(true);
	  		}else{
	  			if(typeof param.sessfun == 'function')param.sessfun(false);
	  		}
    	})
	},
	removeAdmin({commit,state},param){
		ser.loadDataFun(ser.serAdd('adminLogin.php'),param,function(msg){
	  		if(msg.status == 'success'){
	  			if(typeof param.sessfun == 'function')param.sessfun(true);
	  		}else{
	  			if(typeof param.sessfun == 'function')param.sessfun(false,msg.cont.error);
	  		}
    	})
	}
}

const mutations={
	[types.ADMIN_LOGIN](state,data){
		state.abool=true;
		state.auser=data.name;
		state.aname=data.nick;
		state.purview=parseInt(data.purview).toString(2).split("").reverse();
	},
	[types.ADMIN_REMOVE](state){
		state.abool=false;
		state.auser='';
		state.aname='';
	},
	[types.ADMIN_LIST](state,data){
		state.adminlist = data.arr;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}