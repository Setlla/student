function valiphone(phone){					//手机正则表达
	var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone);
	if(!hasphone){
		alert("此手机有误")			
	}
	return hasphone;
}
function valiemail(email){				//邮箱正则表达
	var hasemail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
	if(!hasemail){
		alert("此邮箱有误")
	}
	return hasemail;
}
function valipassword(password){
	var ispassword=/^[0-9A-Za-z]+$/.test(password);
	if(!ispassword){
		alert("此密码有误");
	}
	return ispassword;
}	
function getParams(name) {
 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
 }
function users(){
	var user =JSON.parse(localStorage.getItem("user"));
	$(".name").html(user.name);
	$(".phone").html(user.phone);
	$(".address").html(user.address);
}
	$(document).on("click",".arrow",function() {
		history.go(-1);
	})
