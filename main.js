/* Declaration of global variables*/
const searchResultDiv = document.querySelector('#searchResult')
const generate = document.querySelector('#generate')   
const stop = document.querySelector('#stop') 
let flag = ''
let colorTimer = '' 

/*Function to generate random hexacolor id*/ 
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
    generateColors()
})

stop.addEventListener('click', function() {
    stopTimer()
})

const copyHexaId = (id) => {
    let input = document.createElement('input')
    document.body.appendChild(input)
    input.value = id
    input.select()
    document.execCommand('copy')
    input.remove()

}

const stopTimer = () => {
    clearInterval(homePageTimer)
    clearInterval(colorTimer)
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
         let copiedText = divColors.textContent.replace('Copy','')
         copyHexaId(copiedText)
            
        })
}

const genColorTimer = () => {
    colorTimer = setInterval (innerFunction,2000)
}

const innerFunction = () => {
    const num = document.querySelector('#number')
    if (num.value == flag) {
        searchResultDiv.textContent = ''
    for (let i=0; i<num.value;i++) {  
        divCreate(num.value)  
    }
}
}
const generateColors = () => {
    stopTimer()
    const number = document.querySelector('#number')
    flag = number.value
    if (flag <5) {
        searchResultDiv.textContent = ''
        errorMessage()
}
else {
   
    innerFunction()
    genColorTimer()
    
}
}




  homePage()

const homePageTimer = setInterval(homePage,2000)
