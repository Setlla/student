var length=$(".math img").length;
var index=0;
  $(".dot span").click(function(){
	  var index=$(".dot span").index(this);	
	  aa();
  })
  var aa=function(){
  	index=(index+1)%length;
  	 $(".dot span").eq(index).css("background","#33ccff").siblings().css("background","#ffffff");
	  $(".math").children("img").eq(index).show().siblings("img").hide();
	  
  }
  
var a = setInterval(aa,1000);
//var carousel=function(){
//	id=(id+1)%length;
//	$(".dot span").eq(id).trigger("click");
//	a = setTimeout(aa,1000)	
//}
$(".math img").hover(function(){
	clearInterval(a);
},function(){
	 a = setInterval(aa,1000);
})
