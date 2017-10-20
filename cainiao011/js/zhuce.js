//返回
$(document).on("click touchstart",".befuore",function(){
	window.history.back();
})
//手机邮箱切换
var qh=document.querySelector(".qh") ;
var phone=document.querySelector("[name='phone']");				
var email=document.querySelector("[name='email']");	
var pass=document.querySelector("[name='password']");	
var isphone=true;
qh.addEventListener("click",function(e){
	e.target.style.borderBottom="2px #33ccff solid"
	if(e.target.className=="phoReg"){
		//切换到手机注册
		phone.parentNode.style.display="block";
		email.parentNode.style.display="none";
		e.target.nextElementSibling.style.borderBottom="none";
		isphone=true;
	}
		else{
		//切换到邮箱注册
		email.parentNode.style.display="block";
		phone.parentNode.style.display="none";
			e.target.previousElementSibling.style.borderBottom="none";
				isphone=false;
			}
	})
				 
//判断
function valiPhone(){
var hasPhone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
	if(!hasPhone){
		alert("此手机号有误！");
	}	
		return hasPhone;
	}

function valiEmail(){
    var hasEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value);
		if(!hasEmail){
			alert("此邮箱号有误！");
		}
			return hasEmail;							
		}

 //ajax提交注册信息
 function submit(){
var xhr=new XMLHttpRequest;		        	
	xhr.open(
		"POST",
		preUrl+"/reg"
); 
xhr.setRequestHeader("Content-Type","application/json");
var content={
	phone:phone.value,
	email:email.value,			        	
	password:hex_md5(pass.value)
}			        
xhr.send(JSON.stringify(content));		        
xhr.onreadystatechange=function(){
	if(xhr.status==200&&xhr.readyState==4){
		alert("注册成功");
		self.location="index.html"
		}       	
	 }     
}
 //总入口，监听，判断，提交
document.querySelector(".register").addEventListener("click",function(){					
if(isphone){//如果是，进行手机的验证
	if(valiPhone()){
		submit();
	}
}
	else{//邮箱
	if(valiEmail()){
		submit();
		}
	}							
})