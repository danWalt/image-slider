import loadImage from './imageModule.js'


function buildWebsite(){
    const header = createHeader()
    document.body.appendChild(header)
    document.body.appendChild(loadImage())
    const img1 = document.getElementById('img1')
    img1.classList.remove('hide')
    addScrollButton()

    let currentImg = img1
    let imgCounter = 1

    // add previous and next buttons
    function addScrollButton(){
        
        //create next button
        const nextButton = document.createElement('button')
        nextButton.setAttribute('id', 'btn')
        nextButton.innerText = 'Next'

        // create previous button
        const previousButton = document.createElement('button')
        previousButton.setAttribute('id', 'btn')
        previousButton.innerText = 'Previous'

        // add functionality
        addButtonsEventListeners(nextButton, previousButton)
        
        // create button div
        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('id','buttonDiv')

        //add buttons to document body
        buttonDiv.appendChild(previousButton)
        addLi(buttonDiv)
        buttonDiv.appendChild(nextButton)
        document.body.appendChild(buttonDiv)
    }


    function addButtonsEventListeners(nextButton, previousButton) {
        nextButton.addEventListener('click', () => {
            let newValues = nextButtonLogic(imgCounter, currentImg)
            imgCounter = newValues[0]
            currentImg = newValues[1]
          })

        previousButton.addEventListener('click', () => {
            let newValues = previousButtonLogic(imgCounter, currentImg)
            imgCounter = newValues[0]
            currentImg = newValues[1]      
          })
    }

    //create image list

    function addLi (buttonDiv) {

        const orderedList = document.createElement('ul')
        orderedList.setAttribute('id', 'orderedList')

        for (let i = 1; i<=7; i++){
            let currentLi = document.createElement('li')
            currentLi.setAttribute('id', i)
            if (i == 1) {
                currentLi.classList.add('selectedItem')
            }

            currentLi.addEventListener('click', () => {
                currentLi.classList.add('selectedItem')
                imgCounter = i
                currentImg = changeImage(currentImg,imgCounter)
            })

            orderedList.appendChild(currentLi)
        }

        buttonDiv.appendChild(orderedList)
    }

}


function createHeader(){
    const header = document.createElement('header')
    const imageSlider = document.createElement('h1')
    imageSlider.innerText = 'Image Slider'
    imageSlider.setAttribute('id', 'title')
    header.appendChild(imageSlider)

    return header
}


function changeImage(currentImg, counter) {
    currentImg.classList.add('hide')
    currentImg = document.getElementById('img'+counter)
    currentImg.classList.remove('hide')
    for (let i = 1; i<=7; i++){
        let li = document.getElementById(i) 
        if (i == counter){
            li.classList.add('selectedItem')
        }
        else {
            li.classList.remove('selectedItem')
        }
    }    
    return currentImg
}



function nextButtonLogic(imgCounter, currentImg) {
    if(imgCounter < 7){ //TODO: get number of images in folder
        imgCounter++
        currentImg = changeImage(currentImg, imgCounter)
    }
    return [imgCounter, currentImg]
}


function previousButtonLogic(imgCounter, currentImg) {
    if(imgCounter > 1){
        imgCounter--
        currentImg = changeImage(currentImg, imgCounter);
    }
    return [imgCounter, currentImg]

}

export default buildWebsite