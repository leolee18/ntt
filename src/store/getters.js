const getters={
	disPos(state){
		return [{
	          value: '1',
	          label: '精品课堂'
	        }, {
	          value: '2',
	          label: '社员课堂'
	        }
		];
	},
	disAllPos(state){
		return [{
	          value: '',
	          label: '全部'
	        },{
	          value: '1',
	          label: '精品课堂',
	        }, {
	          value: '2',
	          label: '社员课堂'
	        }
		];
	},
	jumpTyp(state){
		return [{
	          value: '1',
	          label: 'H5'
	        }, {
	          value: '2',
	          label: '栏目'
	        }, {
	          value: '3',
	          label: '课程'
	        }, {
	          value: '4',
	          label: '专题'
	        }
		];
	},
	pageDis(state){
		return [{
	          value: '1',
	          label: '上架'
	        }, {
	          value: '0',
	          label: '下架'
	        }
		];
	},
	addImgSA(state){
		return {
			actionUrl:'http://51coach.com/xcxcl/admin/addImg.php',
            actMp4Url:'http://51coach.com/xcxcl/admin/addMp4.php'
		}
	}
}
export default getters;