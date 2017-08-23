
	document.querySelector("#login").addEventListener("click",function(){
		var xhr=new XMLHttpRequest();
		var phone=document.querySelector(".zhanghao").value;
		var password=document.querySelector(".mima").value;	
		var user={
				phone:phone,
				password:password
			}
		xhr.open("POST","http://192.168.0.127:3900/login");
		xhr.setRequestHeader("content-type","application/json");
		xhr.send(JSON.stringify(user));
					
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				urse = xhr.responseText;
			}
		}		
			
	})



