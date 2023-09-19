// function myFunction() {
//     var x = document.getElementById("navbarNav")
//     if (x.style.display === 'none') {
//       x.style.display = 'block';
//     }
//     else {
//       x.style.display = 'none';
//     }
//   }
  
  let nav = document.querySelector(".navigation-wrap");
  
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add('scroll-on')
      }
      else {
        nav.classList.remove('scroll-on')
      }
  }
  

  //nav hide
  let navBar = document.querySelectorAll('.nav-link')
  navBar.forEach(function (a){
    a.addEventListener("click", function(){
      x.style.display = "none";
    })
  })

// Active
// let act = document.querySelectorAll('.carousel-indicators button')
// let item = document.querySelectorAll('.carousel-inner .carousel-item')
// act.onclick = function(){

// }

 

// item.forEach(a => {

//     a.addEventListener("click", ev =>{

//         handleActive(ev)

//     })
// })
س

// function handleActive(e){

//     e.target.parentElement.querySelectorAll('.active').forEach(s => {

//         s.classList.remove('active');
//     })

//     e.target.classList.add('active')
// }
// // function handleItem(q){
// //     q.target.parentElement.querySelectorAll('.active').forEach(item => {

// //         item.classList.remove('active');
// //     })

// //     q.target.classList.add('active')
// // }