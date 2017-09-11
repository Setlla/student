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
 	password:hex_md5(password)
 }
 
  xhr.open('post','http://39.108.219.59/login',true);
  xhr.setRequestHeader("content-type","application/json");
  xhr.send(JSON.stringify(user));
 
  xhr.onreadystatechange=function(){
 	 if(xhr.readyState==4 && xhr.status==200){
 		 var result = JSON.parse(xhr.responseText);
 		 if(result.islogin == true){
 		 	alert("登陆成功")
 		 	token:localStorage.setItem("token",result.token)
 		 	location.href="dp.html";
 		 }else{
 		 	console.log(result)
 		 }
 	 }
  }
})
    

var find=document.querySelector(".zuo");
    find.addEventListener("click",function(){
     location.href="great.html";
    	
    })
var zhuce=document.querySelector(".you");
    zhuce.addEventListener("click",function(){
    	location.href="zhuce.html";
    })
    

var user = JSON.parse(localStorage.getItem("user"));
var image = document.querySelector(".blue img");
    $(".blue img").attr("src",user.headImage);