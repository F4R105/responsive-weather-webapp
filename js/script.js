

// const latitude = 
// const longitude = 
// const timezone = 


// fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=temperature_2m_max`)
// .then(data=>data.json())
// .then(data=>console.log(data))


// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(async loc=>{
//         const latitude = await loc.coords.latitude
//         const longitude = await loc.coords.longitude

//         console.log('Latitude', latitude)
//         console.log('Longitude', longitude)

//         // await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max&timezone=Africa/Dar_es_Salaam`)
//         await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=Africa/Dar_es_Salaam`)
//         .then(data=>data.json())
//         .then(data=>{
//             console.log(data)
//             console.log(data.daily.temperature_2m_max)
//             console.log(data.daily.time)
//             console.log(data.daily_units.temperature_2m_max)
//         })

//     })
// }

if(navigator.geolocation){
    console.log(navigator.geolocation)
}