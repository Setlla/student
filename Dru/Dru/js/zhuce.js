
	var phone=document.querySelector(".phone");
	var email=document.querySelector(".email");
	var password=document.querySelector(".password");
	var isphone=true;
	var qh=document.querySelector(".qh");
		
	qh.addEventListener("click",function(e){		
		e.target.style.borderBottom="4px solid #33ccff";
		if(e.target.className=="phoReg"){
			e.target.nextElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="block";
			email.parentNode.style.display="none";
			isphone=true;				
		}
		else{
			e.target.previousElementSibling.style.borderBottom="none";
			phone.parentNode.style.display="none";
			email.parentNode.style.display="block";
			isphone=false;
		}	
	})
	function vliphone(){
		var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
		if(!hasphone){
			alert("此手机有误")
		}
		return hasphone;
	}
	
	
	
	
	


	document.querySelector(".register").addEventListener("click",function(){
	})




	function submit(){
		var xhr=new XMLHttpRequest();
		xhr.open("POST","http://192.168.0.127:3900/reg");
		xhr.setRequestHeader("content-type","application/json");
		var connten={
			phone:phone,
			email:email,
			password:password
		}		
		xhr.send(JSON.stringify(connten));
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				connten=xhr.responseText;
			}
		}		
				
		
	}

