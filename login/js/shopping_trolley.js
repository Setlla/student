	$(document).ready(function(){
		var length=$('.list_radio').length;
		var index=0;
		//全选按钮
		$('.select_radio').click(function(){
			if ($('.select_icon_radio').css("display")=="none") {
				$('.select_icon_radio').css("display","inline-block");
				$(this).css("border","1px solid #33CCFF");
				$('.list_radio').children().eq(index).css("display","inline-block").siblings().css("display","inline-block");
				$('.list_radio').eq(index).css("border","1px solid #33CCFF");
				
			} else{
				$('.select_icon_radio').css("display","none");
				$(this).css("border","1px solid #a1a1a1");
				$('.list_radio').children().eq(index).css("display","none").siblings().css("display","none");
				$('.list_radio').eq(index).css("border","1px solid #a1a1a1");
			}	
			index=(index+1)%length;
		})	
		//单选按钮
		$('.list_radio').click(function(){
			if ($('.list_icon_radio').css("display")=="none") {
				$('.list_icon_radio').eq(index).css("display","inline-block");
				$(this).eq(index).css("border","1px solid #33CCFF");
			} else{
				$('.list_icon_radio').eq(index).css("display","none");
				$(this).eq(index).css("border","1px solid #a1a1a1");
			}
		})
			
		
	})//ready的括号