
function loadImage(){
    const content = createImage()
    


    function createImage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')
    
        loadAllImages(content)
        
        // const img1 = document.getElementById('img1')
        // img1.className = 'show'
    
        return content
        }

        // function addImage(content) {
        //     const imageDiv = document.createElement('div')
        //     imageDiv.classList.add('img-div')
    
        //     const img = document.createElement('img')
        //     img.setAttribute('id', 'img1')
        //     img.src = "./images/img1.JPG"
    
        //     imageDiv.appendChild(img)
        //     content.appendChild(imageDiv)
        // }



    function loadAllImages(content){
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('img-div')

        for (let i = 1; i <=7 ; i ++){
            let currentImg = 'img' + i
            let img = document.createElement('img')
            img.classList.add('hide')
            img.setAttribute('id', currentImg)
            img.src = "./images/"+currentImg+".JPG"

            imageContainer.appendChild(img)
            content.appendChild(imageContainer)

        }

        // const imageDiv = document.createElement('div')
        // imageDiv.classList.add('img-div')


        // const img = document.createElement('img')
        // img.setAttribute('id', 'img1')
        // img.src = "./images/img1.JPG"

        // imageDiv.appendChild(img)
        // content.appendChild(imageDiv)

    }
    return content

}




//     function createAboutDiv(content) {
        
//         const aboutDiv = document.createElement('div')
//         aboutDiv.setAttribute('id', 'about')
//         aboutDiv.classList.add('text-box')
        
//         const aboutH3 = document.createElement('h3')
//         aboutH3.innerText = 'About Us'

//         const aboutText = document.createElement('p')
//         aboutText.classList.add('text')
//         aboutText.innerText = 'The place has been operating since 1924 and ' +
//         'was established by immigrants from Thessaloniki. 30 years ' + 
//         'ago by David and Juliette Refaeli started running the place and have kept on doing so ever since. Apart from dozens of types ' + 
//         'of spices like black mustard seeds and organic flax there are also herbs and even ' + 
//         'amber that is made from whales and is beneficial according to the belief in male potency.'

//         aboutDiv.appendChild(aboutH3)
//         aboutDiv.appendChild(aboutText)
//         content.appendChild(aboutDiv)
//     }     

    


// return content
// } 

export default loadImage;