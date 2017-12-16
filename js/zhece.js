var flag = 0;//0 表似乎邮箱，1 表示手机

document.querySelector('.write-b').addEventListener("click", function() {
	this.style.borderBottom = "0.04rem solid #33ccff";
	document.querySelector('.write-c').style.borderBottom = "0.02rem solid #dddddd";
	document.querySelector('.shuru-a').placeholder = "请输入真实手机号码";
	flag = 1;
})

function checkMobile(phone) {
	if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))) {
		alert("不是完整的11位手机号或者正确的手机号前七位");
		return false;
	}
	return true;
}

function email(phone) {
	if(!(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(email))) {
		alert("不是正确的");
		return false;
	}
	return true;

}

document.querySelector('.write-c').addEventListener("click", function() {
	this.style.borderBottom = "0.04rem solid #33ccff";
	document.querySelector('.write-b').style.borderBottom = "0.02rem solid #dddddd";
	document.querySelector('.shuru-a').placeholder = "请输入真实邮箱";
	flag = 0;
})

document.querySelector(".write-d").addEventListener("click", function() {
	var phone = document.querySelector(".shuru-a").value;
	var password = document.querySelector(".shuru-b").value;
	var textnumber = document.querySelector(".shuru-b").value;
	
	if(flag) {
		if(checkMobile(phone)) {
			bann(phone, password);
		}
	}else {
		if(email(phone)) {
		bann(phone, password);
	}
	}
})

function bann(phone, password) {
	var xxh = new XMLHttpRequest();
	xxh.open("POST", "http://39.108.219.59:8080/reg")
	xxh.setRequestHeader("content-type", "application/json")
	xxh.send(JSON.stringify({ phone: phone, password: b64_md5(password)}))
	xxh.onreadystatechange = function() {
		if(xxh.status == 200 && xxh.readyState == 4) {
			console.log(JSON.parse(xxh.response));
			if(JSON.parse(xxh.response).isSuccess) {
				location.href = "dangpu.html"
			} else {
				alert("账号或密码或验证码错误");
			}
		}

	}
}
document.querySelector(".tupian-a").addEventListener("click",function(){
	location.href="Denglu.html"
})





