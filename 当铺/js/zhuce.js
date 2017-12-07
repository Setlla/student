//正则部分
var flag = "phone";
var phoneObj = document.querySelector(".phone");
var emailObj = document.querySelector(".email");
var passwordObj = document.querySelector(".password");
var codeObj = document.querySelector(".code");

document.querySelector(".fangshi").addEventListener("click", function(e) {
	changeBorder(e);
	changeDisplay(e);
})

document.querySelector(".zhuce").addEventListener("click", function() {
	if(check()) {
		aj();
	}
})

function aj() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://39.108.219.59:8080/reg");
	var param = JSON.stringify({
			phone: phoneObj.value,
			password: passwordObj.value
		} //向后端传输的数据
	)
	xhr.send(param);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			alert(xhr.response)
		}
	}
}

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
		phoneObj.style.display = "flex"
		emailObj.style.display = "none"
	} else {
		flag = "emial";
		phoneObj.style.display = "none"
		emailObj.style.display = "block"
	}
}

function check() {
	var flag;
	var passFlag;
	var codeFlag;

	if(flag == "phone") {
		var phone = phoneObj.value;
		flag = match(/^1\d{10}$/, phone, "请输入正确的手机号码！");
	} else {
		var email = emailObj.value;
		flag = match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, email, "请输入正确的邮箱！");
	}
	/*if(!flag) {
		return false;
	};*/
	passFlag = match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,32}$/, password, "你的密码输入有误!");
	/*	if(!passFlag) {
		return false;
	};*/
	codeFlag = testCode();
	return flag & passFlag & codeFlag
}

function match(regexp, value, des) { //通用匹配函数
	if(!regexp.test(value)) { //!表示取反，！0=1
		alert(des);
		return false;
	} 
	return true;
}

function testCode() {
	//发送的验证和手机收到的验证码是否一致？
	if(code != codeObj.value) {
		alert("您输入的验证码有误")
		return false;
	} 
	return true;
}

function messInter(code, mobile) { //发送验证码
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://smsapi.api51.cn/code/?code=" + code + "&mobile=" + mobile);
	xhr.setRequestHeader("Authorization", "APPCODE 7b72d29ce70e43c28d5618d4e6070048");
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.status == 200 && xhr.readyState == 4) {
			console.log(xhr.response);
		}
	}
}

var code = Math.floor(Math.random() * 10000)
document.querySelector(".sendMessage").addEventListener("click", function() {
	var phone = phoneObj.value;
	messInter(code, phone);
})

var wait = 60;

function time(o) {
	if(wait == 0) {
		o.removeAttribute("disabled");
		o.style.background = "red";
		o.value = "获取验证码";
		wait = 60;
	} else {
		o.setAttribute("disabled", true);
		o.value = "倒计时(" + wait + ")";
		wait--;
		setTimeout(function() {
			time(o)
		}, 1000)
	}
}

document.querySelector(".sendMessage").addEventListener("click", function() {
	var phone = phoneObj.value;
	m = match(/^1\d{10}$/, phone, "请输入正确的手机号码！");
	if(!m) {
		return false;
	};
	this.style.background = "#999999";
	time(this)
})