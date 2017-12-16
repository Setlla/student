var wait=6;
function time(o) {
  if (wait == 0) {
   o.removeAttribute("disabled");   
   o.value="免费获取验证码";
   o.style.background="red"
   wait = 6;
  } else { 
 
   o.setAttribute("disabled", true);
   o.value="重新发送(" + wait + ")";
   wait--;
   setTimeout(function() {
    time(o)
   },
   1000)
  }
 }

document.querySelector(".shuru-c").addEventListener("click",function(){
	var phone = document.querySelector('.shuru-a').value;
	if(checkMobile(phone)) {
		time(this);
		this.style.cssText = "background:#999999";
	}
})

function checkMobile(phone) {
	if(!(/^1\d{10}$/.test(phone))) {
		alert("不是完整的11位手机号或者正确的手机号前七位");
		return false;
	}
	return true;
}


function mima(password){   
if(password.length<6){
    alert("密码至少大于等于6位");
    return false;
}
return true;
}

document.querySelector(".tijiao").addEventListener("click",function(){
	var phone = document.querySelector('.shuru-a').value;
	var looktips= document.querySelector('.shuru-b').value;
	var password= document.querySelector('.shuru-d').value;
	if(checkMobile(phone) && mima(password)) {
			bann(phone, password);
		}
})

function bann(phone, password){
var xxh=new XMLHttpRequest();
xxh.open("POST","http://39.108.219.59:8080/changepwd")
xxh.setRequestHeader("content-type","application/json")
xxh.send(JSON.stringify({phone:phone,password: hex_md5(password)}))
xxh.onreadystatechange=function(){
	if(xxh.status==200&&xxh.readyState==4){
		console.log(JSON.parse(xxh.response));
			if(JSON.parse(xxh.response).isChange) {
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
	












