	//登录按钮功能
	document.querySelector(".content button").addEventListener("click",function(){
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		} else{
			xmlhttp=new ActiveXObject();
		}
		
		xmlhttp.open("POST",_url+"/login","true");
		var account=document.querySelector(".account").value;
		var pwd=document.querySelector(".password").value;
		var s=phones(account);
		xmlhttp.setRequestHeader("Content-Type","application/JSON");
		var user={
			phone:account,
			password:hex_md5(pwd)
		};
		xmlhttp.send(JSON.stringify(user));
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status==200){		
				var islog=JSON.parse(xmlhttp.responseText);
				//判断登录成功和失败
				if(islog.islogin==true){					
					localStorage.setItem("token",islog.token);					
					alert("登录成功，欢迎"+account+"回来！^_^");
					location.href="personal_center.html"; 
				}else{
					alert("你输入的账户名或者密码错误，请重新输入！");
					location.reload(); 
				}
			}
		}
	})
	
	//动态头像	
	var user=JSON.parse(localStorage.getItem("user"));
	$('.circle').attr("src",user.headImage);
	
	//登录界面的注册按钮功能
	document.querySelector(".register").addEventListener("click",function(){
		location.href="register.html";
	})
	
	//忘记密码
	document.querySelector(".forgetpwd").addEventListener("click",function(){
		location.href="re_pwd.html";
	})
	
	



