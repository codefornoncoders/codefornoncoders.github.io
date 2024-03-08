const url = "https://catfact.ninja/facts"
const url_images = "https://api.thecatapi.com/v1/images/search"

//fetch solicitar 10 facts (datos curiosos de gatos)
const cardTemplate = document.getElementById("scTemplate").innerHTML

fetch(url).then((casi_response) => 
    casi_response.json()
).then((response) => {
    document.getElementById("content").innerHTML = ""
    let i=0;
    response.data.forEach( fact => {
        console.log(i+10)
        fetch(url_images).then( rs => rs.json()).then( (img) => {
            console.log(i+1000)
            i++;
            document.getElementById("content").innerHTML += 
                cardTemplate.replace("_FACT_TEXT_",fact.fact)
                .replace("_FACT_NUMBER_",i)
                .replace("_URL_IMAGE_",img[0].url)
        })
    })
})

 