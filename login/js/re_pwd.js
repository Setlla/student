	$(document).ready(function(){
		var num=60;
		//验证码倒计时函数
		var time = function(){	
			$('.isflag_right_ipt').text(num);	
			var t=setTimeout(time,1000);
			if (num==0) {
				clearTimeout(t);
				$('.isflag_right_ipt').attr('disabled').css("background",'#fa6c62');
				$('.isflag_right_ipt').text('发送验证码');				
				num=60;
			}else{
				$('.isflag_right_ipt').attr('disabled','disabled').css("background",'#c0baba');
				num--;
			}
		}
		//验证码点击事件
		$('.isflag_right_ipt').click(function(){
			time();
		})
		
		//返回键
		$('.header_arr').click(function(){
			location.href="login.html";
		})
		//提交事件	
		$('.reg').click(function(){
			$.ajax({
				type:"post",
				url:"http://192.168.0.158:3900/changepwd",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					phone:$('.phone_ipt').val(),
					password:hex_md5($('.pwd_ipt').val())
				}),
				success:function(data,status){
					if (data.isChange==true) {
						location.href="login.html";
					} else{
						console.log("找回密码失败！");
					}
				}
			})//ajax数据括号
		})//click事件括号
	})//ready括号