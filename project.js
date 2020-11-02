// The HTML for the card/buttons with data passed into it from the render function

const createProjectCards = (id, name, logoImage) => {

const projectCard = `
    
    <div class="card m-3 data-task-id=${id}">
       <div class="card-body d-inline-flex justify-content-center p-1">
           <div class="card-logo">
            <a>
                <button type="button" class="btn btn-outline-light p-0" data-toggle="modal" data-target="#${name}">
                <img class="logo img-fluid" id="${name}" src="${logoImage}" />
                </button>   
            </a>
           </div>
       </div>
   </div>
   
`;
return projectCard;
};

// The render function loops through the projectData array & creates a new array to feed the data into createProjectCards


function render () {

const cardsHtmlList = [];

for (let i = 0; i < brandData.length; i++) {
    const currentProject = brandData[i];
    const cardHtml = createProjectCards(
        currentProject.id, 
        currentProject.name,
        currentProject.logoImage,
         );
        cardsHtmlList.push(cardHtml);
}

const cardsHtml = cardsHtmlList.join();
const projectCards = document.querySelector('#projectCards');
projectCards.innerHTML = cardsHtml;

}

render();


const onload = () => {
    const image = document.getElementById('view');
    image.style.opacity = 0;
    image.style.animation = 'fadeIn 3.5s ease-in-out 1 forwards';
}

onload();