const charactersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolsArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

let getAddSymbolsEl = document.getElementById("check-add-symbols")
let getAddNumbersEl = document.getElementById("check-add-numbers")
let firstGeneratedPasswordEl = document.querySelector("#first-password-container .generated-password")
let secondGeneratedPasswordEl = document.querySelector("#second-password-container .generated-password")
let firstPasswordIconEl = document.querySelector("#first-password-container .icon")
let secondPasswordIconEl = document.querySelector("#second-password-container .icon")

function handleGeneratePassword() {
    const passwordLength = getPasswordLength()
    const dictionary = getPasswordDictionary()
    firstGeneratedPasswordEl.textContent = generateRandomPassword(passwordLength, dictionary)
    secondGeneratedPasswordEl.textContent = generateRandomPassword(passwordLength, dictionary)
    resetIconSettings(firstPasswordIconEl)
    resetIconSettings(secondPasswordIconEl)
}

function getPasswordLength() {
    let length = document.getElementById("get-password-length").value
    if (length === "") {
        return 0
    } else {
        return +length
    }
}

function getPasswordDictionary() {
    let dictionary = charactersArray
    if (getAddSymbolsEl.checked) {
        dictionary = dictionary.concat(symbolsArray)
    }
    if (getAddNumbersEl.checked) {
        dictionary = dictionary.concat(numbersArray)
    }
    return dictionary
}

function generateRandomPassword(passwordLength, dictionary) {
    let result = ""
    for (let i = 0; i < passwordLength; i++) {
        result += dictionary[Math.floor(Math.random() * dictionary.length)]
    }
    return result
}

function resetIconSettings(param) {
    param.className = "icon fa fa-copy"
    param.style.color = "#D5D4D8"
}

function setIconSettings(param) {
    param.className = "icon fa far fa-check-circle"
    param.style.color = "#55F991"
}

firstGeneratedPasswordEl.onclick = function () {
    document.execCommand("copy")
    setIconSettings(firstPasswordIconEl)
    resetIconSettings(secondPasswordIconEl)
}


firstGeneratedPasswordEl.addEventListener("copy", function (event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", firstGeneratedPasswordEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
})


secondGeneratedPasswordEl.onclick = function () {
    document.execCommand("copy")
    setIconSettings(secondPasswordIconEl)
    resetIconSettings(firstPasswordIconEl)
}

secondGeneratedPasswordEl.addEventListener("copy", function (event) {
    event.preventDefault()
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", secondGeneratedPasswordEl.textContent)
        console.log(event.clipboardData.getData("text"))
    }
})