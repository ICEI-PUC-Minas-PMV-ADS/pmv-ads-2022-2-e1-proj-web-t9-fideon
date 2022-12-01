//Popup login menu 
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-link','popup-wrapper','popup-close']
    const shouldClosePopup = classNames.some(className =>
         className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup.style.display='none'        
    }
})