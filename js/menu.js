const hambugger = document.querySelector('#hambugger')
const close = document.querySelector('#closeMenuBtn')
const toggler = document.querySelector('#toggler')
const menu = document.querySelector('#menu')

hambugger.addEventListener('click',toggleMenu)
close.addEventListener('click',toggleMenu)
toggler.addEventListener('click', toggleTheme)

function toggleMenu(){
    menu.classList.toggle('open')
}

function toggleTheme(){
    document.querySelector('body').classList.toggle('light')
    toggler.classList.toggle('on')
    
    const states = toggler.querySelectorAll('.state')
    for(state of states){
        if(state.classList.contains('hide')){
            state.classList.remove('hide')
        }else{
            state.classList.add('hide')
        }
    }
}