
	document.querySelector("#login").addEventListener("click",function(){
		var xhr=new XMLHttpRequest();
		var phone=document.querySelector(".zhanghao").value;
		var password=document.querySelector(".mima").value;	
		var user={
				phone:phone,
				password:hex_md5(password)
			}
		xhr.open("POST","http://39.108.219.59/login");
		xhr.setRequestHeader("content-type","application/json");
		xhr.send(JSON.stringify(user));
					
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result = JSON.parse(xhr.responseText);
				 if(result.islogin == true ) {
				 	localStorage.setItem("token", result.token);
				 	location.href="Pawnshop.html";
				 }else {
										//手机正则表达
					var hasphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
					if(!hasphone){
						alert("此手机有误")			
					}
						return hasphone;											
				 	console.log(result)
				 }			
			}
		}		
			
	})



