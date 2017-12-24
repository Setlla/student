//正则部分
var flag = "phone";
var phone = $(".phone");
var email = $(".email");
var pass = $(".password");
var code = $(".code");

document.querySelector(".fangshi").addEventListener("click", function(e) {
	changeBorder(e);
	changeDisplay(e);
})

$(".zhuce").click(function(){
	if(check()&&passFlag()) {
		aj();
	}
})

//function aj() {
//	var xhr = new XMLHttpRequest();
//	xhr.open("POST", "http://39.108.219.59:8080/reg");
//	var param = JSON.stringify({
//			phone: phoneObj.value,
//			password: hex_md5(passwordObj.value)
//		} //向后端传输的数据
//	)
//	xhr.send(param);
//	xhr.onreadystatechange = function() {
//		if(xhr.readyState == 4 && xhr.status == 200) {
//			alert(JSON.parse(xhr.response).result)
//			location.href="denglu.html";
//		}
//	}
//}
function aj(){
	$.ajax({
		type:"post",
		url:http+"reg",
		contentType:"application/json",
		data:JSON.stringify({
			"phone":phone.val(),
			"password":hex_md5(pass.val())
		}),
		success:function(result){
			alert(result.result)
			location.href="denglu.html"
		}
	});
}

//手机注册和邮箱注册的切换
function changeBorder(e) {
	document.querySelector(".shouji").style.borderBottom = "0";
	document.querySelector(".youxiang").style.borderBottom = "0";
	if(e.target.className != "fangshi") {
		e.target.style.borderBottom = "0.05rem solid #33ccff";
	}
}

function changeDisplay(e) {
	if(e.target.className == "shouji") {
		flag = "phone";
		phone.css("display","flex")
		email.css("display","none")
	} else {
		flag = "emial";
		phone.css("display","none")
		email.css("display","flex")
	}
}

//正则
function check(){
	var account;
	if (flag=="phone") {
		account = match(/^1\d{10}$/, phone.val(), "请输入正确的手机号码！")
	} else{
		account = match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, email.val(), "请输入正确的邮箱！");
	}
	return account ?  true : false;
}

function match(exp, value, des) {
	if(!exp.test(value)) {
		alert(des);
		return false;
	}return true;
}


//密码正则
function passFlag(){
	var passwd=match(/^[\w]{6,12}$/,pass.val(), "你的密码输入有误!")
	return passwd ? true : false;
}
//
//function check() {
//	var passFlag;
////	var codeFlag;
//
//	if(flag == "phone") {
//		var phone = phoneObj.value;
//		flag = match(/^1\d{10}$/, phone, "请输入正确的手机号码！");
//	} else {
//		var email = emailObj.value;
//		flag = match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, email, "请输入正确的邮箱！");
//	}
//	if(!flag) {
//		return false;
//	}else{
//		return true;
//	}
//	passFlag = match(/^[\w]{6,12}$/i, password.value, "你的密码输入有误!");
//		if(!passFlag) {
//		return false;
//	}else{
//		return true;
//	}
//	if (!codeFlag == testCode()) {
//		return false;
//	} else{
//		return true;
//	}
//}

//function testCode() {
//	//发送的验证和手机收到的验证码是否一致？
//	if(code != codeObj.value) {
//		alert("您输入的验证码有误")
//		return false;
//	} 
//	return true;
//}

//function messInter(code, mobile) { //发送验证码
//	var xhr = new XMLHttpRequest();
//	xhr.open("GET", "http://smsapi.api51.cn/code/?code=" + code + "&mobile=" + mobile);
//	xhr.setRequestHeader("Authorization", "APPCODE 7b72d29ce70e43c28d5618d4e6070048");
//	xhr.send();
//	xhr.onreadystatechange = function() {
//		if(xhr.status == 200 && xhr.readyState == 4) {
//			console.log(xhr.response);
//		}
//	}
//}

//var code = Math.floor(Math.random() * 10000)
//document.querySelector(".sendMessage").addEventListener("click", function() {
//	var phone = phoneObj.value;
//	messInter(code, phone);
//})

//var wait = 60;
//
//function time(o) {
//	if(wait == 0) {
//		o.removeAttribute("disabled");
//		o.style.background = "red";
//		o.value = "获取验证码";
//		wait = 60;
//	} else {
//		o.setAttribute("disabled", true);
//		o.value = "倒计时(" + wait + ")";
//		wait--;
//		setTimeout(function() {
//			time(o)
//		}, 1000)
//	}
//}

//document.querySelector(".sendMessage").addEventListener("click", function() {
//	var phone = phoneObj.value;
//	m = match(/^1\d{10}$/, phone, "请输入正确的手机号码！");
//	if(!m) {
//		return false;
//	};
//	this.style.background = "#999999";
//	time(this)
//})