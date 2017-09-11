var length=$(".math img").length;
var index=0;
  $(".dot span").click(function(){
	  var index=$(".dot span").index(this);	
	  Carousel();
  })
  var Carousel=function(){
  	index=(index+1)%length;
  	 $(".dot span").eq(index).css("background","#33ccff").siblings().css("background","#ffffff");
	  $(".math").children("img").eq(index).show().siblings("img").hide();
	  
  }
  
var a = setInterval(Carousel,1000);
$(".math img").hover(function(){
	clearInterval(a);
},function(){
	 a = setInterval(Carousel,1000);
})

console.log("http://39.108.219.59/getShopCar")
