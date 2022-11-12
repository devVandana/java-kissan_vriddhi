function Logout(){
    alert("Logged out");
    localStorage.setItem("username",JSON.stringify(null));
    location.reload();
    window.location.href="CustomerLogin.html";
}

function checker(username) {
    var storedlist = JSON.parse(localStorage.getItem("customerlist"));
    if(username==null){
        return false;
    }
    
    if(storedlist.includes(username) == false){
        return false;
    }
    return true;

}