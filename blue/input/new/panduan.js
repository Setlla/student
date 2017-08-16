function phonename(){
var iphoneRegex=/^1[34578]\d{9}$/.test(mob);
var emailRegex=
/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emal);
    if(!iphoneRegex && mob.style.display == "block"){
    	alert("请输入正确手机号.")
    }
    if(!emailRegex && emal.style.display == "block"){
    	alert("请输入正确的邮箱")
    }
}