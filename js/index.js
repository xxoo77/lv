$(function() {
	var classify = ['福利','直播','攻略'];
	var navlist = [
		
		{
			'icon':'images/50hui.png',
			'name':'50度灰（重口）',
			'url':'http://club.i50dh.net/chan/h50386/66Jy',
			'size': 0
		},
		{
			'icon':'images/2.gif',
			'name':'麻豆推荐',
			'url':'https://mdapp07.com/?_c=sqs00058',
			'size': 0
		},
		{
			'icon':'images/3.jpg',
			'name':'草榴',
			'url':'https://spjugt.xyz?ch=zt01',
			'size': 0
		},
		{
			'icon':'images/4.jpg',
			'name':'抖阴',
			'url':'https://24dy.me/?channel=dy20cps',
			'size': 0
		},
		{
			'icon':'images/5.jpg',
			'name':'抖阴国际',
			'url':'https://dou4.me/?channel=dy204zc',
			'size': 0
		},
		{
			'icon':'images/6.gif',
			'name':'楼凤',
			'url':'http://site.tea-51.com/?code=6JHu&c=1138',
			'size': 0
		},
		{
			'icon':'images/7.png',
			'name':'杏吧',
			'url':'http://www.ccav18.net/go/66',
			'size': 0
		},
		{
			'icon':'images/app.png',
			'name':'站长推荐',
			'url':'https://mit002.me/?dc=mtxiaoer030',
			'size': 0
		},
		{
			'icon':'images/9.jpg',
			'name':'泡芙',
			'url':'http://pfdspm.me?dc=MH',
			'size': 0
		},
		{
			'icon':'images/10.png',
			'name':'约炮神器',
			'url':'https://91yph.me/?dc=MH',
			'size': 0
		},
		{
			'icon':'images/11.png',
			'name':'色中色',
			'url':'http://sispfb.me/?dc=MH',
			'size': 0
		},
		{
			'icon':'images/12.jpg',
			'name':'精东',
			'url':'http://jdhot1.me?_c=jd2108s',
			'size': 0
		},
		{
			'icon':'images/13.png',
			'name':'快手成人',
			'url':'https://zb.91tvapi.me/chan/k10431/bcMeB',
			'size': 0
		},
		{
			'icon':'images/14.png',
			'name':'91AV',
			'url':'http://download.aff91.com/chan-1294/aff-beFz4',
			'size': 0
		},
		{
			'icon':'images/15.png',
			'name':'91滴滴',
			'url':'https://app.91didi.xyz/chan-1198/aff-zqhD',
			'size': 0
		},
		{
			'icon':'images/16.png',
			'name':'汤头条',
			'url':'https://news.ttt001.net/chan/a10435/afvQ4',
			'size': 0
		},
		{
			'icon':'images/17.png',
			'name':'蚂蚁VPN',
			'url':'https://jsq2.laihuluwa.com/c-1138/a-aKSxm',
			'size': 0
		},
		{
			'icon':'images/18.png',
			'name':'91短视频',
			'url':'http://download.91porn.love/chan-1340/aff-eYh4e',
			'size': 0
		},
	];
	var urllist = [];
	addApp(0);
	$.each(classify,function(i,e){
		var html = '<li class="class-item">';
			html += e;
			html += '</li>';
		var content = $(html);
		$('.classify').append(content);
	});
	$('.navlist').on('click','.nav-item',function(){
		window.location.href = urllist[$(this).index()];
	});
	$('.classify').on('click','.class-item',function(){
		var clickthis = $(this);
		clickthis.addClass('active').siblings().removeClass('active');
		var index = clickthis.index();
		$('.navlist').empty();
		addApp(index);
	});
	function addApp(size){
		urllist = [];
		$.each(navlist,function(i,e){
			if(e.size == size){
				urllist.push(navlist[i].url);
				var html = '<li class="nav-item">';
					html += '<img src="'+e.icon+'" alt="" class="icon">';
					html += '<span class="name">'+e.name+'</span>';
					html += '</li>';
				var content = $(html);
				$('.navlist').append(content);
			}
		});
	}
});
