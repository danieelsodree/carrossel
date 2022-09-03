let reviews = [
    {
        id: 0,
        nome: "daniel sodré",
        trampo: "web developer",
        imagem: "./assets/img.jpg",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis nihil debitis reprehenderit.Temporibus ut facere fugiat, ducimus sapiente laboriosam officiis ab ipsam tempore repellat beatae, nobis ipsa libero sequi esse architecto.Omnis animi numquam in."
    },
    {
        id: 1,
        nome: "nathalia sodré",
        trampo: "marketeira",
        imagem: "./assets/img1.jpg",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corrupti nisi quas cum aut facere excepturi illo? Facere, doloremque eius officiis at consectetur ducimus? Autem laboriosam quaerat facere magnam reiciendis itaque obcaecati possimus consequatur qui?"
    },
    {
        id: 2,
        nome: "yuri xavier",
        trampo: "back-end developer",
        imagem: "./assets/img2.jpg",
        texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab et modi porro quasi doloremque maxime molestias repellendus eos aut. Id eius, possimus optio incidunt odio atque illum suscipit velit, amet maiores neque! Sed, fugiat?"
    },
    {
        id: 3,
        nome: "gabriel sodré",
        trampo: "sargento do exército",
        imagem: "./assets/img3.jpg",
        texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fugiat culpa minima reprehenderit natus? Assumenda magni ullam reiciendis quam, distinctio quia, vel perferendis nam consectetur consequatur esse incidunt obcaecati iste, unde fugiat. Fugit, unde blanditiis!"
    }
]

let img = document.querySelector(".img");
let autor = document.querySelector(".name");
let job = document.querySelector(".job");
let text = document.querySelector(".text");

let btn = document.querySelectorAll("#btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.imagem;
    autor.textContent = item.nome;
    job.textContent = item.trampo;
    text.textContent = item.texto;
}

btn[0].addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

btn[1].addEventListener("click", function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson();
})

btn[2].addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

