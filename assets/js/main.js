import data from "./fligthJSONList.json" assert { type: 'json' };;
const transfer = document.querySelector('.aktarma')

const itineraryListTemp = data.response.itineraryList[0].flightOptionList;
const section = document.createElement("section")
section.classList.add("main")
for(let i in itineraryListTemp){
    const card = document.createElement("div");
    card.classList.add("card");
    //card body
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    cardBody.classList.add("d-flex")
    cardBody.classList.add("justify-content-between")
    //destination
    const destination = document.createElement("div");
    destination.classList.add("destination");
    destination.classList.add("m-2");
    destination.classList.add("text-center")
    destination.innerText = itineraryListTemp[i].departureAirport.name + " to " + itineraryListTemp[i].arrivalAirport.name;
    const fligthNo = document.createElement("div")
    fligthNo.innerText = itineraryListTemp[i].flightNo
    destination.appendChild(fligthNo)
    //hours
    const hours = document.createElement("div")
    hours.classList.add("m-3")
    hours.classList.add("d-flex")
    hours.classList.add("align-items-center")
    hours.innerText = itineraryListTemp[i].departureTime + " - " + itineraryListTemp[i].arrivalTime
    const duration = document.createElement("span")
    const flightDuration = Math.trunc(itineraryListTemp[i].flightList[0].durationInMinutes / 60) + " sa " + itineraryListTemp[i].flightList[0].durationInMinutes % 60 + " dk "
    duration.innerText = flightDuration
    hours.appendChild(duration)
    //codes
    const airportCodes = document.createElement("div")
    //const duration = document.createElement("span")
    //duration.innerText = itineraryListTemp.flightOptionList[i].durationInMinutes
    airportCodes.classList.add("d-flex")
    airportCodes.classList.add("m-3")
    airportCodes.innerText = itineraryListTemp[i].departureAirport.code + " - " + itineraryListTemp[i].arrivalAirport.code
    //price
    const price = document.createElement("div")
    price.classList.add("d-flex")
    price.classList.add("m-3")
    price.innerText = itineraryListTemp[i].fareOptionList[0].totalPriceInRequestedCurrency + " " + itineraryListTemp[i].fareOptionList[0].requestedCurrencyCode
    //button
    const button = document.createElement("button")
    button.classList.add("m-2")
    button.innerText = "Select"
    price.appendChild(button)
    

    cardBody.appendChild(destination)
    cardBody.appendChild(hours)
    cardBody.appendChild(airportCodes)
    cardBody.appendChild(price)
    card.appendChild(cardBody);
    
    
    section.appendChild(card)
    
}
document.body.appendChild(section)
//if fligthlist > 1 filter
noTransferList = []
transfer.addEventListener("click", function(){
    
    for(let i in itineraryListTemp){
        noTransferList = itineraryListTemp[i].flightList.filter(filterTransfer)
    }
    
})
console.log(noTransferList)
function filterTransfer(fligthList) {
    return fligthList > 1
}
console.log(data)
