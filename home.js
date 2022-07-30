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



const speakers = [
  {
    artist: 'Drake',
    genre: 'hip-hop',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/drake.jpg',
  },
  {
    artist: 'Taylor Swift',
    genre: 'Country',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/Tyler-Swift.jpg',
  },
  {
    artist: 'The weekend',
    genre: 'Rnb',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/theweekend.jpg',
  },
  {
    artist: 'Beyonce',
    genre: 'Pop',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/beyonce.jpg',
  },
  {
    artist: 'Rihanna',
    genre: 'Rock',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/rihanna-3.jpg',
  },
  {
    artist: 'Kanye-West',
    genre: 'Rock',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis dolor fugiat eum repellendus ullam sit adipisci quasi cum.',
    image: './Images/kanye.jpg',
  },
  // Over here add one more speaker
];

// Add one more speaker at index 5

// function generateSpeakers(index) {
//   const speakerCard = document.createElement('div');
//   speakerCard.className = 'speaker-card';

//   const checkerbox = document.createElement('img');
//   checkerbox.className = 'checkerbox';
//   checkerbox.src = './Images/checkerbox.png';

//   const speakerImage = document.createElement('img');
//   speakerImage.className = 'speakers-picture';
//   speakerImage.src = speakers[index].image;

//   const speakerBio = document.createElement('div');
//   speakerBio.className = 'speakers-bio';

//   const speakerName = document.createElement('h5');
//   speakerName.innerText = speakers[index].artist;

//   const speakerTitle = document.createElement('p');
//   speakerTitle.innerText = speakers[index].genre;
//   speakerTitle.className = 'speakers-title';

//   const speakerDesc = document.createElement('p');
//   speakerDesc.innerText = speakers[index].bio;
//   speakerDesc.className = 'speakers-discription';

//   speakerBio.append(speakerName, speakerTitle, speakerDesc);

//   speakerCard.append(checkerbox, speakerImage, speakerBio);

//   return speakerCard;
// }

// const speakerSection = document.getElementById('speakers-section');

// // for (let i = 0; i < speakers.length; i += 2) {
// //   const speakerRow = document.createElement('div');
// //   speakerRow.className = 'speakers-row';

// //   speakerRow.append(generateSpeakers(i), generateSpeakers(i + 1));
//   speakerSection.appendChild(speakerRow);
// }

document.getElementById('speakers-section').innerHTML = `
<h3>Music Artists</h3>
<div class="underline1"></div>
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
const loadMoreBtn = document.querySelector('.more-btn');
const hidden = document.querySelector('.mobile-hide');

loadMoreBtn.addEventListener('click', () => {
  hidden.classList.toggle('show-rest');
  loadMoreBtn.classList.toggle('hide-btn');
});