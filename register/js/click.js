$(document).ready(function(){
		var thing=$("div.thing");
		var books=$("div.books");
		var bton=$("div.bton");
		var res=$("a.res");
		var book=$("a.book");
bton.click(function(e){
		 if(e.target.innerHTML=="物品"){
		 	 res.css("background-color","#d6f5ff");
		 	 book.css("background-color","#33ccff");
		 	 res.css("color","#33ccff");
		 	 book.css("color","#FFFFFF");
		 	 thing.css("display","block");
		 	 books.css("display","none");
		 }else{
		 	res.css("background-color","#33ccff");
		 	book.css("background-color","#d6f5ff");
		 	res.css("color","#FFFFFF");
		 	book.css("color","#33ccff");
		 	thing.css("display","none");
		 	books.css("display","block");
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