Vue.component('father',{
	props:['items'],
	template:'<div><div v-for="item in items">'
			+'<p class="date">{{item.dateTime}}</p>'
			+'<child :products="item.browselogs"></child>'		
			+'</div></div>',
			
})
Vue.component('child',{
	props:['products'],
	template:'<div><div class="max" v-for="product in products">'
			+'<img class="picture" :src="product.product[0].Image"/>'
			+'<div class="product">'
			+'<p class="name">{{product.product[0].Name}}</p>'	
			+'<p class="price">'
			+'<span>￥<i>{{product.product[0].CurPrice}}</i></span>'
			+'<a>找相似</a>'
			+'<img @click="shopcar(product.product[0].id)" src="img/footprint_06.png" />'
			+'</p>'
			+'</div>'
			+'</div></div>'
})

new Vue({
	el:'.content',
	data:{
		items:[],
		products:[]
	},
	created:function(id){
		var that = this;
		axios.post(_url+"getBrowseLog",
			{id: id,
				token:localStorage.getItem("token")})
			  .then(function (response) {
			    console.log(response.data);
			    that.items = response.data.result;
			  })
			  .catch(function (error) {//捕获  catch
			    console.log(error);
			  });
	},
	methods:{
		shopcar: function(id) {
				axios.post(_url+"addShopCar",
				{id: id,
				token:localStorage.getItem("token")})
				  .then(function (response) {
				    console.log(response.data);
				    if(response.data.isSuccess==true){
						location.href="shopcar.html"
					}
				  })
				  .catch(function (error) {//捕获  catch
				    console.log(error);
				  });
		}
	}
})