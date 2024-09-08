let firstsection = document.getElementById('firstsection')
console.log(firstsection)

let content = '';

for (let i = 1; i < 5; i++){

    console.log(i);  // Check if the loop is running 5 times

    content += `
         <a href="#" id="product" class="col-3">
                    <div class="p-element">
                        <img src="img/nordic chair.png" >
                        <h6>Nordic Chair</h6>
                        <p>$50.00</p>
                        <i class="material-icons">add</i>
                    </div>
                  </a>
         <a href="#" id="product" class="col-3">
                    <div class="p-element">
                        <img src="img/ergonomic chair.png" >
                        <h6>Nordic Chair</h6>
                        <p>$50.00</p>
                        <i class="material-icons">add</i>
                    </div>
                  </a>
    `;
}

firstsection.innerHTML = content;

