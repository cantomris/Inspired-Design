// const menu = document.getElementById('menu');


// menu.addEventListener('click', () => {
//   const aside = document.getElementById('aside');
//   const ul = document.getElementById('ul');

//   if (aside.style.width == "400px") {
//     aside.style.width = "0px";
//     ul.style.display = "none";
//   } else {
//     aside.style.width = "400px";
//     ul.style.display = "block";
//   }
// })


// if ((windowWidth > "350") && (aside.style.width = "0")) {
//   aside.style.width = "50%";
//   ul.style.display = "block";
// } 
// else if ((windowWidth < "350") && (aside.style.width = "0")) {
//   aside.style.width = "100%";
//   ul.style.display = "block";
// }
// else if ((windowWidth < "350") && (aside.style.width = "100%")) {
//   aside.style.width = "0";
//   ul.style.display = "none";
// }
// else if ((windowWidth > "350") && (aside.style.width = "50%")) {
//   aside.style.width = "0";
//   ul.style.display = "none";
// }



// const menu = document.getElementById('menu');
// menu.addEventListener('click', () => {
//   const aside = document.getElementById('aside');
//   const ul = document.getElementById('ul');
//   let windowWidth = window.innerWidth;
//   let off = ul.style.display = "none";

//   if (off){
//    switch (true) {
//     case windowWidth > "350":
//       aside.style.width = "30%";
//       ul.style.display = "block";
//       break;
//     default:
//       aside.style.width = "100%";
//       ul.style.display = "block";
//       break;
//     }
//   } 
// })


// const menu = document.getElementById('menu');

// menu.addEventListener('click', () => {
//   const aside = document.getElementById('aside');
//   const ul = document.getElementById('ul');
//   let windowWidth = window.innerWidth;
//   let off = ul.style.display = "block";

//   function openNav(){
//     switch (true) {
//     case windowWidth > "500":
//       aside.style.width = "30%";
//       ul.style.display = "block";
//       break;
//     default:
//       aside.style.width = "100%";
//       ul.style.display = "block";
//       break;
//     }
//   }

//   if ((aside.style.width == "100%") || (aside.style.width == "30%")){
//     aside.style.width = "0px";
//     ul.style.display = "none";
//   } else {
//     openNav();

//   }

// })

// const menu = document.getElementById('menu');


// menu.addEventListener('click', () => {
//   const aside = document.getElementById('aside');
//   const ul = document.getElementById('ul');
//   let windowWidth = window.innerWidth;
//   function blank() {ul.style.display = "none"; aside.style.width = "0";}
//   function shown() {ul.style.display = "block";aside.style.width = "100%";}
//   function partial() {ul.style.display = "block";aside.style.width = "30%";}


//   function openNav(){
//     switch (true) {
//     case windowWidth > "500":
//       partial();
//       break;
//     default:
//       shown();
//       break;
//     }
//   }

//   if ((aside.style.width == "100%") || (aside.style.width == "30%")){
//     blank();
//   } else {
//     openNav();
//   }
// })


const menu = document.getElementById('menu');

menu.addEventListener('click', () => {

  let windowWidth = window.innerWidth;
  const sideBar = document.getElementById('aside');
  const navContent = document.getElementById('ul');

  function hideBtn() {
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
  }

  function showBtn() {
    menu.style.opacity = "1";
    menu.style.visibility = "visible";

  }

  function turnRight() {
    menu.style.transform = "rotate(180deg)";
    
  }

  function turnLeft() {
    menu.style.transform = "rotate(-90deg)";
    
  }

  function fullView() {
    sideBar.style.width = "100%";
    navContent.style.display = "block";
  }

  function halfView() {
    sideBar.style.width = "30%";
    navContent.style.display = "block";
  }

  function closeNav() {
    sideBar.style.width = "0";
    navContent.style.display = "none";
  }

  function openNav() {

    if (windowWidth < "500") {
      fullView();
      turnLeft();
    } else {
      halfView();
      turnRight()
    }
  }

  const mobileOpen = sideBar.style.width == "30%";
  const desktopOpen = sideBar.style.width == "100%";

  if (mobileOpen || desktopOpen) {
    closeNav();
    turnLeft();
  } else {
    openNav();
    hideBtn();

  }

  this.addEventListener('mouseup', (event) => {
    if (event.target != navContent && event.target.parentNode != navContent) {
      if (windowWidth < "500") {
        closeNav();
        showBtn();
        turnRight();
      } else {
        closeNav();
        showBtn();
        turnLeft();
      }

    }
  })

})

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {

  const contactBox = document.getElementById('contactMenu');
  const contactInfo = document.getElementById('contactContainer');
  const contactOpen = contactBox.style.height == "50%";
  const contactMinOpen = contactBox.style.height == "30%";
  const contactHead = document.getElementById('contactHead');

  function openForDesktop() {
    contactBox.style.height = "50%";
    contactBox.style.width = "70%";
    contactInfo.style.opacity = "1";
  }

  function closeContact() {
    contactBox.style.height = "0";
    contactInfo.style.opacity = "0";
  }


  function openForMobile() {
    contactBox.style.height = "30%";
    contactBox.style.width = "100%";
    contactInfo.style.opacity = "1";
    contactInfo.style.textAlign = "center";
    contactHead.style.fontSize = "16px";
  }

  function openContact() {
    if (window.innerWidth < "500") {
      openForMobile();
    } else {
      openForDesktop();
    }
  }


  if (contactOpen || contactMinOpen) {
    closeContact();
  } else {
    openContact();
  }

  this.addEventListener('mouseup', (event) => {

    if (event.target != contactInfo && event.target.parentNode != contactInfo) {
      closeContact();
    }
  })

})