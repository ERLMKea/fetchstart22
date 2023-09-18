console.log("jeg er i postregion")

const pbPostRegion = document.getElementById("pbPostRegion")

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


async function postObjectAsJsonxx(url, region) {
    const objectAsJsonString = JSON.stringify(region)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    } else {
        alert("Region saved")
    }

    return response
}

function actionPostRegion() {
    postRegion()
    console.log("hej nu har jeg postet")
}


pbPostRegion.addEventListener('click', actionPostRegion)

