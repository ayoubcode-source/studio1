let cardscontainer = document.querySelector('.cards-container')
console.log(cardscontainer)

let content = '';

for (let i = 1; i < 4 ; i++){

    console.log(i);  // Check if the loop is running 5 times

    content += `
         <div id="cards-row" class="row">
              <div class="col">
                <a href="#" class="card" >
                  <img src="img/post-1.jpg" >
                <div class="card-body">
                  <h6>First Time Home Owner Ideas</h6>
                  <p><span>by</span> Kristin Watson <span>on</span> Dec 19, 2021</p>
                </div>
              </a>
              </div>
              <div class="col">
                <a href="#" class="card" >
                  <img src="img/post-2.jpg" >
                <div class="card-body">
                  <h6>How To Keep Your Furniture Clean</h6>
                  <p><span>by</span> Robert Fox <span>on</span> Dec 15, 2021</p>
                </div>
              </a>
              </div>
              <div class="col">
                <a href="#" class="card" >
                  <img src="img/post-3.jpg" >
                <div class="card-body">
                  <h6>Small Space Furniture Apartment Ideas</h6>
                  <p><span>by</span> Kristin Watson  <span>on</span> Dec 12, 2021</p>
                </div>
              </a>
              </div>
            </div>
    `;
}

cardscontainer.innerHTML = content;

