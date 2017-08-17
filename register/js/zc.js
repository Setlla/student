var iphone=document.querySelector(".iphone");
var eml=document.querySelector(".youxiang");
var mob=document.querySelector(".mob");
var emal=document.querySelector(".emal");
var pasd=document.querySelector(".pasd");
var zc=document.querySelector(".zhuce");
   zc.addEventListener('click',function(e){
   	if(e.target.innerHTML=="手机注册"){
   		iphone.style.borderBottom=" solid #33ccff 3px"
   		eml.style.borderBottom=" solid #ddd 1px"
   		emal.style.display="none";
	   	mob.style.display="block";
   	}
   	if(e.target.innerHTML=="邮箱注册"){
	    eml.style.borderBottom=" solid #33ccff 3px"
	    iphone.style.borderBottom=" solid #ddd 1px"
	    emal.style.display="block";
		mob.style.display="none";  
   	}	   	   	 	  	   	   	 
   })
   
	function phonename(){
	var iphoneRegex=/^1[34578]\d{9}$/.test(mob);
	var emailRegex=
	/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emal);
	    if(!iphoneRegex && mob.style.display == "block"){
	    	alert("请输入正确手机号.")
	    }
	    if(!emailRegex && emal.style.display == "block"){
	    	alert("请输入正确的邮箱")
	    }
	}
    


var submit = function(){
	var register=document.querySelector(".bot");
 register.addEventListener('click',function(){	
var xhr;
	if (window.XMLHttpRequest)
	  {
	   xhr=new XMLHttpRequest();
	  }
	else
	  {
	   xhr=new ActiveXObject();
	}

	xhr.open("post","http://192.168.0.127:3900/reg",true);
	phonename();
	xhr.setRequestHeader("content-type","application/json");	
	var user={
		mob:mob.value,
		emal:emal.value,
		pasd:hex_md5(pasd.value)		
	}
	xhr.send(JSON.stringify(user));
	xhr.onreadystatechange=function(){	  
		  if (xhr.readyState==4 && xhr.status==200){	   
		      var result = JSON.parse(xhr.responseText);
		      if(result.isSuccess == true)
		      alert("注册成功")
		         location.href="http://127.0.0.1:8020/input/denglu.html";
			  }
		    
		    }
	})
}


	 	



		