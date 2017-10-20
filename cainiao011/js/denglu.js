        	var phone=document.querySelector("[name='phoneNum']");
        	var pass=document.querySelector("[name='password']");
        	
	      	function validate(){
	      		var isphone=/^1([3578]\d{9}|4\d{9})$/.test(document.querySelector("[name='phoneNum']").value);
	      		var isemail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
	      		.test(document.querySelector(".denglu").value);
	      		if(!isphone&&!isemail){
	     			alert('您输入的手机号/email有误');
	     		}
	      		
	      		return isphone||isemail;     		  
	      	}   
	      	     
	        function ssrbt(){
	        	var xhr=new XMLHttpRequest;
	        	xhr.open(
	        		"post",
	        		preUrl+"/login"
	        	);
	        	 xhr.setRequestHeader("Content-Type","application/json");
			        var content={
			        	phone:phone.value,		        	
			        	password:hex_md5(pass.value)
			        }			        
	        	
			    xhr.send(JSON.stringify(content));		        
			    xhr.onreadystatechange=function(){
			        if(xhr.status==200&&xhr.readyState==4){
			        	localStorage.setItem("token",JSON.parse(xhr.response).token);
			        	alert("登录成功");
			        	self.location="gerenzhongxin.html"
			        }       	
			    }	        	
	        	
	        }
	        var su=document.querySelector(".dl");
	        	su.addEventListener("click",function(){
	        		if(validate()){
	    			ssrbt();
	        		}
	        	})
	        	