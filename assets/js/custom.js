function submitHandler() {
    let name = document.getElementById("name").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let description = document.getElementById("description").value;
    let node = document.getElementById("node").checked ? "Node Js" : "";
    let image = document.getElementById("image").files[0];
    let react = document.getElementById("react").checked ? "React Js" : "";
    let next = document.getElementById("next").checked ? "Next Js" : "";
    let typescript = document.getElementById("typescript").checked ? "Typescript" : "";

    let data = {
        name: name,
        start: start,
        end: end,
        description: description,
        node: node,
        image: image,
        react: react,
        next: next,
        typescript: typescript,
        icons: ["playstore.png", "android.png", "java.png"]
    };

    createCard(data);
}

function createCard(project) {
    let cardContent = document.querySelector('.card-content');
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContentHTML = `
        <div class="head-card">
            <img src="./assets/image/${project.image.name}" alt="">
        </div>
        <div class="card-body">
        <a href="detail.html?name=${encodeURIComponent(project.name)}&description=${encodeURIComponent(project.description)}&image=${encodeURIComponent(project.image.name)}&start=${encodeURIComponent(project.start)}&end=${encodeURIComponent(project.end)}&node=${encodeURIComponent(project.node)}&react=${encodeURIComponent(project.react)}&next=${encodeURIComponent(project.next)}&typescript=${encodeURIComponent(project.typescript)}">
                <h4>${project.name}</h4>
            </a>
            <p>Durasi 1 bulan</p>
            <h5>${project.description}</h5>
            <div class="icon">
    `;

    project.icons.forEach(icon => {
        cardContentHTML += `<img src="./assets/icon/${icon}">`;
    });

    cardContentHTML += `
            </div>
            <div class="button">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    `;

    card.innerHTML = cardContentHTML;
    cardContent.appendChild(card);

    let detailLinks = document.querySelectorAll('.detail-link');

    detailLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let detailURL = 'detail.html'; 
            detailURL += '?name=' + encodeURIComponent(project.name) + '&description=' + encodeURIComponent(project.description);
            window.location.href = detailURL;
        });
    });
}