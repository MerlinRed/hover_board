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

const setColor = (event) => {
    const color = getRandomColor(COLORS)
    event.target.style.backgroundColor = color
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 14px ${color}, 4px 4px 9px ${color}`
    event.target.style.filter = "blur(1px)"
}
const removeColor = (event) => {
    event.target.style.backgroundColor = "#1d1d1d"
    event.target.style.boxShadow = "0 0 2px #000"
    event.target.style.filter = "none"
}

const getRandomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", setColor)
    square.addEventListener("mouseleave", removeColor)

    board?.append(square)
}
