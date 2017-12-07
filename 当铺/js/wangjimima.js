var phone = document.querySelector(".shouji")
var password = document.querySelector(".mima")
var code = document.querySelector(".yanzheng")

function aj() {
	var pn = JSON.stringify({
		"phone": phone.value,
		"password": password.value
	});

	$.ajax({
		type: "post",
		contentType: "application/JSON",
		data: pn,
		url: "http://39.108.219.59:8080/changepwd",
		success: function(data) {
			if(data.isChange){
				location.href="denglu.html"
			}else{
				alert("密码修改失败")
			}
		}
	});
}

document.querySelector(".fasong").addEventListener("click", function() {
	if(!pass()){
		return false;
	}
	this.style.background = "#999999";
	time(this)
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

document.querySelector(".tijiao").addEventListener("click", function() {
	if(banner() && pass()) {
		aj();
	};
})

function banner() {
	var mima = match(/^[a-zA-Z0-9_-]{6,16}$/, password.value, "你的密码输入格式有误")
	if(!mima) {
		return false;
	}
	return true;
}

function match(exp, value, des) {
	if(!exp.test(value)) {
		alert(des);
		return false;
	}return true;
}

function pass(){
	var shouji = match(/^1\d{10}$/, phone.value, "你的手机号码输入有误")
	if(!shouji) {
		return false;
	} 
	return true;
}
