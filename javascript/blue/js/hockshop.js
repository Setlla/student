
var xhr =new XMLHttpRequest;
var things = document.querySelector(".max");
var book = document.querySelector(".books");
var all = document.querySelector(".things");
	all.addEventListener("click",function(e){
		if(e.target.className == "thing"){
			all.children[0].style.background = "rgba(225,225,225,0.8)";
			all.children[1].style.background = "#33ccff";
			things.style.display = "block";
			book.style.display = "none";
		}else{
			all.children[1].style.background = "rgba(225,225,225,0.8)";
			all.children[0].style.background = "#33ccff";
			things.style.display = "none";
			book.style.display = "block";
		}
	})
	
	
	
if(window.XMLHttpRequest){
	xhr=new XMLHttpRequest();
}
  else{
		xhr=new ActiveXObject();
}

xhr.open('post','http://192.168.0.146:3900/productList');
xhr.setRequestHeader("Content-Type","application/json");
xhr.send(JSON.stringify());
xhr.onreadystatechange=function(){
	if(xhr.readyState==4 && xhr.status==200){
		m=JSON.parse(xhr.responseText);
		
		
		for(var n=0;n<m.result.length;n++){
			var strings='<div class="bicycle">'
							  +'<div class="img">'
								  +'<img src='+m.result[n].Image+'/>'
							  +'</div>'
							  +'<div class="shanghai min">'
								  +'<div class="free">'
									  +'<p>'+m.result[n].Name+'</p>'
									  +'<span>'+m.result[n].Carriage+'</span>'
									  +'<span>'+m.result[n].Destination+'</span>'
									  +'<a href="#">'+m.result[n].Status+'</a>'
							  +'</div>'
								  +'<div class="price prices">'
									  +'<span>'+m.result[n].CurPrice+'</span>'
									  +'<span>'+m.result[n].OldPrice+'<span>'
									  +'<div class="round">'
										  +'<p></p>'
										  +'<p></p>'
										  +'<p></p>'
								 	  +'</div>'
						 	 	  +'</div>'
						  +'</div>'
			var bling=document.createElement('div');
			bling.innerHTML=strings;
			if(m.result[n].IsBook=="0"){
				things.appendChild(bling);
			}else{
				book.appendChild(bling);
			}
		}
	}
}