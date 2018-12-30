import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import getters from './getters'
import actions from './actions'
/* import auser from './modules/adminUser'
import puser from './modules/platformUsers' */

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		/* auser,
		puser*/
	}
});