var collect = new Vue({
	el:'.products',
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(_url+'getCollectionLog',{token:localStorage.getItem("token")})
		  .then(function (response) {
		    console.log(response);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });    	
	},
	methods:{
		    AddShopCar :function(id){
		    	var that = this;
				axios.post(_url+'addShopCar',{token:localStorage.getItem("token")})
				.then(function (response) {
				    console.log(response.data);
				    that.items = response.data.result;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });    	 
			location.href="ShopCar.html?id="+id;
		}
	}
})