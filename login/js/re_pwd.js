	$(document).ready(function(){
		var num=60;
		var time = function(){
			$('.isflag_right_ipt').text(num);
			var t=setTimeout("time()",100);
			if (num==0) {
				clearTimeout(t);
				$('.isflag_right_ipt').attr('disabled');
				$('.isflag_right_ipt').css("color",'#333333');
				$('.isflag_right_ipt').css("border-color",'#333333');
				$('.isflag_right_ipt').text('发送验证码');
				num=60;
			}else{
				$('.isflag_right_ipt').attr('disabled','disabled');
				$('.isflag_right_ipt').css("color",'#c0baba');
				$('.isflag_right_ipt').css("border-color",'#c0baba');
				num--;
			}
		}
		
		$('.isflag_right_ipt').click(function(){
			time();
		})
	})