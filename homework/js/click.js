$(document).ready(function(){
		var thing=$("div.thing");
		var books=$("div.books");
		var bton=$("div.bton");
		var res=$("a.res");
		var book=$("a.book");
$(".bton a").click(function(e){
	  $(this).addClass("into").siblings().removeClass("into");
	  
		 if(e.target.innerHTML=="物品"){
		 	thing.show();
		 	books.hide();		 
		 }else{
		 	thing.hide();
		 	books.show();	 			 	
		 }
	});
});
//bton.addEventListener('click',function(e){
//	if(e.target.innerHTML=="物品"){
//		res.style.background="#d6f5ff";
//		book.style.background="none";
//		res.style.color="#33ccff";
//		book.style.color="#FFFFFF"
//		thing.style.display="block";
//		books.style.display="none";
//	}else{
//		book.style.background="#d6f5ff";
//		res.style.background="none";
//		res.style.color="#FFFFFF";
//		book.style.color="#33ccff"
//		thing.style.display="none";
//		books.style.display="block";
//	}
//})