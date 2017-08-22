var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject();
	}
	
	xhr.open('POST','http://192.168.0.146:3900/productList',true);
	xhr.send();
	
	xhr.onreadystatechange=function(){
		 	if(xhr.readyState==4 && xhr.status==200){
		 		var result = JSON.parse(xhr.responseText);
	            console.log(result)
	            
	            for(var i=0;i<result.result.length;i++ ){
	            	var resContent = '<div class="bike">'
	            					+ '<img class="img" src="'+ result.result[i].Image +'" />'
	            					+ '<p class="title">'+result.result[i].Des +'</p>'
	            					+ '<span>'+ result.result[i].Carriage +'</span>'
	            					+ '<span class="city">'+ result.result[i].Destination +'</span>'
	            					+ '<button>'+ result.result[i].Status +'</button>'
	            					+ '<div class="much"> '
	            					+ '<p class="nub">'
	            					+ '<span>￥</span>'+ result.result[i].CurPrice +'</p>'
	            					+ '<p class="nub2">￥' + result.result[i].OldPrice +'</p>'
	            					+ '</div>'
	            					+ '</div>'
	            	
	            	
	            	var node = document.createElement('div');
//	            	var dx=document.querySelector(".thing");
//	            	var shu=document.querySelector(".books")
	            	node.innerHTML = resContent;
	            	if(result.result[i].IsBook == "0"){
	            		thing.appendChild(node);
	            	}else{
	            		books.appendChild(node);
	            	}
	            	
	            }
//	         <div class="bike">
//				<img class="img" src="img/dp_07.png" />
//				<p class="title">捷安特24速变速一体轮可折叠自行车</p>
//				<span>包邮</span><span class="city">上海</span>
//				<button>挂起</button>
//				<div class="much"> 
//					<p class="nub"><span>￥</span>350</p>
//				    <p class="nub2">￥1358</p>
//				    <p class="dot">● ● ●</p>
//				</div>			
//			</div>
		 	}
		 }