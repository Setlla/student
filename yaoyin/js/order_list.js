//		$(document).on("change",".search_ipt",function(){
//			$(".warelist").empty();
//			romance();
//		})
		
		
		//PC端回车函数
//		$(".search_ipt").keydown(function(event) {  
//	        if (event.keyCode == 13) { 
//	        	$(".warelist").empty();
//	             romance();	
//	        }  
//  	}) 
		
		//数据渲染父组件
		Vue.component('father',{
			props:["item","wls","index"],
			template:'<div class="wl" v-show="wls">'
					+'<div class="monopoly">'
		        	+'<img src="img/icon/icon_63.png"/>'
		        	+'<span>君宝话费充值专营店</span>'
		        	+'<span class="mon_arr"></span>'
		        	+'<span class="mon_success">交易成功</span>'
		       		+'</div>'
					+'<child :products="item.products" :product-num="JSON.parse(item.productNum)"></child>'
		        	+'<ul class="recharge_2">'
			    	+'<li>'
	        		+'<span>共</span><span>{{item.totalNum}}</span><span>件商品</span>'
	        		+'<span>合计：￥</span><span>{{item.totalCost}}</span>'
	        		+'<span>(含运费 ￥0.00)</span>'
	        		+'</li>'
	        		+'<li>'
		        	+'<button class="del_btn" @click="del_btn(item.id,index)"><span>删除订单</span></button>'
		        	+'<button class="judge_btn"><span>评价</span></button>'
	        		+'</li>'
	        		+'</ul>'
	        		+'</div>',
	        methods:{
	        	del_btn:function(orderId,index){
					var that=this;
					axios.post(_url+"/delOrder",{
						token:localStorage.getItem("token"),
						orderId:orderId
					})
					.then(function(response){
						console.log(response.data);
						if(response.data.result>0){
							Vue.set(warelist.wls, index, false);
//							location.reload();
						}
					})
				}
	        }

		})
		
		//数据渲染子组件
		Vue.component('child',{
			props:["products","productNum"],
			template:'<div>'
					+'<ul class="recharge_1" v-for="(product,index) in products">'
		        	+'<li>'
		        	+'<img :src="product.Image"/>'
		        	+'</li>'
		        	+'<li>'
		        	+'<span>{{product.Name}}</span>'
		        	+'</li>'
		        	+'<li>'
			        +'<p><span>￥</span><span class="new_price">{{product.CurPrice}}</span></p>'
			        +'<p><span>￥</span><span class="old_price">{{product.OldPrice}}</span></p>'
			        +'<p>X<span class="num">{{ productNum[index] }}</span></p>'
		        	+'</li>'
		      		+'</ul>'
		      		+'</div>'
		})
		//数据渲染
		var warelist=new Vue({
			el:".warelist",
			data:{
				productName:'',
				isSearch:false,
				isSer:false,
				items:[],
				wls:[]
			},
			methods:{
				search_ipt1:function(){
					this.isSearch=true;
					this.isSer=true;
				},
				search_ipt2:function(){
					this.isSearch=false;
					this.isSer=false;
				}
			},
			created:function(){
				var that=this;
				axios.post(_url+"/getOrder",{
					token:localStorage.getItem("token"),
					productName:this.productName
				})
				.then(function(response){
					console.log(response.data);
					that.items=response.data.result;
					for(var i=0;i<response.data.result.length;i++){
						that.wls.push(true);
					}
				})
				.catch(function(error){
					console.log(error);
				})
			}
		})

		
		//删除订单
//		$(document).on("click",".del_btn",function(){
//			var orderId=$(this).parents(".wl").data("id");
//			var that = this;
//			$.ajax({
//				type:"post",
//				url:_url+"/delOrder",
//				async:true,
//				contentType:"application/JSON",
//				data:JSON.stringify({
//					token:localStorage.getItem("token"),
//					orderId:orderId
//				}),
//				success:function(data,status){
//					if(data.result>0){
//						$(that).parents(".wl").remove();
//					}					
//				}			
//			})
//		})
		
		
		
		
		
		
		//点击订单列表任何一件商品跳转到订单详情
		$(document).on("click",".recharge_1",function(){
			var id=$(this).parents(".wl").data("id");
			location.href="order_details.html?id="+id;
		})
		
		
		var vm_header=new Vue({
			el:".header",
			methods:{
				//购物车跳转
				header_img:function(){
					location.href="shopping_trolley.html";
				},
				//箭头返回
				header_arr:function(){
					history.go(-1);
				}
			}
		})
	