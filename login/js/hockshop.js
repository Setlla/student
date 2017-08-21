	//物品书籍切换
	var all=document.querySelectorAll(".classify a");
	document.querySelector(".classify").addEventListener("click",function(e){		
		for (var i=0;i<all.length;i++) {
			all[i].classList.remove("article");
		}
		e.target.classList.add("article");
	})
	
	
	//获取接口数据
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else{
		xmlhttp=new ActiveXObject();
	}
	
	xmlhttp.open("POST","http://192.168.0.146:3900/productList",true);
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
