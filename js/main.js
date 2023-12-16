// import { apiKey } from "./keys";

// import("./keys.js")

console.log("Hi");
const apiKey = window.apiKey;
// Peso Pluma id = 12GqGscKJx3aE4t07u7eVZ
async function fetchArtists() {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const recommendedArtistCards = document.querySelector('.recommended-artists');

        result.tracks.forEach(track => {
            const recommendedArtistCard = document.createElement('div');
            recommendedArtistCard.classList.add('recommended-artist-card');
            recommendedArtistCard.innerHTML = `
<div class="card" style="width: 10rem;">
<img src="${track.album.images[0].url}" class="card-img-top" alt="recommended-artist">
   <div class="card-body">
        <p class="card-text truncated-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="read-more-btn">Read more</button>
    </div>
</div>`;
            recommendedArtistCards.appendChild(recommendedArtistCard);
        });
    } catch (error) {
        console.error(error);
    }

}
fetchArtists();
//
async function differentArtists() {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_artists=12GqGscKJx3aE4t07u7eVZ%2C&seed_genres=mexican';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const newReleasesCards = document.querySelector('.insert-new-releases');

        result.tracks.forEach(track => {
            const newReleasesCard = document.createElement('div');
            newReleasesCard.classList.add('new-releases-card');
            newReleasesCard.innerHTML = `
<div class="card" style="width: 10rem;">
<img src="${track.album.images[0].url}" class="card-img-top" alt="new-releases">
   <div class="card-body">
        <p class="card-text truncated-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="read-more-btn">Read more</button>
    </div>
</div>`;
            newReleasesCards.appendChild(newReleasesCard);
        });
    } catch (error) {
        console.error(error);
    }

}
differentArtists();

async function getTracks() {
    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const getTracksCards = document.querySelector('.insert-get-tracks');

        result.tracks.forEach(track => {
            const getTracksCard = document.createElement('div');
            getTracksCard.classList.add('get-tracks-card');
            getTracksCard.innerHTML = `
<div class="card" style="width: 10rem;">
<img src="${track.album.images[0].url}" class="card-img-top" alt="get-tracks">
   <div class="card-body">
        <p class="card-text truncated-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="read-more-btn">Read more</button>
    </div>
</div>`;
            getTracksCards.appendChild(getTracksCard);
        });
    } catch (error) {
        console.error(error);
    }
}

getTracks();
// async function getGenres() {
//     const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=10';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0e2b2f4503msh46214f077ea0a32p1da25cjsnff0243e94fdf',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//     };
//
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//
//         const getGenresCards = document.querySelector('.insert-genres');
//
//         result.tracks.forEach(track => {
//             const getGenresCard = document.createElement('div');
//             getGenresCard.classList.add('get-genres-card');
//             getGenresCard.innerHTML = `
// <div class="card" style="width: 10rem;">
// <img src="${track.album.images[0].url}" class="card-img-top" alt="get-tracks">
//    <div class="card-body">
//         <p class="card-text truncated-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <button class="read-more-btn">Read more</button>
//     </div>
// </div>`;
//             getGenresCards.appendChild(getGenresCard);
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
// getGenres();
/* global bootstrap: false */
//
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()
