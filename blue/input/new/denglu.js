 var xhr;   
    document.querySelector(".denglu").addEventListener('click',function(){
	
	 if(window.XMLHttpRequest){
	 	xhr=new XMLHttpRequest();
	 }else{
	 	xhr=new ActiveXObject();
	 }
	 var phone=document.querySelector(".phone").value;
	 var password=document.querySelector(".password").value;
	 var user= {
	 	phone:phone,
	 	password:password
	 }
	 
	 xhr.open('post','http://192.168.0.127:3900/login',true);
	 xhr.setRequestHeader("content-type","application/json");
	 xhr.send(JSON.stringify(user));
	 
	 xhr.onreadystatechange=function(){
	 	if(xhr.readyState==4 && xhr.status==200){
	 		
	 	}
	 }
})