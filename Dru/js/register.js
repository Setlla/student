

	var phone=document.querySelector(".phone");
	var email=document.querySelector(".email");
	var password=document.querySelector(".password");
	var isphone=true;
	var qh=document.querySelector(".qh");
		
	qh.addEventListener("click",function(e){		
		//e.target.style.borderBottom="4px solid #33ccff";	
		if(e.target.className=="phoReg"){	//手机
			e.target.style.borderBottom="3px solid #33ccff";	
			e.target.nextElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="block";
			email.parentNode.style.display="none";			
			isphone=true;				
		}
		else if(e.target.className=="emaReg"){								//切换邮箱
			e.target.style.borderBottom="3px solid #33ccff";	
			e.target.previousElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="none";
			email.parentNode.style.display="block";
			isphone=false;
		}	
	})	
	function submit(){			//提交数据
		var xhr=new XMLHttpRequest();
		xhr.open("POST","http://192.168.0.143:3900/reg");
		xhr.setRequestHeader("Content-Type","application/json");
		var content={
			phone:phone.value,
			email:email.value,
			password:hex_md5(password.value)
		}		
		xhr.send(JSON.stringify(content));
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result = JSON.parse(xhr.responseText);
				 if(result.isSuccess == true ) {
				 	location.href="loginLo.html";
				 }else {
				 	console.log(result)
				 }
			}
		}							
	}	

	document.querySelector(".register").addEventListener("click",function(){
		if(isphone){
			if(valiphone(phone.value)){
				submit();				
			}
		}
		else{
			if(valiemail(email.value)){
				submit();
			}
		}	
	})






