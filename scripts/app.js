var papercutDesc = document.getElementById("papercut-description")
var swinburneDesc = document.getElementById("swinburne-description")

var papercutButton = document.getElementById("papercut-button")
var swinburneButton = document.getElementById("swinburne-button")

swinburneButton.onclick = () => {
  swinburneButton.classList.add("active")
  swinburneDesc.classList.replace("hide", "fadeIn")

  papercutDesc.classList.add("hide")
  papercutButton.classList.remove("active")
}

papercutButton.onclick = () => {
  papercutButton.classList.add("active")
  papercutDesc.classList.replace("hide", "fadeIn")
  
  swinburneDesc.classList.add("hide")
  swinburneButton.classList.remove("active")
}