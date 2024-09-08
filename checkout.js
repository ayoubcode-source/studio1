
let orderbtn = document.querySelector('.place-order')
console.log(orderbtn)

orderbtn.onclick = function (){
    Swal.fire({
    title: "Good job!",
    text: "You order was successfuly completed!",
    icon: "success"
  });

  setTimeout(function() {
    window.location.href = "thankyou.html"; // Replace with the URL of the page to redirect to
  }, 2500);
}