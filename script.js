let harmburgerMenu = document.querySelector('.hamburger-menu');
let menuList = document.querySelector('.menu-list');

function toggle(){
 
//  menuList.style.display = 'block';
  if(menuList.style.left == '-1000px'){
    menuList.style.left = '0'
  }else{
    menuList.style.left = '-1000px';
  }
}
  