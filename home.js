import navbars from "./components/navbar.js";
navbars().then((data)=>{
    document.getElementById('nav').innerHTML = data
    // console.log(data)
})
