document.querySelector('#getButton').addEventListener('click', apiReq)

async function apiReq(){
    const alienName = document.querySelector('input').value
    try {
        const response = await fetch(`https://startrekwar-api.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data);
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeWorld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.examples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch (error){
        console.log(error);
    }

}