
// const brandData = [
//   {
//     id: 0,
//     name: "Belvoir",
//     brand: "Belvoir Fruit Farms",
//     desc1: `Belvoir Fruit Farms nestles deep in the English countryside. For over 35 years, in the idyllic Vale of Belvoir, they've been pressing fresh fruit & infusing flowers to mix with spring water to make their fruit cordials & presses.`,
//     desc2: `Renowned for their elderflower drinks, still made to the original family recipe, the expanded range offers a wide variety of natural & authentic flavours. Locally, Belvoir Fruit Farms is ranged by both Coles & Woolworths.`,
//     creative: "./assets/assetsCreative/BFFCreative.png",
//     brief: "the job brief goes here - should be 2 - 3 lines max",
//     solution1:
//       "the solution should be three para - strategy / tactic / outcome",
//     solution2: "",
//     solution3: "",
//   },
//   {
//     id: 1,
//     name: "Thorburn",
//     brand: "Thorburn Property",
//     desc1: `Thorburn Property is a boutique commercial real estate agency located in Melbourne.`,
//     desc2: `They specialise in the leasing of office property in the city fringe, with a particular focus on the St Kilda Rd market & surrounding suburbs.`,
//     creative: "./assets/assetsCreative/ThorburnCreative.jpg",
//     brief: "still to come",
//     solution1: "still to come",
//     solution2: "still to come",
//     solution3: "sitll to come",
//   },
//   {
//     id: 2,
//     name: "ATT",
//     brand: "Ask The Tarot",
//     desc1: ``,
//     desc2: ``,
//     creative: "",
//     brief: "",
//     solution1: "",
//     solution2: "",
//     solution3: "",
//   },
//   {
//     id: 3,
//     name: "Infrusion",
//     brand: "Infrusion",
//     desc1: ``,
//     desc2: ``,
//     creative: "./assets/assetsCreative/InfrusionCreative.jpg",
//     brief: "still to come",
//     solution1: "still to come",
//     solution2: "still to come",
//     solution3: "sitll to come",
//   },
//   {
//     id: 4,
//     name: "RBY",
//     brand: "Reboot You",
//     desc1: ``,
//     desc2: ``,
//     creative: "./assets/assetsCreative/RBYCreative.png",
//     brief: "",
//     solution1: "",
//     solution2: "",
//     solution3: "",
//   },
//   {
//     id: 5,
//     name: "tshirts",
//     brand: "tshirtsonline.com.au",
//     desc1: ``,
//     desc2: ``,
//     creative: "./assets/assetsCreative/tshirtsonlineCreative.png",
//     brief: "still to come",
//     solution1: "still to come",
//     solution2: "still to come",
//     solution3: "sitll to come",
//   },
//   {
//     id: 6,
//     name: "SAS",
//     brand: "Shepherd Advisory Service",
//     desc1: ``,
//     desc2: ``,
//     creative: "./assets/assetsCreative/ShepherdCreative.png",
//     brief: "",
//     solution1: "",
//     solution2: "",
//     solution3: "",
//   },
//   {
//     id: 7,
//     name: "LadyBoss",
//     brand: "Lady Boss",
//     desc1: ``,
//     desc2: ``,
//     creative: "./assets/assetsCreative/LadyBossCreative.png",
//     brief: "still to come",
//     solution1: "still to come",
//     solution2: "still to come",
//     solution3: "sitll to come",
//   },
// ];


//get the div to attach the modal display to:

const modalDisplayDiv = document.querySelector('#projectCards');



//attach a click event to the buttons on the page:
function attachClickEvent() {

  const btnList = document.getElementsByClassName("btn");

  // get the length of the array created above
  let listLength = btnList.length;
  let i = 0;

  for (; i < listLength; i++) {
      // attach an event listener to each btn
        btnList[i].addEventListener("click", identifyBrand);
    }
    }



function identifyBrand(e) {

  //identify the button that was clicked

  let elem = e.target;

  //get the elementID from the button

  let elemId = elem.id;

  //test it's working 

  console.log('Element Id is '+elemId);

  //get the brand data attached to that id

 

  const theBrand = brandData.find( function(brandData){
    return brandData.name === elemId;
  
  });



      console.log(theBrand);
  
      const id = theBrand.id;
      const name = theBrand.name;
      const brand = theBrand.brand;
      const desc1 = theBrand.desc1;
      const desc2 = theBrand.desc2;
      const creative = theBrand.creative;
      const brief = theBrand.brief;
      const solution1 = theBrand.solution1;
      const solution2 = theBrand.solution2;
      const solution3 = theBrand.solution3;

// //test it's working

// console.log(id, name, brand, solution3);
      

    const html = `

                  <div class="modal fade" id="${name}" data-task-id="${id}" tabindex="-1" role="dialog" aria-labelledby="${name}Title" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="${name}Title">${brand}</h5>
                        <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <div>
                            <p>${desc1}</p>
                            <p>${desc2}</p>
                            </div>
                            <div class="container d-flex justify-content-around">
                            <img class="modalImage img-fluid" src="${creative}" />
                            </div>
                            <div>
                            <p class="workDesc"><strong>Brief:</strong> ${brief}</p>
                            <p><strong>Solution:</strong> ${solution1}</p>
                            <p>${solution2}</p>
                            <p>${solution3}</p>
                            </div>    
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm close" id="close" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div> `; 
      
      modalDisplayDiv.innerHTML = html;
    

      const reset = document.querySelector(".modal");

      reset.addEventListener("click", function () {
     $('.modal').on('hidden.bs.modal', function () {
      //  html.remove;
       location.reload();
      //  render();
     })
      
      })

      };

 
   
    
    
    
 
//attach the click event when the window loads

window.onload = attachClickEvent;









