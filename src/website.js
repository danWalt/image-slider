import loadImage from './imageModule.js'
//import createContactPage from './contact.js'
//import createProductsPage from './products.js'

function buildWebsite(){
    const header = createHeader()
    document.body.appendChild(header)
    document.body.appendChild(loadImage())
    const img1 = document.getElementById('img1')
    img1.classList.remove('hide')
    addScrollButton()

    //id.substr(id.length - 1);


let currentImg = img1
let imgCounter = 1

    function addScrollButton(){
        
        const nextButton = document.createElement('button')
        nextButton.setAttribute('id', 'btn')
        nextButton.innerText = 'Next'

        const previousButton = document.createElement('button')
        previousButton.setAttribute('id', 'btn')
        previousButton.innerText = 'Previous'

        nextButton.addEventListener('click', () => {
            if(imgCounter < 7){ //TODO: get number of images in folder
                changeImage(imgCounter + 1);
                
            }
          })

        previousButton.addEventListener('click', () => {
            if(imgCounter > 1){
                changeImage(imgCounter - 1);
            }
        })
        
        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('id','buttonDiv')


        buttonDiv.appendChild(previousButton)
        addLi(buttonDiv)
        buttonDiv.appendChild(nextButton)
        document.body.appendChild(buttonDiv)
    }

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
                changeImage(i)
            })

            orderedList.appendChild(currentLi)
        }

        buttonDiv.appendChild(orderedList)
    }

    function changeImage(counter) {
        imgCounter = counter
        currentImg.classList.add('hide')
        currentImg = document.getElementById('img'+imgCounter)
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
    }

    // function createNavBar (header) {
    //     const nav = createNav()
    //     //const tabList = createTabList()

    //     //nav.appendChild(tabList)
    //     header.appendChild(nav)
    // }
    
    function createHeader(){
        const header = document.createElement('header')
        const imageSlider = document.createElement('h1')
        imageSlider.innerText = 'Image Slider'
        imageSlider.setAttribute('id', 'title')
        header.appendChild(imageSlider)

        return header
    }

    // function createNav(){
    //     const nav = document.createElement('nav')
    //     return nav
    // }

    // function createTabList(){
    //     const tabList = document.createElement('ul')
    //     const home = document.createElement('li')
    //     const products = document.createElement('li')
    //     const contact = document.createElement('li')

    //     setHeaderLiItems(home, products, contact)

    //     tabList.classList.add('tab-list')
    //     tabList.appendChild(home)
    //     tabList.appendChild(products)
    //     tabList.appendChild(contact)
        
    //     return tabList
    // }

    // function setHeaderLiItems(home, products, contact) {
    //     home.innerText = 'Home'
    //     products.innerText = 'Products'
    //     contact.innerText = 'Contact'

    //     home.setAttribute('id', 'home')
    //     home.classList.add('hidden')
    //     products.setAttribute('id', 'products')
    //     contact.setAttribute('id', 'contact')

    //     addListeners(home,products,contact) 

    // }   
    

    // function addListeners(home,products,contact) {
    //     home.addEventListener('click', () => {
    //         content.parentNode.removeChild(content)
    //         document.body.appendChild(createHomePage())
    //         setHidden([home,products,contact], home)
    //     })

    //     products.addEventListener('click', () => {
    //         content.parentNode.removeChild(content)
    //         document.body.appendChild(createProductsPage())
    //         setHidden([home,products,contact], products)

    //     })
        
    //     contact.addEventListener('click', () => {
    //         content.parentNode.removeChild(content)
    //         document.body.appendChild(createContactPage())
    //         setHidden([home,products,contact], contact)
    //     })
    // }
    

    // function setHidden(tabList, tab) {
        
    //     tabList.forEach(element => {
    //         if (element == tab) {
    //             tab.classList.add('hidden')
    //         }
    //         else {
    //             element.classList.remove('hidden');
    //         }
    //     });
    // }


}

export default buildWebsite