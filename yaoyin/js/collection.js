	//箭头返回上个历史页面
	var vm=new Vue({
		el:'header',
		methods:{
			head_p:function(){
				history.go(-1);
			}				
		}
	})
	//点击购物车图标跳转购物页面
	var vm1=new Vue({
		el:'.list_depreciate',
		methods:{
			img_title:function(){
				location.href="shopping_trolley.html";
			}
		}
	})
	//数据渲染
	var vm2=new Vue({
		el:".ware",
		data:{
			liList:[],			
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