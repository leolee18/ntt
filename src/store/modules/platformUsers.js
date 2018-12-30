import types from '../types.js'
import ser from '../../server/server';

const state={
	pageNo:0,
	total:0,
    tableData: []
}

const getters={
	pageNo(state){
		return state.pageNo;
	},
	totalNum(state){
		return state.total;
	},
	tableData(state){
		return state.tableData;
	}
}

const actions={
	userTotal({commit,state}){
		commit(types.PAGE_NO,0);
		ser.loadDataFun(ser.serAdd('user.php'),{action:'total'},function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.USER_TOTAL,msg.cont);
	  		}
   		});
	},
	userList({commit,state}){
		ser.loadDataFun(ser.serAdd('user.php'),{action:'list',start:state.pageNo*20},function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.USER_LIST,msg.cont);
	  		}
   		});
	},
	pageNo({commit,state},param){
		commit(types.PAGE_NO,param);
		this.dispatch('userList');
	},
	userLike({commit,state},param){
		ser.loadDataFun(ser.serAdd('user.php'),{action:'like',typ:param.select,namestr:param.name},function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.USER_LIKE,msg.cont);
	  		}
   		});
	},
	userDis({commit,state},param){
		ser.loadDataFun(ser.serAdd('user.php'),{action:'dis',uoid:param.uoid,dis:param.dis},function(msg){
	  		if(msg.status == 'success'){
	  			commit(types.USER_DIS,param);
	  		}
   		});
	}
}

const mutations={
	[types.USER_TOTAL](state,data){
		state.total=parseInt(data.uNum);
	},
	[types.USER_LIST](state,data){
		data.uArr.forEach(function(val){
			val.avatarUrl = ser.serUrl(val.avatarUrl);
		})
		state.tableData=data.uArr;
	},
	[types.PAGE_NO](state,data){
		state.pageNo=parseInt(data);
	},
	[types.USER_LIKE](state,data){
		state.total=parseInt(data.uNum);
		state.tableData=data.uArr;
	},
	[types.USER_DIS](state,data){
		state.tableData[data.ind].dis = data.dis;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}