	
				document.querySelector(".login").addEventListener("click",function(){
					var pass=document.querySelector(".password");
					var ph=document.querySelector(".phone");
					if(viliphone(ph.value)  && checkPwd(pass.value)){
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
				xhr.open('post','http://39.108.219.59/login');
				xhr.setRequestHeader("Content-Type","application/json");
				xhr.send(JSON.stringify(user));
				
				xhr.onreadystatechange=function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						
						var result=JSON.parse(xhr.responseText);
						user = xhr.responseText;
						if(result.islogin==true){
							location.href = "hockshop.html";
						}else{
							alert("你输入的账号或密码有误")
						}
						
					}
				}
				}
				})
					
					
			
			var reg = document.querySelector(".register");
			reg.addEventListener("click",function(){
				location.href = "zhuce.html";
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