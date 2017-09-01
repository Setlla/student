		
	
	
	var s=60;
	var but= $(".send button");
	var time = function(){
				but.text("重新发送("+s+")");
				var	n = setTimeout("time()","1000");
				if(s>0){
					but.attr("disabled",true);
				}else{
					clearTimeout(n);
					but.attr("disabled",false);
					but.text("发送验证码") ;
					s=60;
				}
				s--;
			}
	
	
$(".send button").click(function(){
	time();
})



var ph = $(".phone");
var pass = $(".password");
$(".foot").click(function(){
		var _data = {
			phone: ph.val(),
			password: hex_md5(pass.val()),
		}
		if(viliphone(ph.val()) && checkPwd(pass.val())){
			$.ajax({
			type:"post",
			url:"http://192.168.0.143:3900/changepwd",
			async:true,
			contentType:"application/json",
			data: JSON.stringify(_data),
			success: function(data) {
				if(data.isChange==true){
					location.href="denglu.html";
				}else{
					console.log("更改失败")
				}
			}
		    })
	    }	
})

	





