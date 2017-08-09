				var three=new XMLHttpRequest();
				var xMlHttp;
				var c;
				
				var nn=document.querySelectorAll(".cover");
				var ll=document.querySelectorAll(".picture li img");
				if(window.XMLHttpRequest){
					xMlHttp=new XMLHttpRequest();
				}
				else{
					xMlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				three.open('post','http://192.168.0.127:8000/project');
				three.send();
				three.onreadystatechange=function(){
					if(three.readyState==4 && three.status==200){
						c=JSON.parse(three.responseText);
						for(var n=0;n<nn.length;n++){
							nn[n].querySelector(".cover p").innerHTML= c.result[n].title;
							nn[n].querySelector(".cover span").innerHTML= c.result[n].subtitle;
						}
						for(var l=0;l<ll.length;l++){
							ll[l].baseURI=c.result[l].bgimg;
						}
						
					}
				}
