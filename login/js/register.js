	
	var phone_reg=document.querySelector(".phone_reg");
	var mail_reg=document.querySelector(".mail_reg");
	var mail_ipt=document.querySelector(".mail_ipt");
	var phone_ipt=document.querySelector(".phone_ipt");
	var pwd_ipt=document.querySelector(".pwd_ipt");
	
	document.querySelector(".register").addEventListener("click",function(e){
		//手机注册
		if (e.target.innerText=="手机注册") {
			phone_reg.style.borderBottom="3px solid #33ccff";
			mail_reg.style.borderBottom="1px solid #dddddd";
			mail_ipt.style.display="none";
			phone_ipt.style.display="block";
			phone_ipt.value="";
			pwd_ipt.value="";

		} 
		//邮箱注册
		if (e.target.innerText=="邮箱注册") {
			phone_reg.style.borderBottom="1px solid #dddddd";
			mail_reg.style.borderBottom="3px solid #33ccff";
			document.querySelector(".mail_ipt").style.display="block";
			document.querySelector(".phone_ipt").style.display="none";
			mail_ipt.value="";
			pwd_ipt.value="";
		}
	})
	
	//注册按钮-注册邮箱或者手机号
	document.querySelector(".reg").addEventListener("click",function(){
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		} else{
			xmlhttp=new ActiveXObject();
		}
		
		xmlhttp.open("POST","http://192.168.0.127:3900/reg","true");
		
		var phone=document.querySelector(".phone_ipt").value;
		var p=/^1[34578]\d{9}$/.test(phone);
		
		var mail=document.querySelector(".mail_ipt");
		var m=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a -zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail);
		
		var pwd=document.querySelector(".pwd_ipt").value;
		//判断手机号是否符合正则
		if(!p && phone_ipt.style.display=="block"){
			alert("请输入正确的11位手机号！");
			document.querySelector(".phone_ipt").focus();
		}
		//判断邮箱是否符合正则
		if(!m && mail_ipt.style.display=="block"){
			alert("请输入正确的邮箱!");
			document.querySelector(".mail_ipt").focus();
		}
		
		xmlhttp.setRequestHeader("Content-Type","application/JSON");
		var use={
			phone:phone,
			email:mail.value,
			password:hex_md5(pwd)
		};
		xmlhttp.send(JSON.stringify(use));
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4 && xmlhttp.status==200){
				console.log(xmlhttp.responseText);
			}
		}
	})