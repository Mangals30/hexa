const searchResultDiv = document.querySelector('#searchResult')
const generate = document.querySelector('#generate')   
const stop = document.querySelector('#stop') 
let flag = ''
let colorTimer = '' 
let buttonClicked = 0
let hover = ''

const randomHexaId = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        let hexaIdIndex = Math.floor(Math.random()*hexaLen)
        hexaId = hexaId + hexaChar[hexaIdIndex]

    }
    
    return hexaId
}

generate.addEventListener('click', function() {
    clearInterval(hover)
    clearInterval(homePageTimer) 
    clearInterval(colorTimer)
    buttonClicked = 0
   const number = document.querySelector('#number') 
   flag = number.value
   generateColors()
   colorTimer = setInterval(generateColors,2000)
    
})
stop.addEventListener('click', function() {
    buttonClicked = 1
    clearInterval(hover)
    clearInterval(homePageTimer)   
    clearInterval(colorTimer)
})
const copyHexaId = (id) => {
    let input = document.createElement('input')
    document.body.appendChild(input)
    input.value = id
   input.select()
    document.execCommand('copy')
    input.remove()

}

const homePage = () => {
   searchResultDiv.textContent = ''    
   for (let i=0; i<5;i++) {
       divCreate()
   }
}

const errorMessage = () => {
    searchResultDiv.textContent = ''
    const divColors = document.createElement('div')
    let errorMessage = '*Enter a number greater than or equal to 5'
    divColors.textContent = errorMessage
    divColors.style.color = 'red'
    divColors.style.marginLeft ='20rem'
    searchResultDiv.append(divColors)
    
}

const divCreate = () => {
    const divColors = document.createElement('div')
    divColors.setAttribute('class','divColors')
    const copyButton = document.createElement('button')
    copyButton.setAttribute('class','copy')
    copyButton.style.margin = '10px'
    copyButton.textContent= 'Copy'
    const hexaColorId = randomHexaId()
    divColors.append(hexaColorId)
    divColors.append(copyButton)
    divColors.style.background = hexaColorId
    searchResultDiv.append(divColors)
    copyButton.addEventListener('click', function(event)
       {
        clearInterval(hover)   
        clearInterval(homePageTimer)   
        clearInterval(colorTimer)
        let copiedText = divColors.textContent.replace('Copy','')
        copyHexaId(copiedText)
            
        })

    copyButton.addEventListener('mouseover', function(event)
       { 

            clearInterval(hover)   
            clearInterval(homePageTimer)
            clearInterval(colorTimer)
        

        })  
    
    copyButton.addEventListener('mouseleave', function(event)
        {   
            if (buttonClicked == 0) {
            if (flag.length==0) {
                hover = setInterval(homePage,2000)
               }
               else {
                hover = setInterval(generateColors,2000)    
               }
            }

           
           
         })      

        
}





const generateColors = () => {
    searchResultDiv.textContent = ''
    if ((flag<5) || !flag.match(/^[0-9]/)) {
        errorMessage()
}
else {
    
    for (let i=0; i<flag;i++) {  
        divCreate()  
    }   
}
}

homePage()

const homePageTimer = setInterval(homePage,2000)