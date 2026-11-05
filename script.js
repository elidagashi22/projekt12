function login(){

    const emri=document.getElementById("emri").value; 
    const passwordi=document.getElementById("pass").value;

    if(emri==="test" && passwordi==='test123'){
           window.location.href="home.html"
    }else{
             window.alert("Email ose passwordi nuk jane te sakta")
    }
}