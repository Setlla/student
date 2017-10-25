	var vm=new Vue({
		el:"#body",
		data:{
			wlists:[],
			isArticle1:true,
			isArticle2:false,
		},
		created:function(){
			//VUE的页面渲染数据
			var that=this;
			axios.post(_url+"/productList")
			.then(function(response){
				console.log(response.data);
				that.wlists=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		},
		computed:{
			warelist:function(){
				return this.wlists.filter(function(value){
	   				return value.IsBook==0;
	   			})
			},
			warelists:function(){
				return this.wlists.filter(function(value){
	   				return value.IsBook==1;
	   			})
			}
		},
		methods:{
			//点击商品跳转到详情页面
			wls:function(id){				
	        	location.href="DetailsPage.html?id=" + id;
			},
			//物品书籍切换
			article:function(){
				this.isArticle1=true;
				this.isArticle2=false;
			},
			books:function(){
				this.isArticle1=false;
				this.isArticle2=true;
			}
		}
	})	
	
//	$.post("http://39.108.219.59:8080/productList",function(s,status){
//		//商品列表
//		for (var i=0;i<s.result.length;i++) {
//			var textCT=	    	
//	    		'<ul class="ware" data-id="'+s.result[i].id+'">'
//				+'<li class="ware_pic">'
//				+'<img src="'+s.result[i].Image+'" />'
//				+'</li>'
//				+'<li class="ware_explain">'
//				+'<p>'+s.result[i].Name+'</p>'
//		    	+'<p>'
//		    	+'<span>包邮</span>'
//		    	+'<span>上海</span>'
//		    	+'</p>'
//		    	+'<a href="">7成新</a>'
//		    	+'<p>'
//		        +'<span>￥</span><span>'+s.result[i].CurPrice+'</span>'
//		    	+'<span>价格：￥</span><span>'+s.result[i].OldPrice+'</span>'
//		    	+'</p>'
//				+'</li>'
//				+'</ul>';
//
//	        //动态插入，判断是否为书籍
//	        if (s.result[i].IsBook==0) {
//	        	$('.list').append(textCT);
//	        } else{
//	        	$('.list1').append(textCT);
//	        }
//		}
//		//点击物品按钮
//		$('.alllist div ul').click(function(){
//			var id=$(this).data('id');
//	        location.href="DetailsPage.html?id=" + id;
//	   })
//		
//	})

