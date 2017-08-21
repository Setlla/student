	var all=document.querySelectorAll(".classify a");
	var list=document.querySelector(".list");
	var list1=document.querySelector(".list1");
	//物品书籍切换
	document.querySelector(".classify").addEventListener("click",function(e){		
		for (var i=0;i<all.length;i++) {
			all[i].classList.remove("article");
		}
		e.target.classList.add("article");
		if(document.querySelector(".article").innerText=="书籍"){
			list.style.display="none";
			list1.style.display="block";
		}else{
			list.style.display="block";
			list1.style.display="none";
		}
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
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var s=JSON.parse(xmlhttp.responseText);
			console.log(xmlhttp.responseText);
			
			//商品列表
//			for (var i=0;i<ware_all.length;i++) {
//				ware_all[i].children[0].children[0].src=s.result[i].Image;
//				ware_all[i].children[1].children[0].innerText=s.result[i].Name;
//				ware_all[i].children[1].children[1].children[0].innerText=s.result[i].Carriage;
//				ware_all[i].children[1].children[1].children[1].innerText=s.result[i].Destination;
//				ware_all[i].children[1].children[2].innerText=s.result[i].Status;
//				ware_all[i].children[1].children[3].children[1].innerText=s.result[i].CurPrice;
//				ware_all[i].children[1].children[3].children[3].innerText=s.result[i].OldPrice;
//			}
		        for (var i=0;i<s.result.length;i++) {
				var textCT=
	       	    '<div class="ware_pic">'
	        	+'<img src="'+s.result[i].Image+'" />'
	        	+'</div>'
	        	+'<div class="ware_explain">'
	        		+'<p>'+s.result[i].Name+'</p>'
	        		+'<p>'
	        			+'<span>'+s.result[i].Carriage+'</span>'
	        			+'<span>'+s.result[i].Destination+'</span>'
	        		+'</p>'
	        		+'<a href="#">'+s.result[i].Status+'</a>'
	        		+'<p>'
	        			+'<span>￥</span><span>'+s.result[i].CurPrice+'</span>'
	    				+'<span>价格：￥</span><span>'+s.result[i].OldPrice+'</span>'
	    				+'<span>●●●</span>'
	        		+'</p>'
	        	+'</div>';
	        	
	        	var d=document.createElement("div");
		        d.setAttribute("class","ware");
		        d.innerHTML=textCT;
		        //动态插入，判断是否为书籍
		        if (s.result[i].IsBook==0) {
		        	list.appendChild(d);
		        } else{
		        	list1.appendChild(d);
		        }
			}

		}
	}
