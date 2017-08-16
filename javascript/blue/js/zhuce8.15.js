var email=document.querySelector(".one1");
var phone=document.querySelector(".one2");
var password=document.querySelector(".two");
var rgr = document.querySelector(".register");
var ph = document.querySelector(".phone");
var	em = document.querySelector(".email");
var pass = document.querySelector(".password");
var isphone=false;
	rgr.addEventListener("click",function(e){
	   e.target.style.borderBottom = "3px solid #33ccff";
	 if(e.target.className=="emails"){
	 	phone.style.display="none";
	 	email.style.display="block"; 
	 	console.log(e.target);
	 	e.target.previousElementSibling.style.borderBottom="none";
	 	isphone=false;
	 }
	   else{
	   	console.log(e.target);
	   	e.target.nextElementSibling.style.borderBottom="none";
	   	email.style.display="none";
	   	phone.style.display="block";
	   	isphone=true;
	   }
})
	var check = function() {
		if(isphone) {
			viliphone(ph.value);
		}else
		{
			viliemail(em.value);
		}
	}
	
var register = document.querySelector(".foot");
	register.addEventListener("click",function(){	
	check();	
	
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}
		else{
			xhr=new ActiveXObject();
		}
	
	var xhr =new XMLHttpRequest;
	var user ={
		phone:ph.value,
		email:em.value,
		passward:hex_md5(pass.value)
	}
	xhr.open('post','http://192.168.0.127:3900/reg');
	xhr.setRequestHeader("Content-Type","application/json");
	xhr.send(JSON.stringify(user));
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=JSON.parse(xhr.responseText);
			if(result.isSuccess==true){
				location.href="8.13.html";
			}else{
				console.log(result);
			}
		}
	}
	})
	
		
	
