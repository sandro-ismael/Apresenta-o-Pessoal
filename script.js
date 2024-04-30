function toggleMode(){
    const html = document.documentElement

    html.classList.toggle("light") /*o "Toggle" faz a função de tirar ou colocar o atributo*/

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')){
        img.setAttribute("src", "./assets/oculos.png")
        img.setAttribute("alt", "Foto do Alessandro na beira da piscina com metade do corpo amostra e os bracos escorados na beirada. Com oculos escuro em um dia ensolarado.")

    } else {
        img.setAttribute("src", "./assets/dia.png")
        img.setAttribute("alt", "Foto do Alessandro Ismael com uma camisa clara, sorrindo cabelo com corte lateral e um bigode.")
    } 
}