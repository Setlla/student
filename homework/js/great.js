//var iphoneRegex=/^1[34578]\d{9}$/.test(".number");

$(".submit").click(function(){	  	  
	var user={
		    phone:number.val(),	    
			password:hex_md5(into.val())		
	    }
	if(iphone(number.val()) && cheakpwd(into.val())){
		$.ajax({
		type:"post",
		url:"http://39.108.219.59/changepwd",
		async:true,
		contentType:"application/json",
		data: JSON.stringify(user),
		success:function(data){
			
			if(data.isChange==true){		
				
		        location.href="denglu.html";		
			}else{
				alert("格式错误")
				console.log(data)
			}
		}
	    }); 
	}
	
	
})
        
