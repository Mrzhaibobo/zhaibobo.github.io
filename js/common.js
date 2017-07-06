//搜索框自动伸缩
jQuery(function($) {
	$('.life_ban').bxSlider({
		infiniteLoop:false,
		controls:true,
		pager:false,
		minSlides: 1,
		maxSlides: 1,
		//slideWidth: 1440,
		slideMargin: 0
	});
	$(".search_text").focus(function(){
		$(".nav_search").animate({width:"150px"});
		$(this).animate({width:"140px"});
	});
	$(".search_text").blur(function(){
		$(".nav_search").animate({width:"80px"});
		$(this).animate({width:"80px"});
	});
});

//退出登录
function logout(){
	$.post("/weblogout.html", function(data){
		if(data.url){
			window.location.href = data.url;
		}else{
			window.location.reload();
		}
	});
}

//登录
function login(){
	var name = $("#loginName").val();
	var pass = $("#password").val();
	if(name=="输入帐号、手机号"||name.length==0){
		alert("账号为空哦~~~");
		return false;
	}
	if(name.length<6){
		alert("账号最少为6位呢~~~");
		return false;
	}
	if(pass.length==0){
		alert("密码不能为空哎~~~");
		return false;
	}
	if(pass.length<6){
		alert("密码最少为6位呢~~~");
		return false;
	}
	
	$.post("/weblogin.html", {"login_name":name,"passwd":pass}, function(data){
		if(data.result=="0"){
			alert(data.msg);
		}else{
			window.location.reload();
		}
	});
}

/*topLogin*/
function topLogin(){
	var name = $("#topUsername").val();
	var pass = $("#topPassword").val();
	if(name=="输入帐号、手机号"||name.length==0){
		alert("账号为空哦~~~");
		return false;
	}
	if(name.length<6){
		alert("账号最少为6位呢~~~");
		return false;
	}
	if(pass.length==0){
		alert("密码不能为空哎~~~");
		return false;
	}
	if(pass.length<6){
		alert("密码最少为6位呢~~~");
		return false;
	}
	
	$.post("/weblogin.html", {"login_name":name,"passwd":pass}, function(data){
		if(data.result=="0"){
			alert(data.msg);
		}else{
			window.location.reload();
		}
	});
}

/*midLogin*/
function midLogin(){
	var name = $("#midUsername").val();
	var pass = $("#midPassword").val();
	if(name=="输入帐号、手机号"||name.length==0){
		alert("账号为空哦~~~");
		return false;
	}
	if(name.length<6){
		alert("账号最少为6位呢~~~");
		return false;
	}
	if(pass.length==0){
		alert("密码不能为空哎~~~");
		return false;
	}
	if(pass.length<6){
		alert("密码最少为6位呢~~~");
		return false;
	}
	
	$.post("/weblogin.html", {"login_name":name,"passwd":pass}, function(data){
		if(data.result=="0"){
			alert(data.msg);
		}else{
			window.location.reload();
		}
	});
}

/*弹出中间登陆框*/
function Login(){
	$(".mid_box").show();
	$(".mid_drop").show();
}

//验证手机号码
function checkMobile(mobile) {
    var patrn = /^1[3|4|5|7|8][0-9]\d{8}$/;   // 11 位手机
    if(!patrn.exec(mobile)) {
        return false;
    } else {
        return true;
    };
};