
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

    }
    return content

}



export default loadImage;