// create an array of objects in another file - a record for each project to populate the-modal 

// eventlistener to pick up id of button being clicked triggers the build and inputs data from the array
const brandData = [
    {id: 0,
     name: 'Belvoir',
     brand: 'Belvoir Fruit Farms',
     desc1: `Belvoir Fruit Farms nestles deep in the English countryside. For over 35 years, in the idyllic Vale of Belvoir, they've been pressing fresh fruit & infusing flowers to mix with spring water to make their fruit cordials & presses.`,   
     desc2: `Renowned for their elderflower drinks, still made to the original family recipe, the expanded range offers a wide variety of natural & authentic flavours. Locally, Belvoir Fruit Farms is ranged by both Coles & Woolworths.`,
     creative: './assets/assetsCreative/BFFCreative.png',
     brief: 'the job brief goes here - should be 2 - 3 lines max',
     solution1: 'the solution should be three para - strategy / tactic / outcome',   
     solution2: '',
     solution3: '',
    },
    {id: 1,
     name: 'Thorburn',
     brand: 'Thorburn Property',
     desc1: `Thorburn Property is a boutique commercial real estate agency located in Melbourne.`,  
     desc2: `They specialise in the leasing of office property in the city fringe, with a particular focus on the St Kilda Rd market & surrounding suburbs.`,   
     creative: '.assets/assetsCreative/ThorburnCreative.jpg',
     brief: 'still to come',
     solution1: 'still to come',
     solution2: 'still to come',
     solution3: 'sitll to come',
    },
    {id: 2,
        name: 'ATT',
        brand: 'Ask The Tarot',
        desc1: ``,   
        desc2: ``,
        creative: '',
        brief: '',
        solution1: '',   
        solution2: '',
        solution3: '',
       },
       {id: 3,
        name: 'Infrusion',
        brand: 'Infrusion',
        desc1: ``,  
        desc2: ``,   
        creative: '.assets/assetsCreative/InfrusionCreative.jpg',
        brief: 'still to come',
        solution1: 'still to come',
        solution2: 'still to come',
        solution3: 'sitll to come',
       },
       {id: 4,
        name: 'RBY',
        brand: 'Reboot You',
        desc1: ``,   
        desc2: ``,
        creative: './assets/assetsCreative/RBYCreative.png',
        brief: '',
        solution1: '',   
        solution2: '',
        solution3: '',
       },
       {id: 5,
        name: 'tshirts',
        brand: 'tshirtsonline.com.au',
        desc1: ``,  
        desc2: ``,   
        creative: '.assets/assetsCreative/tshirtsonlineCreative.png',
        brief: 'still to come',
        solution1: 'still to come',
        solution2: 'still to come',
        solution3: 'sitll to come',
       },
       {id: 6,
        name: 'SAS',
        brand: 'Shepherd Advisory Service',
        desc1: ``,   
        desc2: ``,
        creative: './assets/assetsCreative/ShepherdCreative.png',
        brief: '',
        solution1: '',   
        solution2: '',
        solution3: '',
       },
       {id: 7,
        name: 'LadyBoss',
        brand: 'Lady Boss',
        desc1: ``,  
        desc2: ``,   
        creative: '.assets/assetsCreative/LadyBossCreative.png',
        brief: 'still to come',
        solution1: 'still to come',
        solution2: 'still to come',
        solution3: 'sitll to come',
       },
]



function createBrandModal(id, name, brand, desc1, desc2, creative, brief, solution1, solution2, solution3) {

    const brandModal = `

              <div class="modal fade" id="${name}" data-task-id="${id}" tabindex="-1" role="dialog" aria-labelledby="${name}Title" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="${name}Title">${brand}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                    <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div> `;
    return brandModal;
}

function showRel(e) {
  
    //get the element that is clicked
    var ele = e.target;
    
    //get the element id of the element that is clicked
    var eleId = ele.id;

      //display the id and rel in the console
    console.log("Element ID is " + eleId);
   
     for (let i = 0; i < brandData.length; i++) {

     while (brandData[i].name === eleId) {
         const thisBrand = createBrandModal(
             thisBrand.id,
             thisBrand.name,
             thisBrand.desc1,
             thisBrand.desc2,
             thisBrand.creative,
             thisBrand.brief,
             thisBrand.solution1,
             thisBrand.solution2,
             thisBrand.solution3
         );

        }
    }
}
  function attachClickEvent(){
    
      // get all the elements with className 'btn'. It returns an array
      var btnList = document.getElementsByClassName('btn');
    
      // get the lenght of array defined above
      var listLength = btnList.length;
      var i=0;
    
      // run the for look for each element in the array
      for(;i<listLength;i++){
        
          // attach the event listener
          btnList[i].addEventListener("click", showRel);
      }                                                                             
  }
  window.onload = attachClickEvent;
  



