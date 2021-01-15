$(function() {
	var navlist = [
		
		{
			'icon':'https://www.yy2.lv/uploads/20200928/b4f8c647078178590affcadf6815d8be.png',
			'name':'杏吧破解版',
			'url':'http://www.ccav18.net/go/66',
		},
		{
			'icon':'images/icon1.png',
			'name':'小米商城',
			'url':'https://www.xiaomi.com',
		},
		{
			'icon':'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_淘宝.png',
			'name':'淘宝',
			'url':'https://www.taobao.com',
		},
		{
			'icon':'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_58同城.png',
			'name':'58同城',
			'url':'https://www.58.com',
		},
		{
			'icon':'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_微博.png',
			'name':'新浪微博',
			'url':'https://www.weibo.com',
		},
		{
			'icon':'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_大众点评.png',
			'name':'大众点评',
			'url':'https://www.dianping.com',
		},
	];
	
	$.each(navlist,function(i,e){
		var html = '<li class="nav-item">';
			html += '<img src="'+e.icon+'" alt="" class="icon">';
			html += '<span class="name">'+e.name+'</span>';
			html += '</li>';
		var content = $(html);
		$('.navlist').append(content);
	});
	$('.navlist').on('click','.nav-item',function(){
		console.log(navlist[$(this).index()].url);
		window.location.href = navlist[$(this).index()].url;
	});
});
