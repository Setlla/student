	//箭头返回上个历史页面
	var vm=new Vue({
		el:'.header',
		methods:{
			header_arr:function(){
				history.go(-1);
			}
		}
	})
	//数据渲染
	//父组件
	Vue.component('father',{
		props:["lists"],
		template:'<ul class="ware">'
				+'<li class="warelist" v-for="warelist in lists">'
				+'<div class="date">{{ warelist.dateTime }}</div>'
				+'<child :browselogs="warelist.browselogs"></child>'
				+'</li>'
				+'</ul>'		
	})

	//子组件
	Vue.component('child',{
		props:["browselogs"],
		template:'<div class="browselog"><div class="browselog" v-for="browselog in browselogs">'
				+'<div class="list_explain">'
    	    	+'<img :src="browselog.product[0].Image" />'
				+'</div>'
				+'<div class="list_depreciate">'
				+'<p>{{ browselog.product[0].Name }}</p>'
				+'<span class="listspan">￥<span class="price">{{ browselog.product[0].CurPrice }}</span>.00</span>'
				+'<span class="dep_1">看相似</span>'
				+'<span class="img_title" @click="img_titles(browselog.product[0].id)"></span>'
				+'</div>'
				+'</div></div>',
		//购物车跳转添加数据
		methods: {
			img_titles:function(id){
				axios.post(_url+"/addShopCar",{
					token:localStorage.getItem("token"),
					id:id
				})
				.then(function(response){
					console.log(response.data);
					if (response.data.isSuccess==true) {
						location.href="shopping_trolley.html";
					}
				})
				.catch(function(error){
					console.log(error);
				})	
			}
		}
	})
	

	var vm2=new Vue({
		el:".warediv",
		data:{
			lists:[]
		},
		created:function(){
			var that=this;
			axios.post(_url+'/getBrowseLog',{
				token:localStorage.getItem("token")
			})
			.then(function(response){
				console.log(response.data);
				that.lists=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		
	})
