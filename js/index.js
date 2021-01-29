$(function() {
	var navlist = [
		
		{
			'icon':'https://www.yy2.lv/uploads/20201219/d984667dbd0561e5b9957a2de5f8e634.jpg',
			'name':'爸爸点我',
			'url':'https://mtdasp.me?ch=mu',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200724/e41838ef67b29404b5681debe6cf291a.jpg',
			'name':'草榴',
			'url':'https://dxzcs.me?ch=mu',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200908/e6162d1d515d153d3b6162cddedcbc47.jpg',
			'name':'抖阴',
			'url':'https://20dy.me?channel=dy20cps',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200825/a3e129f529a4a5df2a29fe627d355b90.jpg',
			'name':'抖阴国际',
			'url':'https://dou1.me?channel=dy204zc',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/969aaf4401f07c6c7ab4245108c59263.png',
			'name':'楼凤',
			'url':'https://site.tea123.me/?code=eTdu&c=333',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200928/b4f8c647078178590affcadf6815d8be.png',
			'name':'杏吧',
			'url':'http://www.ccav18.net/go/66',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200826/72bafc1de0447b3252029ff856d49542.jpg',
			'name':'香蕉',
			'url':'https://www.anxnr.com/downloadEx/index.html?invite_code=50HBM2&_t=kk3ivq0e&',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200912/d59cb0a6a54172068ce4ea1586363963.jpg',
			'name':'泡芙',
			'url':'https://ppffz.me?dc=MH',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200724/401535e9c034d8780908fff837ecf1f2.png',
			'name':'约炮神器',
			'url':'https://yhacc.live?dc=MH',
		},
		{
			'icon':'https://www.18se.biz/upimg/applogos/20201201/20201201210841258.png',
			'name':'色中色',
			'url':'https://51sis.vip?dc=MH',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20201126/1a711951de5c986df73332fa49230785.jpg',
			'name':'精东',
			'url':'http://jdhot1.me?_c=jd2108s',
		},
		{
			'icon':'https://www.yy2.lv/uploads/20200817/842846dfbd4ef878c8d98dd0b822da84.png',
			'name':'快手成人',
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
			'url':'https://ttt.tangbr.net/chan/a10141/xme3',
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
		{
			'icon':'https://www.landenet.net/uploadfile/2016/0528/20160528102637548.png',
			'name':'密码7b2c',
			'url':'https://yunpan.360.cn/surl_ySUGm2nVEqt',
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
