var password=document.querySelector(".two");
var rgr = document.querySelector(".register");
var ph = document.querySelector(".phone");
var	em = document.querySelector(".email");
var pass = document.querySelector(".password");
var isphone=true;
	rgr.addEventListener("click",function(e){
	   e.target.style.borderBottom = "3px solid #33ccff";
	 if(e.target.className=="emails"){
	 	ph.parentNode.style.display="none";
	 	em.parentNode.style.display="block"; 
	 	console.log(e.target);
	 	e.target.previousElementSibling.style.borderBottom="none";
	 	isphone=false;
	 }
	   else{
	   	console.log(e.target);
	   	e.target.nextElementSibling.style.borderBottom="none";
	   	em.parentNode.style.display="none";
	   	ph.parentNode.style.display="block";
	   	isphone=true;
	   }
})
//	var check = function() {
//		if(isphone) {
//			viliphone(ph.value);
//		}else{
//			viliemail(em.value);
//		}
//	}




var xhr =new XMLHttpRequest;
var register = document.querySelector(".foot");
	register.addEventListener("click",function(){	
	if(isphone){
		if(viliphone(ph.value) && checkPwd(pass.value)){
			submit();
		}
	}else{
		if(viliemail(em.value)){
			submit();
		}
	}
})
	function submit(){
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}
			else{
				xhr=new ActiveXObject();
			}
		var user ={
			phone:ph.value,
			email:em.value,
			password:hex_md5(pass.value)
		}
		xhr.open('post','http://192.168.0.143:3900/reg');
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.send(JSON.stringify(user));
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var result=JSON.parse(xhr.responseText);
				if(result.isSuccess==true){
					location.href="denglu.html";
				}else{
					console.log(result);
				}
			}
		}
	}

	
		
	
