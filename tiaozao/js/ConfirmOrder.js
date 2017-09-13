	
	users();
	function users(){
		var user =JSON.parse(localStorage.getItem("user"));
		$(".name").html(user.name);
		$(".phone").html(user.phone);
		$(".address").html(user.address);
	}

	prods();
	function prods(){
		var Products =JSON.parse(localStorage.getItem("Products"));
		var num=0;
		var sum=0;
		for(var i=0;i<Products.length;i++) {		
			var ctent='<div class="content">'
					+'<img src="'+Products[i].Image+'">'
					+'<div class="small_content">'
					+'<span class="Des">'+Products[i].Des+'</span>'
					+'<span>七天退换</span>'
					+'</div>'
					+'<div class="right_content">'
					+'<span > ￥<span class="newPrice">'+Products[i].newPrice+'</span></span>'
					+'<i>X <em class="number">'+Products[i].number+'</em></i>'
					+'</div></div>';
			sum = sum + parseInt(Products[i].newPrice);
			num= num + parseInt(Products[i].number);
			$(".big_box").append(ctent);
		}
		$(".money").html("￥"+sum);		
		$(".nummber").html(num);		
	}












