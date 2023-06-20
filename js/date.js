const day = new Date().getDay()
const date = new Date().getDate()
const month = new Date().getMonth() //0-11
const year = new Date().getFullYear() 

const MONTHS = ['Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni', 'Julai', 'Agosti', 'Septemba', 'Oktoba', 'Novemba', 'Desemba']
const DAYS = ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi']

const tarehe = `${DAYS[day]}, ${date} ${MONTHS[month]} ${year}`

const Tarehe = document.querySelector('#date')
Tarehe.innerText = tarehe