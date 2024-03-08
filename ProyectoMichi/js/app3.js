const url = "https://catfact.ninja/facts"
const url_images = "https://api.thecatapi.com/v1/images/search"

const cardTemplate = document.getElementById("scTemplate").innerHTML

async function cargarMichis(){

    let llamada_michis = await fetch(url)
    let response_michis = await llamada_michis.json()

    response_michis.data.forEach( async function(michi, idx){

        let llamada_images_michis = await fetch(url_images)
        let response_images_michis = await llamada_images_michis.json()

        document.getElementById("content").innerHTML += 
                cardTemplate.replace("_FACT_TEXT_",michi.fact)
                .replace("_FACT_NUMBER_",(idx++))
                .replace("_URL_IMAGE_",response_images_michis[0].url)
    } )



    
}

cargarMichis()