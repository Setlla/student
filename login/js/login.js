	document.querySelector(".content button").addEventListener("click",function(){
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		} else{
			xmlhttp=new ActiveXObject();
		}
		
		xmlhttp.open("POST","http://192.168.0.127:3900/login","true");
		var account=document.querySelector(".account").value;
		var pwd=document.querySelector(".password").value;
		xmlhttp.setRequestHeader("Content-Type","application/JSON");
		var user={
			phone:account,
			password:pwd
		};
		xmlhttp.send(JSON.stringify(user));
		xmlhttp.onreadystatechange=function(e){
			if(xmlhttp.readyState==4 && xmlhttp.status==200){		
				console.log(xmlhttp.responseText);
				window.location.assign( "http://192.168.0.115:8020/login/mobile_JT.html?__hbt=1502712522078"); 
			}
			
		}

	})
	
	
	



