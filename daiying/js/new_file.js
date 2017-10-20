as = new Vue({
	el:'.input',
	data:{
		isCur:false,
		isAllorder:false,
		productName: ''
	},
	methods:{
		have:function(){			
				this.isCur = true;
				this.isAllorder = true;
		},
		none:function(){
			this.isCur = false;
			this.isAllorder = false;
			der.getData(this.productName);
		}
	}	
})

var productName = $(".Allorders").val();

Vue.component('child',{
	props:['products',"productNum"],
	template:'<div><div v-for="(product,index) in products">'
        +'<div class="card">'
		+'< img :src="product.Image" />'
        +'<div class="text">'
        +'<p>{{product.Des}}</p >'			           
        +'</div>'
        +'<div class="pricess">'
        +'<span>￥{{product.CurPrice}}</span>'
        +'<span class="noprice">￥{{product.OldPrice}}</span>'
        +'<span class="number">x{{productNum[index]}}</span>'
		+'</div>'
		+'</div>'
        +'</div></div>'	
})

Vue.component('father',{
	props:['items','shows'],
	template:'<div><div v-for="(item,index) in items" v-show="shows[index]">'
		+'<div class="products">'
		+'<div class="success">'
		+'< img src="img/order_17.png"/>'	
		+'<p>君宝话费充值专营店</p >'	
		+'<span></span>'	
		+'<a>交易成功</ a>'
		+'</div>'
		+'<div class="cards">'
		+'<child :products ="item.products" :product-num="JSON.parse(item.productNum)"></child>'
		+'</div>' 
		+'<ul>'	
		+'<li class="product">'	
		+'<p>共<i class="totalNum">{{item.totalNum}}</i>件商品 合计：￥'								
		+'<span class="totalCost">{{item.totalCost}}</span>(含运费￥0.00)'	
		+'</p >'
		+'</li>'	
		+'<li class="button">'
		+'<button class="assess">评价</button>'
		+'<button class="delete" @click="delOrder(item.id,index)">删除订单</button>'	
		+'</li>'
		+'</ul>'
		+'</div></div></div>',
	methods: {
		delOrder: function(orderId,index) {
			var that = this;
			axios.post(_url+'delOrder',{token:localStorage.getItem("token"),orderId: orderId})
			  .then(function (response) {
			    console.log(response.data.result);
//			    that.items = response.data.result;
				Vue.set(der.shows, index, false)
			  })
			  .catch(function (error) {
