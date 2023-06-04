const body = document.body;
const btn = document.querySelector("button");
let id;
btn.addEventListener("click", (e) => {
    if (btn.textContent == "STop Changing") {
        let col = body.style.backgroundColor;
        e.target.textContent = "Start Again!\n";
        e.target.textContent += col;
        clearInterval(id);

    } else {
            id = setInterval(() => {
            let red = Math.floor(Math.random() * 126);
            let green = Math.floor(Math.random() * 126);
            let blue = Math.floor(Math.random() * 126);
            body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            e.target.textContent = "STop Changing";
        }, 100)
    }
});