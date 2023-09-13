console.log("jeg er i kommunedropdown")

const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

async function fetchKommuner(urlKommune) {
    let kommuneArr = await fetchAnyUrl(urlKommune)
    console.log(jsonOutput)
    kommuneArr.forE
}

function actionFetch() {
    const kommuner = fetchKommuner(urlKommune);
    console.log(kommuner)
}

pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)

