
const fruit_list = ["Apple","Banana","Orange","Strawberry","Grapes","Watermelon","Pineapple","Mango","Lemon","Peach","Cherry","Kiwi","Blueberry","Pear","Plum","Raspberry","Cranberry","Pomegranate","Apricot","Coconut","Avocado","Guava","Tangerine","Blackberry","Nectarine","Lime","Cantaloupe","Dragonfruit","Passionfruit","Fig"]
const lenFruit = fruit_list.length
const shuffleNo = Math.floor(Math.random()*lenFruit)
const shuffleFruit = fruit_list[shuffleNo].toUpperCase()
var space = ""
for(let a of shuffleFruit){
    space += "_"
    console.log(a)

}
lives = 10
console.log(space)
console.log(shuffleFruit)
document.getElementById("lett_space").innerText = space
for(let i=65;i<=90;i++){
    words = document.getElementById("letters")
    letter = String.fromCharCode(i)
    // console.log(letter)
    // console.log(words)
    words.innerHTML += `<li><button class="character" id="${letter}" onkeypress="myFunction('a')" onclick="myFunction('${letter}')">${letter}</button></li>`
}

function myFunction(userLetter){
    // console.log(a)
    checkSpace = document.getElementById("lett_space").innerText
    document.getElementById(userLetter).disabled= "true"
    forLetter = ""
    liveFlag = 0;
    for(let i in shuffleFruit){
        if(userLetter==shuffleFruit[i]){
            forLetter += userLetter;
            liveFlag = 1;
        }
        else{
            forLetter += checkSpace[i]
        }
    }
    if(liveFlag==0){
        lives--;
        document.getElementById(userLetter).style.backgroundColor ="rgb(236, 138, 138)"
    }
    else{
        document.getElementById(userLetter).style.backgroundColor ="rgb(92, 188, 92)"
    }
    rightFlag = 0
    for(let k of forLetter){
        if(k=="_"){
            rightFlag = 1
        }
    }
    if(rightFlag==0){
        alert("you win")
        let char =document.getElementsByClassName("character")
        for(let i=0;i<26;i++){
            char[i].disabled = "true"
        }
        userText = document.getElementById("lett_space").innerText
        for(let j in shuffleFruit){
        }
    }
    // space = checkSpace
    document.getElementById("lett_space").innerText = forLetter
    document.getElementById("lives").innerText = `Life's Left: ${lives}`
    if(lives==0){
        alert("game over")
        let char =document.getElementsByClassName("character")
        for(let i=0;i<26;i++){
            char[i].disabled = "true"
        }
        finalText = ""
        userText = document.getElementById("lett_space").innerText
        for(let j in shuffleFruit){
            if(userText[j]=="_"){
                finalText += `<span>${shuffleFruit[j]}</span>`
            }
            else{
                finalText += shuffleFruit[j]
            }
        }
        
        document.getElementById("lett_space").innerHTML = finalText
    }
    
}

document.addEventListener("keypress", function myFunction1(event){
    let userKey = event.key.toUpperCase()
    console.log(document.getElementById(userLetter).disabled)
    for(let i=65;i<=90;i++){
        if(userKey==String.fromCharCode(i)){
            if(document.getElementById(userLetter).disabled== true){
                myFunction(userKey)

            }
        }
    }
})


// myFunction("asdf")
// a = ""
// for(let i=0;i<5;i++){
//     a +="_ "
// }
// console.log(a)