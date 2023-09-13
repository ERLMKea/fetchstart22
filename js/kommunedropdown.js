console.log("jeg er i kommunedropdown")

const urlKommune = "https://api.dataforsyningen.dk/kommuner";

pbFetchKommuner = document.getElementById("pbFetchKommuner")
const ddKommuner = document.getElementById("ddKommuner")
const divTag = document.getElementById("atags")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item.navn
    el.value = item  //item bliver til string
    el.kommune = item
    ddKommuner.appendChild(el);


}

function inputChanged(key) {
    const selindex = ddKommuner.selectedIndex;
    const selectedOption = ddKommuner.options[selindex];
    const kommune = selectedOption.value //kan ikke bruges er lavet om til en string
    console.log(kommune)
    const kom2 = selectedOption.kommune
    console.log(kom2)
    createATag(kom2)
}

function createATag(komObj) {
    console.log("her kommer obj")
    console.log(komObj);
    const aTag = document.createElement("a");
    console.log(komObj.href)
    aTag.setAttribute('href', komObj.href);
    aTag.innerText = komObj.navn;
    divTag.appendChild(aTag)
    const brTag = document.createElement('br');
    divTag.appendChild(brTag);
}

async function fetchKommuner(urlKommune) {
    let kommuneArr = await fetchAnyUrl(urlKommune)
    console.log(kommuneArr)
    ddKommuner.innerHTML = ""
    kommuneArr.forEach(fillDropdownObj)
}

function actionFetch() {
    const kommuner = fetchKommuner(urlKommune);
    console.log(kommuner)
}


pbFetchKommuner.addEventListener('click', actionFetch)
ddKommuner.addEventListener('change', inputChanged)


