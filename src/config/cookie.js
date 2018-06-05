/* 设置cookie */
export const setCookie = (cname, cvalue, exdays='session')=>{
    let d = new Date();
    document.cookie = cname + "=" + cvalue + "; expires" + exdays+"; "+"path=/";
}
//获取cookie
export const getCookie = (cname)=>{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
/* 删除cookie */
export const clearCookie = (name)=>{  
    setCookie(name, "", -1);  
}  