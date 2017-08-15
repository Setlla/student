
	var phone=document.querySelector(".phone");
	var email=document.querySelector(".email");
	var password=document.querySelector(".password");
	var isphone=true;
	var qh=document.querySelector(".qh");
		
	qh.addEventListener("click",function(e){		
		e.target.style.borderBottom="4px solid #33ccff";	
		if(e.target.className=="phoReg"){	//手机
			e.target.nextElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="block";
			email.parentNode.style.display="none";			
			isphone=true;				
		}
		else{								//切换邮箱
			e.target.previousElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="none";
			email.parentNode.style.display="block";
			isphone=false;
		}	
	})	
	function valiphone(){					//手机正则表达
		var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
		if(!hasphone){
			alert("此手机有误")
		}
		return hasphone;
	}
	function valiemail(){				//邮箱正则表达
		var hasemail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
		if(!email){
			alert("此邮箱有误")
		}
		return hasemail;
	}
	
	function submit(){			//提交数据
		var xhr=new XMLHttpRequest();
		xhr.open("POST","http://192.168.0.127:3900/reg");
		xhr.setRequestHeader("content-type","application/json");
		var connten={
			phone:phone.value,
			email:email.value,
			password:hex_md5(password.value)
		}		
		xhr.send(JSON.stringify(connten));
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				connten=xhr.responseText;
			}
		}							
	}	
	


	document.querySelector(".register").addEventListener("click",function(){
		if(isphone){
			if(valiphone()){
				submit();
				alert("注册成功")
			}
		}
		else{
			if(valiemail()){
				submit();
				alert("注册成功")
			}
		}
//		location.href="dengru.html";
	})






