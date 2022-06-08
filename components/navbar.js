let navbars = async() =>{

    return `
    
    <div id="navbar">
        <div id="home"><a href="./home.html">Home</a></div>
        <div id="randomRecipe"><a href="./randomRecipe.html">Random Recipe</a></div>
        <div id="recipeOfTheDay"><a href="">Recipe Of The Day</a></div>
        <div id="searchRecipe">
            <input type="text" name="Search" id="search" placeholder="Search Recipe name...">
            <button id="search">Search</button>
        </div>
    </div>`
}

export default navbars