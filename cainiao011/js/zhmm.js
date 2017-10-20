//返回
$(document).on("click touchstart",".befuore",function(){
	window.history.back();
})       
       var phone=document.querySelector("[name='phoneNum']");
        var valid=document.querySelector("[name='validate']");
        var pass=document.querySelector("[name='password']");
        var tj=document.querySelector(".tijiao");
        var gouimg=document.querySelector("[name='apic']");
        var fs=document.querySelector("[name='fasong']")
        
	function show() {
		if(i>0){			
	   	i=i-1;
	   	fs.style.background="grey";
	   	tj.style.background="grey";
	   	tj.disabled=true;
		}
		else{
			i="发送验证码";
			fs.style.background="#fa6c62";
			tj.style.background="#33CCFF";
			tj.disabled=false;
			clearInterval(T);
		}	
		document.querySelector("[name='fasong']").innerHTML=i;
	}

		fs.addEventListener("click",function(e){
		 	i=10;
		 	T=setInterval(show,1000);
		})
		function viliphone(){
			var isphone=/^1([3578]\d{9}|4\d{9})$/.test(phone.value);
			if(!isphone){
				alert("此号码有误");
			}
			return isphone;
		}
    	function vilipassword(){
    		var ispassword=/^[0-9A-Za-z]+$/.test(pass.value);
			if(!ispassword){
				alert("此密码有误");
			}
			return ispassword;
   		}
		tj.addEventListener("click",function(e){
			if(viliphone()&&vilipassword()){
				submit();
		}
	 })
	 valid.addEventListener("blur",function(){
		 if(valid.value==123){
			fs.style.display="none";
			gouimg.style.display="block"
		}
		else{
			fs.style.display="block";
			gouimg.style.display="none"
		}
	})
    function submit(){
    	 var xhr=new XMLHttpRequest;
    	 xhr.open(
    	 	"post",
    	 	preUrl+"/changepwd");
    	 xhr.setRequestHeader("content-type","application/json");
    	 var content={
    	 	phone:phone.value,
    	 	password:hex_md5(pass.value)
    	 }   	 
    	 xhr.send(JSON.stringify(content));
    	 xhr.onreadystatechange=function(){
    	 	if(xhr.status==200&&xhr.readyState==4){
    	 		alert("密码修改成功");
    	 		self.location="index.html"
    	 	}
    	 } 	 
    }