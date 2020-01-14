const searchResultDiv = document.querySelector('#searchResult')
const generate = document.querySelector('#generate')   
const stop = document.querySelector('#stop') 
let flag = 0
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

const divCreate = (num=5) => {
    for (i=0; i<num;i++) {
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
    copyButton.addEventListener('mouseover',() => {
        let copiedText = divColors.textContent.replace('Copy','')
        
    })

    
    /*copyButton.addEventListener('mouseout',() => {
        colorTimer()
        homePageTimer = setInterval(homePage,2000)
    }) */ 
}
}

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
       divCreate()
}
const errorMessage = () => {
    searchResultDiv.textContent = ''
    const searchInput = document.querySelector('.searchInput')
    const divColors = document.createElement('div')
    let errorMessage = '*Enter a number greater than or equal to 5'
    divColors.textContent = errorMessage
    divColors.style.color = 'red'
    divColors.style.fontSize = '20px'
    searchInput.append(divColors)
}
generate.addEventListener('click', function() {
    //searchResultDiv.textContent=''
    setInterval(generateColors,2000)
})

/*const genColTimer = setInterval (function() {
    const number = document.querySelector('#number')
    searchResultDiv.textContent = ''
    //flag = number.value
    if (number.value<5) {
        errorMessage()
}
else {
     divCreate(number.value)
    //innerFunction()
    colorTimer = setInterval (generateColors,2000)
  // genColorTimer()
    
}
},2000)*/


const generateColors = () => {
    clearInterval(homePageTimer)
    searchResultDiv.textContent = ''
    const number = document.querySelector('#number')
    flag = number.value
    console.log('Type of flag is ',typeof(flag))
    if (flag<5) {
        searchResultDiv.textContent = ''
        errorMessage()
    }
    else {
        searchResultDiv.textContent = ''
        const num = document.querySelector('#number')
        if (num.value == flag) {
            divCreate(num)  
        
    }
        
        
    }


    //innerFunction()
   // const colorTimer = setInterval (generateColors1(number.value),2000)
  // genColorTimer()
    
}


const generateColors1 = (num) => {
   // const colorTimer = setInterval (generateColors(),2000)

     divCreate(num)
  // genColorTimer()
    
}




stop.addEventListener('click', () => {
    clearInterval(homePageTimer)
})

homePage()
const homePageTimer = setInterval(homePage,2000)
