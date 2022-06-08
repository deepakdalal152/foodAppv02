let getData = async(url) =>{
    let res = await fetch(url)
    let data =  await res.json()

    return data;
}

let showData = (data, showArea, pageName) =>{

    console.log(data, showArea, pageName)
}

export { getData, showData }