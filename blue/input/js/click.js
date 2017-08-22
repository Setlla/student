var thing=document.querySelector(".thing");
var books=document.querySelector(".books");
var bton=document.querySelector(".bton");
var res=document.querySelector(".res");
var book=document.querySelector(".book");
  bton.addEventListener('click',function(e){
  	if(e.target.innerHTML=="物品"){
  		res.style.background="#d6f5ff";
  		book.style.background="none";
  		res.style.color="#33ccff";
  		book.style.color="#FFFFFF"
  		thing.style.display="block";
  		books.style.display="none";
  	}else{
  		book.style.background="#d6f5ff";
  		res.style.background="none";
  		res.style.color="#FFFFFF";
  		book.style.color="#33ccff"
  		thing.style.display="none";
  		books.style.display="block";
  	}
  })