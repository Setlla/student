$.post('http://39.108.219.59/productList',function(data,status){
	for(var i=0;i<data.result.length;i++ ){
    	var resContent = '<div class="bike" data-id='+ data.result[i].id +'>'
    					+ '<img class="img" src="'+ data.result[i].Image +'" />'
    					+ '<p class="title">'+data.result[i].Des +'</p>'
    					+ '<div class="way">'
    					+ '<span>'+ data.result[i].Carriage +'</span>'    					
    					+ '<span>'+ data.result[i].Destination +'</span>'
    					+ '</div>'
    					+ '<button>'+ data.result[i].Status +'</button>'
    					+ '<div class="much"> '
    					+ '<p class="nub">'
    					+ '<span>￥</span>'+ data.result[i].CurPrice +'</p>'
    					+ '<p class="nub2">￥' + data.result[i].OldPrice +'</p>'
//  					+ '<i class="dot">● ● ●</i>'
    					+ '</div>'
    					+ '</div>'
    	
    		            	
    var thing=$("div .thing");
	var books=$("div .books");
    	if(data.result[i].IsBook == 0){
    		$('.thing').append(resContent);
    	}else{
    		$('.books').append(resContent);
    	}
    	$(".bike").click(function(){
    		var id=$(this).data("id")
    		location.href="detail.html?id="+id;           
    	})
    		
    }
})

