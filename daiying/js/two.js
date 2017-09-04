//			var two=new XMLHttpRequest();
			var two;
			var a;
			var shop = document.querySelector(".p");
			var shop1 = document.querySelector(".p1");
			var img = document.querySelector(".join");
			var shop2 = document.querySelector(".p2");
			var shop3 = document.querySelector(".p3");
			if(window.XMLHttpRequest){
				two=new XMLHttpRequest();
			}
			else{
				two=new ActiveXObject("Microsoft.XMLHTTP");
			}
			two.open('post','http://192.168.0.127:8000/shop','ture');
			two.send();
			two.onreadystatechange=function(){
			  if (two.readyState==4 && two.status==200){
				b = JSON.parse(two.responseText);
				shop.innerHTML = b.result[0].name;
				shop1.innerHTML = b.result[0].describe;
				shop2.innerHTML = b.result[0].projectsTitle;
				shop3.innerHTML = b.result[0].projectsDescribe;
				img.style.background = "url('"+b.result[0].img+"')";
			   }
			  }
			   