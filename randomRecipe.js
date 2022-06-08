// getting navbar---------------
import navbars from "./components/navbar.js";
// document.getElementById('nav').innerHTML = navbars()

// importing data tools---------------

import { getData,showData } from "./scripts/showDatas.js";


navbars().then((responseData) =>{
    document.getElementById('nav').innerHTML = responseData

    let data = getData('https://www.themealdb.com/api/json/v1/1/random.php')

    data.then((receivedData) =>{
        let pushLocation = document.getElementById('showHere')

        showData(data,pushLocation,"randomRecipe")
    })
})