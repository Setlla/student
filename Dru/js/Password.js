
	
	$(document).on("click",".login",function(){	
		var phone=$(".phone");
		var password=$(".password");
		
		if(valiphone(phone.val())&&valipassword(password.val())){		
			$.ajax({
				type:"post",
				url:"http://192.168.0.143:3900/changepwd",
				async:true,
				contentType:"application/JSON",
				data: JSON.stringify({"phone":phone.val(),"password":hex_md5(password.val())}),
				success:function(data){
					console.log(data);	
				if(data.isChange== true ) {				
				 	location.href="loginLo.html";
				 }	
				}
				
			});	
		}
	})
	
	var i;
	var T;
		
	function show(){
		if(i>1){
			i=i-1;
			$(".send").css("background","#33CC33");	
			$(".login").css("background","#33CC33");
			$(".send").attr("disabled",true);
		}else{
			i="发送验证码",
			$(".send").css("background","#fa6c62");	
			$(".login").css("background","#33CCff");	
			$(".send").attr("disabled",false);
			clearInterval(T);
		}	
		$(".send").html(i);
	}
	
	
	
	$(document).on("click",".send",function(){
		i=9;	
		T=setInterval(show,1000);
	})
	
	
	

	
	

		










