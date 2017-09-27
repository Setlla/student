  
// 	$.ajax({
// 	type:"post",
// 	url:_url+"changepwd",
// 	async:true,
// 	contentType:"application/json",
//// 	data:JSON.stringify({localStorage.getItem(token)}),
// 	success:function(){
// 		
// 	}
// });
//
//	
//	$(document).on("click",".send",function () {
//		
//		
//		show();
//		
//		
//		clearInterval(T)
//	})
//
//	var T;
//	var i;
//	
//	function show(){
//		if(i>0){
//			i=i-1;
//			$(this).css("background","#E9E9E9");	
//			var T=setInterval(show,1000);
//		}
//
//	}
//





var s=10;
var but= $(".send");
var time = function(){
			but.text("重新发送("+s+")");
			var	n = setTimeout("time()","1000");
			if(s>0){
				but.attr("disabled",true);
			}else{
				clearTimeout(n);
				but.attr("disabled",false);
				but.text("发送验证码") ;
				s=10;
			}
			s--;
		}

	
$(".send").click(function(){
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
		url:_url+"changepwd",
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
