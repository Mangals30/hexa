const randomHexaNumber = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    //let hexaIndex = Math.floor(Math.random()*hexaLen)
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        hexaId = hexaId + hexaChar[Math.floor(Math.random()*hexaLen)]

    }
    
    return hexaId
}

const copyHexaId = (value) => {
    let input = document.createElement('input')
    document.body.appendChild(input)
    input.value = value
    input.select()
    document.execCommand('copy')
    input.remove()

}

const searchResultDiv = document.querySelector('#searchResult')
const number = document.querySelector('#number')
const generate = document.querySelector('#generate')   
const stop = document.querySelector('#stop')  
     const homePage = () => {
     searchResultDiv.textContent = ''    
    for (i=0; i<5;i++) {
        const divCol = document.createElement('div')
        const copyButton = document.createElement('button')
        copyButton.style.margin = '10px'
        copyButton.textContent= 'Copy'
        //copyButton.setAttribute('id','copyid-'+i)
        divCol.setAttribute('class','divCol')
        const hexaColorId = randomHexaNumber()
        divCol.append(hexaColorId)
        divCol.append(copyButton)
        divCol.style.background = hexaColorId
        searchResultDiv.append(divCol)
        copyButton.addEventListener('click', function(event) {
            let copiedText = divCol.textContent.replace('Copy','')
            copyHexaId(copiedText)
            
        })
        
    }
}
  
  homePage()

const timer = setInterval(homePage,2000)
 
stop.addEventListener('click', function() {
    clearInterval(timer)
})

generate.addEventListener('click', function() {
    clearTimeout(timer)
    console.log('inside generator')
    searchResultDiv.textContent = ''
    const number = document.querySelector('#number')
    console.log('Number is',number.value)
     if ( number.value <5) {
        divNum1 = document.createElement('div')
        divNum1.textContent = '*Enter a number greater than or equal to 5'
        divNum1.style.color = 'red'
        searchResultDiv.append(divNum1)
       //searchResultDiv.replaceWith(divNum1)
       //searchResultDiv.replaceWith(divNum1)
       const searchResultDiv1 = document.querySelector('#searchResult')
       console.log('searchResultDiv in the middle',searchResultDiv1)
    }
    else {
        const divNum2 = document.createElement('div')
        divNum2.setAttribute('id','divNum2')
        for (i=0; i<number.value;i++) {
            const divNum3 = document.createElement('div')
            divNum3.setAttribute('class','divNum3')
            const hexaColorId = randomHexaNumber()
            divNum3.append(hexaColorId)
            console.log('divNum3,',divNum3)
            divNum3.style.background = hexaColorId
            divNum2.append(divNum3)
            console.log('divNum2,',divNum2)
        }
        
        searchResultDiv.append(divNum2)
        console.log('Final divNum2', divNum2)
        console.log(divNum2.textContent)
        console.log('searchResultDiv before appending',searchResultDiv)
        //searchResultDiv1.append(divNum2)
        console.log('searchResultDiv after appending',searchResultDiv)
        }
})