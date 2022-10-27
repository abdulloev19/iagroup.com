/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// var btn = document.querySelector(".dropbtn");
// btn.addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
export let header = {
  data() {
    return {};
  },
  template: `
  <header id="header">
  <div class="container">
    <div class="header_content">
      <div class="logo">
        <a href="#main_first"
          ><img src="img/ia-logo.png" alt="ialogo"
        /></a>
      </div>
      <nav>
        <ul class="menu_link">
        <li class="menu_item"><router-link to="/">Главная</router-link></li>
        <li class="menu_item"><router-link to="/aboutcompany">О компание </router-link></li>
        <li class="menu_item"><router-link to="/approachtowork">Подход к работе</router-link></li>
          <li class="menu_item"><router-link to="/services">Услуги</router-link></li>
          <li class="menu_item"><router-link to="/projects">Проекты</router-link></li>
          <li class="menu_item"><router-link to="/сlients">Клиенты</router-link></li>
          <li class="menu_item"><a href="#footer">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  `
};
