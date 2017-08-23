

	var content_two=document.querySelector(".content_two");
	var content_three=document.querySelector(".content_three");
	var lefts=document.querySelector(".left_click");
	var rights=document.querySelector(".right_click");
	var qh=document.querySelector(".qh");
	qh.addEventListener("click",function(e){
		if(e.target.className=="left_click"){
			rights.style.background="#33CCFF";
			lefts.style.background="#d6f5ff";
			content_three.style.display="none";
			content_two.style.display="block";
		}
		else{
			lefts.style.background="#33CCFF";
			rights.style.background="#D6F5FF ";
			content_two.style.display="none";
			content_three.style.display="block";
		}
	})


	var xhr=new XMLHttpRequest;
	xhr.open(
		"POST",
		" http://192.168.0.146:3900/productList"
	)
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){		
			var result=JSON.parse(xhr.responseText)
			setProduct(result)
		}
	}
	

	function setProduct(result){
		
		var content_two=document.querySelector(".content_two");
		var content_three=document.querySelector(".content_three");
		
		for(var i=0;i<result.result.length;i++){

			var	textContent='<div class="content_noe">'
					+'<img src="'+result.result[i].Image+'"/ width="180" height="140">'
					+'<div class="right_one">'
					+'<p>'+result.result[i].Des+'</p>'
					+'<span>'+result.result[i].Carriage+'</span>'
					+'<span>'+result.result[i].Destination+'</span>'
					+'<span>'+result.result[i].Status+'</span>'
					+'<span><i>￥</i>'+result.result[i].CurPrice+'</span>'
					+'<span>￥'+result.result[i].OldPrice+'</span>'
					+'<div class="round">'
						+'<a></a>'
						+'<a></a>'
						+'<a></a>'
					+'</div>'
				
			var node=document.createElement("div");  //创造一个元素DIV 
			node.setAttribute("class","textContent");  //设置一个属性textContent
			node.innerHTML=textContent;			//选取HTML 的内容 
//			textContent.innerHTML=node;
				
			if(result.result[i].IsBook==0){
				content_two.appendChild(node);
			}else{
				content_three.appendChild(node);
			}
//			var node=document.createTextNode("textContent");	
//			document.querySelector(".content_two").appendChild("node");	
//			content_two.innerHTML = textContent;
		}
	}


































