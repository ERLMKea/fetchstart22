console.log("jeg er i postregion")

const pbPostRegion = document.getElementById("pbPostRegion")
const pbPutRegion = document.getElementById("pbPutRegion")

const inpKode = document.getElementById("inpKode")
const inpName = document.getElementById("inpName")
const inpHref = document.getElementById("inpHref")

const regionUrl = "http://localhost:8080/region"
const regionUrlx = "http://localhost:8080/region/1084"

function getRegion() {
    const region = {}
    region.kode = inpKode.value
    region.navn = inpName.value
    region.href = inpHref.value
    console.log(region)
    return region
}

async function postRegion() {
    const region = getRegion()
    const res = await postObjectAsJson(regionUrl, region, "POST")
    if (res.ok) {
        alert("Region saved")
    }
}

async function putRegion() {
    const region = getRegion()
    const putUrl = regionUrl + "/" + region.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, region, "PUT")
    if (res.ok) {
        alert("Region updated")
    }
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

function actionPostRegion() {
    postRegion()
}

function actionPutRegion() {
    console.log("kalder putregion")
    putRegion()
}

pbPostRegion.addEventListener('click', actionPostRegion)
pbPutRegion.addEventListener('click', actionPutRegion)
