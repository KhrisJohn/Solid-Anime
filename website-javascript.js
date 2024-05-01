const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'


  document.getElementById("DLink").href = "https://9anime.pe/watch/attack-on-titan-112?ep=3303";
  document.getElementById("DLink").href = "https://9anime.pe/watch/one-piece-100?ep=2142";
  document.getElementById("DLink").href = "https://9anime.pe/watch/naruto-677?ep=12352";
  document.getElementById("DLink").href = "https://9anime.pe/watch/one-punch-man-63?ep=1501";
  document.getElementById("DLink").href = "https://9anime.pe/watch/black-clover-2404?ep=27377";
  document.getElementById("DLink").href = "https://9anime.pe/watch/demon-slayer-kimetsu-no-yaiba-47?ep=1279";
  document.getElementById("DLink").href = "https://9anime.pe/watch/jujutsu-kaisen-tv-534?ep=10789";
  
}

