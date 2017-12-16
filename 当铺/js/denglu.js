var phone = document.querySelector(".zhanghao");
var password = document.querySelector(".mima");

document.querySelector(".denglu").addEventListener("click", function() {
	if(check()) {
		login();
	}
})

function check() {
	if(!match(/^1\d{10}$/, phone.value, '你的手机号码输入有误！')) {
		return false;
	}
	if(!match(/^[\w]{6,12}$/i, password.value, '你的密码输入有误！')) {
		return false;
	}
	return true;
}

function login() {
	var xhr = new XMLHttpRequest;
	var pn=JSON.stringify({"phone":phone.value,"password":hex_md5(password.value)})
	xhr.open("POST", http+"login");
	xhr.setRequestHeader("content-type","application/json")
	xhr.send(pn);
	xhr.onreadystatechange = function() {
		if(xhr.status == 200 && xhr.readyState == 4) {
			var resp=JSON.parse(xhr.response)
			if(resp.islogin){
				localStorage.setItem("token",resp.token);//服务端下发的token植入到本地缓存，token代表当前登录者信息   sessionStorage
				location.href = "dangpu.html"
			}else{
				alert("账号或密码输入错误")
			}
		
		}
	}
}


document.querySelector(".wangji")