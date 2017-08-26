	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else{
		xmlhttp=new ActiveXObject();
	}
	
	xmlhttp.open("POST","http://192.168.0.158:3900/shop","true");
	xmlhttp.send();
	
	var druger=document.querySelectorAll(".druger li");
	var price=document.querySelectorAll("#price_one div");
	var liquor=document.querySelectorAll(".liquor div");
	var skin=document.querySelectorAll("#price_two div");
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log(xmlhttp.responseText);
			var s=JSON.parse(xmlhttp.responseText);
			//8个按钮的数据
			for (var i=0;i<druger.length;i++) {
				druger[i].querySelector("span").style.background="url('"+s.roundList[i].imageUrl+"') no-repeat 50% 50%";
				druger[i].querySelector("span").style.backgroundSize="50%";
				druger[i].querySelector("span").style.backgroundColor=s.roundList[i].roundBg;
				druger[i].querySelector("a").innerHTML=s.roundList[i].des;
			}
			//全网最低价
			document.querySelector("#price_one").children[0].innerText=s.cheapest.title;
			//力魂数据
			for (var i1=0;i1<price.length;i1++) {
				console.log(price.length+"力魂");
			price[i1].querySelector("a").querySelector(".title1").innerText=s.cheapest.products[i1].productName;
			price[i1].querySelector("a").querySelector(".title2").children[1].innerText=s.cheapest.products[i1].price;
			price[i1].children[1].style.background="url('"+s.cheapest.products[i1].productImage+"') no-repeat 50% 50%";
			price[i1].children[1].style.backgroundSize="80%";
			}
			
			//答谢恩师标题
			document.querySelector(".liquor").children[0].innerText=s.thanks.title;
			//答谢恩师数据
			for (var i2=0;i2<liquor.length;i2++) {
				console.log(liquor.length="恩师");
				liquor[i2].querySelector("a").querySelector(".title1").innerText=s.thanks.products[i2].productName;
				liquor[i2].querySelector("a").querySelector(".title2").children[1].innerText=s.thanks.products[i2].price;
				liquor[i2].children[1].style.background="url('"+s.thanks.products[i2].productImage+"') no-repeat 50% 50%";
				liquor[i2].children[1].style.backgroundSize="80%";
			}
			
			//美美哒标题
			document.querySelector("#price_two").children[0].innerText=s.beautiful.title;
			//美美哒
			for (var i3=0;i3<skin.length;i3++) {
				console.log(skin.length+"美美哒");
				skin[i3].querySelector("a").children[1].children[0].innerText=s.beautiful.products[i3].productName;
				skin[i3].querySelector("a").children[1].children[1].innerText=s.beautiful.products[i3].price;
				skin[i3].children[1].style.background="url('"+s.beautiful.products[i3].productImage+"') no-repeat 50% 50%";
				skin[i3].children[1].style.backgroundSize="80%";
			}
		}
	}
