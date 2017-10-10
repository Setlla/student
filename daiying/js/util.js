function viliemail(em){
	var isemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(em);
	if(!isemail){
		alert("您输入的邮箱有误");
		return false;
	}else{
		return true;
	}
		
}
function viliphone(ph){
	var isphone = /^1[34578]\d{9}$/.test(ph);
	if(!isphone){
		alert("您输入的号码无效");
		return false;
	}else{
		return true;
	}
	
}


function checkPwd(str) {
	if(str.length < 6) {
		alert("请输入密码");
		return false;
	}else {
		return true;
	}
}


//orderDetails,details页面有用到：解析url里面的Id值；
function getParams(name){
	 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
}


//orderDetails,firmOrder页面拿到“user”里面的值；
var setUser = function(){
	var detail=$(".detail");
	var user = JSON.parse(localStorage.getItem("user"));
	detail.find(".name").html(user.name);
	detail.children(".phone").html(user.phone);
	detail.find(".address").html(user.address);
}
setUser();

$(document).on("click",".back",function(){
	history.back();
})

