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
   

	
//  phonename();
//	emailname();	
//  


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

	xhr.open("post","http://39.108.219.59/reg",true);
	phonename();
	xhr.setRequestHeader("content-type","application/json");	
	var user={
		phone:mob.value,
		email:emal.value,
		password:hex_md5(pasd.value)		
	}
	
	xhr.send(JSON.stringify(user));
	xhr.onreadystatechange=function(){	  
		  if (xhr.readyState==4 && xhr.status==200){	   
		      var result = JSON.parse(xhr.responseText);
		      if(result.isSuccess == true){
		      	 alert("注册成功")
		         console.log("result");
		         location.href="http://127.0.0.1:8020/next/denglu.html";
		      }else{
		      	alert("请重新注册")
		      }
		      
			 }		    
		    }
	})
   
}
submit();


	 	



		