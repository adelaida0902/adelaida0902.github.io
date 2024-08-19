const userCardContainer = document.querySelector("#user-cards-container");

function renderPeople() {
    fetch("https://randomuser.me/api/?results=6")
        .then((result) => result.json())
        .then((data) => {
            const users = data.results;
            users.forEach(user => {
                const userTemplate = `
                <div class="user-card">
                    <div class="card-header">
                        <img src="${user.picture.large}" alt="Profile picture">
                        <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
                        <p>Location: ${user.location.city}, ${user.location.country}</p>
                    </div>
                    <div class="contact-info">
                        <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
                        <button><a href="tel:${user.phone}">Call</a></button>
                    </div>
                </div>`;
                
                userCardContainer.insertAdjacentHTML("beforeend", userTemplate);
            });
        })
        .catch((error) => console.log("Error fetching data:", error));
}

renderPeople();

