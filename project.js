// Data for each card/button is stored in an array.  The name is used as the "id" for eventlistener & calling the modal

const projectData = [
    {id:0, name:'Belvoir', logoImage: './assets/assetsLogo/BFFLogo.png',},
    {id:1, name:'Thorburn', logoImage: './assets/assetsLogo/ThorburnLogo.png',},
    {id:2, name:'ATT', logoImage: './assets/assetsLogo/ATTLogo.png',},
    {id:3, name:'Infrusion', logoImage: './assets/assetsLogo/LogoInfrusion.png',},
    {id:4, name:'RBY', logoImage: './assets/assetsLogo/RBYLogo.png',},
    {id:5, name:'tshirts', logoImage: './assets/assetsLogo/tshirtsonlineLogo.png',},
    {id:6, name:'SAS', logoImage: './assets/assetsLogo/LogoSAS.png',},
    {id:7, name:'LadyBoss', logoImage: './assets/assetsLogo/LogoLadyBoss.png',}
];

// The HTML for the card/buttons with data passed into it from the render function

const createProjectCards = (id, name, logoImage) => {

const projectCard = `
    <div class="col-xs">
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
</div>    
`;
return projectCard;
};

// The render function loops through the projectData array & creates a new array to feed the data into createProjectCards


function render () {

const cardsHtmlList = [];

for (let i = 0; i < projectData.length; i++) {
    const currentProject = projectData[i];
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