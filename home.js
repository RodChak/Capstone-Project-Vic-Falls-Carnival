// Portfolio: mobile menu
const hamburger = document.querySelector('.menu-icon');
const menuBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('active');
}));


let loadMoreBtn = document.querySelector('.more-btn');
let hidden = document.querySelector('.mobile-hide');

loadMoreBtn.addEventListener('click',(e)=>{
  hidden.classList.toggle('show-rest');
  loadMoreBtn.classList.toggle('hide-btn');
});



const speakers = [
  {
    artist: 'Drake',
    genre: 'hip-hop',
    bio: 'lorekbsakjcb sakcbksadbc kasb kcbauchb ashbcuioasgbc khgsdcougqc hqowgbcdquwo ohboucbwea ohwqochoqwb ohoqwhbcq ohqwdb qwoc ohqdoqwbc',
    image: './Images/drake.jpg',
  },
  {
    artist: 'Taylor Swift',
    genre: 'Country',
    bio: 'lorekbsakjcb sakcbksadbc kasb kcbauchb ashbcuioasgbc khgsdcougqc hqowgbcdquwo ohboucbwea ohwqochoqwb ohoqwhbcq ohqwdb qwoc ohqdoqwbc',
    image: './Images/Tyler-Swift.jpg',
  },
  {
    artist: 'The weekend',
    genre: 'Rnb',
    bio: 'lorekbsakjcb sakcbksadbc kasb kcbauchb ashbcuioasgbc khgsdcougqc hqowgbcdquwo ohboucbwea ohwqochoqwb ohoqwhbcq ohqwdb qwoc ohqdoqwbc',
    image: './Images/theweekend.jpg',
  },
  {
    artist: 'Beyonce',
    genre: 'Pop',
    bio: 'lorekbsakjcb sakcbksadbc kasb kcbauchb ashbcuioasgbc khgsdcougqc hqowgbcdquwo ohboucbwea ohwqochoqwb ohoqwhbcq ohqwdb qwoc ohqdoqwbc',
    image: './Images/beyonce.jpg',
  },
  {
    artist: 'Rihanna',
    genre: 'Rock',
    bio: 'lorekbsakjcb sakcbksadbc kasb kcbauchb ashbcuioasgbc khgsdcougqc hqowgbcdquwo ohboucbwea ohwqochoqwb ohoqwhbcq ohqwdb qwoc ohqdoqwbc',
    image: './Images/rihanna-3.jpg',
  },

];

document.getElementById('speakers-section').innerHTML = `
<h3>Music Artists</h3>
      <div class="speakers-row">
        <div class="speaker-card">
          <img class="checkerbox" src="./Images/checkerbox.png" alt="">
          <img class="speakers-picture" src= ${speakers[0].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[0].artist} </h5>
            <p class="speakers-title">${speakers[0].genre} </p>
            <p class="speakers-discription">${speakers[0].bio} </p>
          </div>
        </div>
        <div class="speaker-card">
          <img class="checkerbox" src="./Images/checkerbox.png" alt="">
          <img class="speakers-picture" src= ${speakers[1].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[1].artist} </h5>
            <p class="speakers-title">${speakers[1].genre} </p>
            <p class="speakers-discription">${speakers[1].bio} </p>
          </div>
        </div>
      </div>
      <button class="more-btn">MORE <img
          src="https://img.icons8.com/material-outlined/24/ec5242/expand-arrow--v1.png" /></button>
      <span class="mobile-hide">
        <div class="speakers-row">
          <div class="speaker-card">
            <img class="checkerbox" src="./Images/checkerbox.png" alt="">
            <img class="speakers-picture" src= ${speakers[2].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[2].artist} </h5>
            <p class="speakers-title">${speakers[2].genre} </p>
            <p class="speakers-discription">${speakers[2].bio} </p>
            </div>
          </div>
          <div class="speaker-card">
            <img class="checkerbox" src="./Images/checkerbox.png" alt="">
            <img class="speakers-picture" src= ${speakers[3].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[3].artist} </h5>
            <p class="speakers-title">${speakers[3].genre} </p>
            <p class="speakers-discription">${speakers[3].bio} </p>
            </div>
          </div>
        </div>
        <div class="speakers-row">
          <div class="speaker-card">
            <img class="checkerbox" src="./Images/checkerbox.png" alt="">
            <img class="speakers-picture" src= ${speakers[4].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[4].artist} </h5>
            <p class="speakers-title">${speakers[4].genre} </p>
            <p class="speakers-discription">${speakers[4].bio} </p>
            </div>
          </div>
          <div class="speaker-card">
            <img class="checkerbox" src="./Images/checkerbox.png" alt="">
            <img class="speakers-picture" src= ${speakers[5].image} alt="">
          <div class="speakers-bio">
            <h5>${speakers[5].artist} </h5>
            <p class="speakers-title">${speakers[5].genre} </p>
            <p class="speakers-discription">${speakers[5].bio} </p>
            </div>
          </div>
        </div>
        `;