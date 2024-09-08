// let addIcon = document.querySelector('.material-icons');
// let href = document.getElementById('product')
// console.log(addIcon,href)


// href.foreach( a =>{
//     a.addEventListener('mouseenter', ()=>{
//         console.log(a)
//         addIcon.style.opacity = "1"
//     })
// })

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting if needed
    
    // Clear the input fields
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    
    // You can add any other form handling code here if needed
  });
  