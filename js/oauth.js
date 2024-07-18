mui.plusReady(function(){
var oauth = {};
var oauthList = null;

plus.oauth.getServices( function(data){
	oauthList = data;
}, function(){
	mui.toast('获取列表失败');
});

//获取的列表和当前点击的做对比
oauth.fFilterOauth = function( id ){
	for( var i in oauthList){
		if( oauthList[i].id == id ){
			return oauthList[i]
		}
	}
	return null;
}
})