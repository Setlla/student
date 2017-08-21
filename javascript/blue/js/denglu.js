	
				document.querySelector(".login").addEventListener("click",function(){
						var xhr;
				if(window.XMLHttpRequest){
					xhr=new XMLHttpRequest();
				}
				else{
					xhr=new ActiveXObject();
				}
				var phone = document.querySelector(".phone").value;
				var	password = document.querySelector(".password").value;
				var user ={
					phone:phone,
					password:hex_md5(password)
				}
				xhr.open('post','http://192.168.0.127:3900/login');
				xhr.setRequestHeader("Content-Type","application/json");
				xhr.send(JSON.stringify(user));
				
				xhr.onreadystatechange=function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						user = xhr.responseText;
						location.href = "daiying work.html";
					}
				}
				})
			var reg = document.querySelector(".register");
			reg.addEventListener("click",function(){
				location.href = "8.14.html";
			})
				
				
				
				
				
				
				
//		document.querySelector(".login").addEventListener("click",function(){
//		var xhr=new XMLHttpRequest();
//		var phone=document.querySelector(".phone").value;
//		var password=document.querySelector(".password").value;	
//		var user={
//				phone:phone,
//				password:password
//			}
//		xhr.open("POST","http://192.168.0.127:3900/login");
//		xhr.setRequestHeader("content-type","application/json");
//		xhr.send(JSON.stringify(user));
//					
//		xhr.onreadystatechange=function(){
//			if(xhr.readyState==4&&xhr.status==200){
//				urse = xhr.responseText;
//			}
//		}		
//			
//	})