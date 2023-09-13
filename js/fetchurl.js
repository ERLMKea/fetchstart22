console.log("jeg er i fetch")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

function getKeysAndValuesFromObj(obj) {
    const keys = Object.keys(obj)
    return keys.map(key => `${key} : ${obj[key]}`)
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value;
    console.log(url)
    let jsonOutput = await fetchAnyUrl(url)
    if (Array.isArray(jsonOutput)) {
        jsonOutput = jsonOutput[0]
    }
    jsonOutput = getKeysAndValuesFromObj(jsonOutput)
    console.log(jsonOutput)
    textArea.textContent = jsonOutput
}

const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrl)
