const getTemperature = () => {

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async loc=>{

            const latitude = loc.coords.latitude
            const longitude = loc.coords.longitude
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
            const data = await fetch(url)
            const weather = await data.json()
        
            const hour = new Date().getHours()
            const temperature = Math.floor(weather.hourly.temperature_2m[hour])
        
            document.querySelector('#temperature').innerHTML = `${temperature} <sup>o</sup>`

        }, error=>console.log(error))
    }

}

getTemperature()
