const weather_icon = document.querySelector('#weather_icon img')
const time_of_the_day = document.querySelector('#time_of_the_day')

const hour = new Date().getHours()

// KWANZIA SAA TATU USIKU MPAKA SAA KUMI USIKU
if((hour > 20 && hour < 24) || (hour >= 0 && hour < 5)){
    time_of_the_day.innerText = 'Usiku mwema'
    weather_icon.src = 'ico/moon.png'
}

// KWANZIA SAA KUMI NA MOJA ASUBUHI MPAKA SAA SITA MCHANA
if(hour >= 5 && hour < 12){
    time_of_the_day.innerText = 'Asubuhi njema'
    weather_icon.src = 'ico/cloudy.png'
    if(hour >= 5 && hour <= 10) weather_icon.src = 'ico/clouds.png'
}

//KWANZIA SAA SITA MCHANA MPAKA SAA KUMI NA MOJA JIONI
if(hour >= 12 && hour < 17){
    time_of_the_day.innerText = 'Mchana mwema'

    weather_icon.src = 'ico/sun.png'
    if(hour >= 15 && hour <= 16) weather_icon.src = 'ico/cloudy (1).png'
}

//KWANZIA SAA SITA MCHANA MPAKA SAA KUMI NA MOJA JIONI
if(hour >= 17 && hour <= 20){
    time_of_the_day.innerText = 'Jioni njema'
    weather_icon.src = 'ico/clouds.png'
}