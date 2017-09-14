	
	var phone_reg=document.querySelector(".phone_reg");
	var mail_reg=document.querySelector(".mail_reg");
	var mail_ipt=document.querySelector(".mail_ipt");
	var phone_ipt=document.querySelector(".phone_ipt");
	var pwd_ipt=document.querySelector(".pwd_ipt");
	var isflag=false;
	
	document.querySelector(".register").addEventListener("click",function(e){
		//手机注册
		if (e.target.innerText=="手机注册") {
			phone_reg.style.borderBottom="3px solid #33ccff";
			mail_reg.style.borderBottom="1px solid #dddddd";
			mail_ipt.style.display="none";
			phone_ipt.style.display="block";
			phone_ipt.value="";
			pwd_ipt.value="";
			isflag=true;
		} 
		//邮箱注册
		if (e.target.innerText=="邮箱注册") {
			phone_reg.style.borderBottom="1px solid #dddddd";
			mail_reg.style.borderBottom="3px solid #33ccff";
			document.querySelector(".mail_ipt").style.display="block";
			document.querySelector(".phone_ipt").style.display="none";
			mail_ipt.value="";
			pwd_ipt.value="";
			isflag=false;
		}
	})
	//用来判断电话跟邮箱的格式
	var judge=function(){
		//判断是手机注册click || 邮箱注册click
		if (isflag==true) {
			phones(phone_ipt.value);
			return true;
		} else{
			mails(mail_ipt.value);
			return true;
		}
	}
	//注册按钮事件
	document.querySelector(".reg").addEventListener("click",function(){
		if(judge()) {
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp=new XMLHttpRequest();
			} else{
				xmlhttp=new ActiveXObject();
			}
			
			xmlhttp.open("POST","http://39.108.219.59/reg","true");
			xmlhttp.setRequestHeader("Content-Type","application/JSON");
			var use={
				phone:phone_ipt.value,
				email:mail_ipt.value,
				password:hex_md5(pwd_ipt.value)
			};
			xmlhttp.send(JSON.stringify(use));
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					var isSuc=JSON.parse(xmlhttp.responseText);
					if(isSuc.isSuccess==true){
						alert("恭喜注册成功！^_^");
						location.href="login.html"; 
					}
				}
			}
		}
	})
	
	//注册返回
	document.querySelector(".header_arr").addEventListener("click",function(){
		location.href="login.html";
	})