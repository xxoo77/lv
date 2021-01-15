$(function() {
	var navlist = [
		
		{
			'icon':'https://www.yy2.lv/uploads/20200928/b4f8c647078178590affcadf6815d8be.png',
			'name':'看完整版下载这个',
			'url':'http://www.ccav18.net/go/66',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/969aaf4401f07c6c7ab4245108c59263.png',
			'name':'茶馆儿',
			'url':'https://site.tea123.me/?code=eTdu&c=333',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/842846dfbd4ef878c8d98dd0b822da84.png',
			'name':'91快手',
			'url':'https://zb.91tvapi.me/chan/k10165/a5GN8',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/47275852694037ef8905494f7a387a25.png',
			'name':'91AV',
			'url':'https://app.aff91.com/chan-1108/aff-axa2B',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/df5444436599f60bd8b1eea305a8ee4a.png',
			'name':'91滴滴',
			'url':'https://download.91didi.xyz/chan-1025/aff-jbyC',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/73daeab17d4c70e0097874298ed3ee3f.png',
			'name':'汤头条',
			'url':'https://ttt.tangbr.info/chan/a10141/xme3',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/e9d6dde82d77cc8368a96917d68c5a3f.png',
			'name':'蚂蚁VPN',
			'url':'https://web.lanshuapi.com/c-333/a-a2Xkf',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/d298eca0ac93acc0bae730978ac8fc69.png',
			'name':'91短视频',
			'url':'https://download.91porn005.me/chan-1130/aff-dR2T7',
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
