

let password = localStorage.getItem("password")

if(!password){
    window.location.href="/auth.html"
}