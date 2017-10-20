var back=new Vue({
	el:'.head',
	methods:{
		back:function(){
			history.back()
		}
	}
})
var max=new Vue({
		el:".contents",
		data:{
			items:[],
			obj: {}
		},
		created: function() {//钩子函数
			var that = this;
			axios.post(_url+"getCollectionLog",
			{token:localStorage.getItem("token")})
			  .then(function (response) {
			    console.log(response.data);
			    that.items = response.data.result;
			  })
			  .catch(function (error) {//捕获  catch
			    console.log(error);
			  });
		},
		methods:{
			content:function(id){
				location.href = "details.html?id="+id;
			},
			car: function(id) {
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
