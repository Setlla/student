	//物品书籍切换
	var isflag=false;
	var article=document.querySelector(".article");
	var books=document.querySelector(".books");
	document.querySelector(".classify").addEventListener("click",function(e){
		//点击事件为物品CLASS
		if (e.target.className=="article") {
			article.style.backgroundColor="#33ccff";
			article.style.color="#FFFFFF";
			books.style.backgroundColor="#bfe6f3";
			books.style.color="#33ccff";
			
		}
		//点击事件为书籍CLASS
		if(e.target.className=="books"){
			article.style.backgroundColor="#bfe6f3";
			article.style.color="#33ccff";
			books.style.backgroundColor="#33ccff";
			books.style.color="#FFFFFF";
		}
	})
	
	
	//获取接口数据
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else{
		xmlhttp=new ActiveXObject();
	}
	
	xmlhttp.open("POST","http://192.168.0.127:3900/productList",true);
	xmlhttp.send();
	
	
	//获取数据
	var ware_all=document.querySelectorAll(".ware");
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var s=JSON.parse(xmlhttp.responseText);
			
			//商品列表
			for (var i=0;i<ware_all.length;i++) {
				ware_all[i].children[0].children[0].src=s.result[i].Image;
				ware_all[i].children[1].children[0].innerText=s.result[i].Name;
				ware_all[i].children[1].children[1].children[0].innerText=s.result[i].Carriage;
				ware_all[i].children[1].children[1].children[1].innerText=s.result[i].Destination;
				ware_all[i].children[1].children[2].innerText=s.result[i].Status;
				ware_all[i].children[1].children[3].children[1].innerText=s.result[i].CurPrice;
				ware_all[i].children[1].children[3].children[3].innerText=s.result[i].OldPrice;
			}
		}
	}
