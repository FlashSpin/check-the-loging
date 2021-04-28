let userName = prompt("hello, who is this?");

if (userName === Admin){
    let password = prompt("Whats the password?");

    if (password === "theMaster"){
        alert("you're in buddy!");
    }else{
        alert("password incorect!");
    }
}else if (userName === "" || null){
    alert("cancled")
}else{
    alert("Try again")
}