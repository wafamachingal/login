login=()=>{
    let username=uname.value
    let password=pass.value
    if(!username || !password){
        alert("Invalid username or password !!")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`Username:${username},Password:${password}`)
        window.location="dashboard.html"
    }
}