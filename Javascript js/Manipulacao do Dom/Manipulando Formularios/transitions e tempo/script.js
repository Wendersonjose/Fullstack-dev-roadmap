const btn = document.getElementById('button');
const container = document.getElementById('container');

btn.addEventListener("click", function() {
    container.classList.toggle("red")
    container.classList.toggle("blue")
    container.classList.toggle("animacao-mover")
})