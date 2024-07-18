let home = {};
const maps = null;
// 执行方法
home.init = function(successCb){
	fGetCityLimit(successCb)
}

// 监听当前位置
plus.geolocation.watchPosition(function(data){
	// 获取当前所在位置的市
	maps = data.address.city.replace('市','');
	console.log(JSON.stringify(data));
},function(){
	mui.toast('定位获取失败');
},{
	provider:'system'
});

// 当前定位的位置和数据拿到的所有位置做对比
function fGetFilterCity(arr){
	for(let i in arr){
		if(arr[i].cityname == maps){
			return arr[i];
		}
	}
	return arr[0];
}

// 请求限行城市数据
function fGetCityLimit(successCb){
	mui.ajax('https://api.jisuapi.com/vehiclelimit/city', {
		dataType:'json',
		data:{
			appkey:'15b163096b822dbf'
		},
		success:function(data){
			const result = data.result;
			const targetCity = fGetFilterCity(result);
			successCb(targetCity);
		}
	})
}