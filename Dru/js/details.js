


	var ul=$(".round a");
	$(document).on("click",".round a",function(e){
	        console.log(e.target.dataset.id);
   			var id = e.target.dataset.id;
			$(this).css("background","#33CCFF").siblings().css("background","white");
			$(".banner").children().eq(id).show().siblings("img").hide();
			
		
	})
		
	var PicTotal = 5;// 当前图片总数
	var CurrentIndex;// 当前鼠标点击图片索引
	var ToDisplayPicNumber = 0;// 自动播放时的图片索引		
		
		
	function PicNumClick() {
		$(".banner .round a").eq(ToDisplayPicNumber).trigger("click");
		ToDisplayPicNumber = (ToDisplayPicNumber +1) % PicTotal;
		setTimeout("PicNumClick()",1000);
	}
		setTimeout("PicNumClick()",1000);