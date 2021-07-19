import { fetchWorkshops } from './services/workshops.js';

function renderWorkshops( workshops ) {
    const workshopsListEl = document.getElementById( 'workshops-list' );

    workshops.forEach(workshop => {
        workshopsListEl.innerHTML += `
            <div class="col-12 col-md-4 d-flex mb-3">
                <div class="card text-left p-3">
                    <img class="card-img-top" src="${workshop.imageUrl}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${workshop.name}</h4>
                        <p class="card-text">
                            ${workshop.startDate} - ${workshop.endDate}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

function init() {
    fetchWorkshops()
        .then( workshops => {
            renderWorkshops( workshops );
        })
        .catch( error => {
            alert( error.message );
        })
}

init();