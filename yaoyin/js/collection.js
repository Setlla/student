	//箭头返回上个历史页面
	var vm=new Vue({
		el:'header',
		methods:{
			head_p:function(){
				history.go(-1);
			}				
		}
	})
	//数据渲染
	var vm2=new Vue({
		el:".ware",
		data:{
			liList:[],			
		},
		methods:{
			//点击购物车图标跳转购物页面
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
	
			},
		},
		created:function(){
			var that=this;
			axios.post(_url+'/getCollectionLog',{
				token:localStorage.getItem("token")
			})
			.then(function(response){
				console.log(response.data);
				that.liList=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		}		
	})