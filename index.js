const NUMBER_OF_SQUARES = 500
const COLORS = [
    "#ed8787",
    "#9c3030",
    "#6d309c",
    "#20ba53",
    "#ede60e",
    "#fff700",
    "#b3257a",
    "#f20707",
    "#493dd1",
    "#c9a41c",
    "#d373ff",
]
const board = document.getElementById("board")

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseleave", () => removeColor(square))

    board?.append(square)
}

const setColor = (element) => {
    const color = getRandomColor(COLORS)
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 14px ${color}, 4px 4px 9px ${color}`
    element.style.filter = "blur(1px)"
}
const removeColor = (element) => {
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
    element.style.filter = "none"
}

const getRandomColor = (colorsArray) => {
    const index = Math.floor(Math.random() * colorsArray.length)
    return colorsArray[index]
}
