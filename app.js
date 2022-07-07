const music = new Audio('');

// Array for the tracks
const tracks = [
    {
        id: '1',
        trackName: `Die Hard <br>
        <div class="subtitle">Kendrick Lamar ft Blxst, Amanda Reifer</div>`,
        poster: "img/Mr Morale.jpeg"
    },
    {
        id: '2',
        trackName: `One Right Now <br>
        <div class="subtitle">Post Malone & The WeekNd</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '3',
        trackName: `I Like You<br>
        <div class="subtitle">Post Malone ft Doja Cat</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '4',
        trackName: `Kiss Me More<br>
        <div class="subtitle">Doja Cat & SZA</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '5',
        trackName: `Overloading <br>
        <div class="subtitle">Mavins </div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        trackName: `Take Away <br>
        <div class="subtitle">Kuami Eugene </div>`,
        poster: "img/4.jpg"
    },
    {
        id: '7',
        trackName: `Industry Baby <br>
        <div class="subtitle">Lil Nas X ft Jack Harlow </div>`,
        poster: "img/12.jpg"
    },
    {
        id: '8',
        trackName: `Stand Strong <br>
        <div class="subtitle">Davido ft The Samples</div>`,
        poster: "/img/Davido-Ft-The-Samples-Stand-Strong-Artwork.jpg"
    },
    {
        id: '9',
        trackName: `Je M'appelle<br>
        <div class="subtitle">Darkovibes ft Davido </div>`,
        poster: "img/10.jpg"
    },
    {
        id: '10',
        trackName: `Chocolate <br>
        <div class="subtitle">Magixx</div>`,
        poster: "/img/Magixx-Chocolate-artwork.jpg"
    },
    {
        id: '11',
        trackName: `No Wahala <br>
        <div class="subtitle">1da Banton </div>`,
        poster: "img/1.jpg"
    },
    {
        id: '12',
        trackName: `Disturb <br>
        <div class="subtitle">Kwesi Arthur</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '13',
        trackName: `Sugarcane Remix <br>
        <div class="subtitle">Camidoh ft Mayorkun, King Promise & Darkoo </div>`,
        poster: "img/Camidoh-Sugarcane-Remix-Artwork.jpg"
    },
    {
        id: '14',
        trackName: `Therapy <br>
        <div class="subtitle">Stonebwoy</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '15',
        trackName: `Down Flat <br>
        <div class="subtitle">Kelvyn Boy</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '16',
        trackName: `Non-living Thing <br>
        <div class="subtitle">Sarkodie ft Oxlade</div>`,
        poster: "img//Sarkodie-No-Pressure-Album-Artwork.jpg"
    },
    {
        id: '17',
        trackName: `Touch It (RMX) <br>
        <div class="subtitle">KiDi ft Tyga</div>`,
        poster: "img/Kidi-and-Tyga-Touch-It-Remix-cover-art-1200x1200.jpg"
    },
    {
        id: '18',
        trackName: `Overloading <br>
        <div class="subtitle">Mavins</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '19',
        trackName: `Buga <br>
        <div class="subtitle">Kizz Daniel & Tekno</div>`,
        poster: "img/Buga.jpg"
    },
    {
        id: '20',
        trackName: `Calm Down <br>
        <div class="subtitle">Rema</div>`,
        poster: "img/Rema.jpg"
    },
    {
        id: '21',
        trackName: `Last Last <br>
        <div class="subtitle">Burnaboy</div>`,
        poster: "img/last.jpg"
    },
    {
        id: '22',
        trackName: `Peru<br>
        <div class="subtitle">Fireboy DML</div>`,
        poster: "img/22.jpg"
    },
    {
        id: '23',
        trackName: `2 Steppn <br>
        <div class="subtitle">Ed Sheeren ft Lil Baby</div>`,
        poster: "img/2step.jpg"
    },
    {
        id: '24',
        trackName: `Finesse <br>
        <div class="subtitle">Pheelz ft BNXN Buju</div>`,
        poster: "img/finesse.jpg"
    },
    {
        id: '25',
        trackName: `Something <br>
        <div class="subtitle">Gyakie</div>`,
        poster: "img/gs.jpg"
    },
    {
        id: '26',
        trackName: `Friday Night <br>
        <div class="subtitle">Lasmid</div>`,
        poster: "img/lasmid.jpg"
    },
   
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = tracks[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = tracks[i].trackName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if( !music.playing || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.toggle('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.toggle('active2');
    } 
    else{
        music.pause();
        wave.classList.toggle('active2');
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => { 
        element.classList.add('bi-play-circle-fill');
        element.classList.toggle('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => { 
            element.style.background = "rgba(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.querySelector('#title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.toggle('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `posters/${index}.jpg` ;
        music.play();
        let trackTitle = tracks.filter((element) => {
            return element.id == index;
        })

        trackTitle.forEach(element => {
            let {trackName} = element;
            title.innerHTML = trackName;
        })
        masterPlay.classList.toggle('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.toggle('active2');
        music.addEventListener('ended', () =>{
            wave.classList.toggle('active2');
            // masterPlay.classList.toggle('bi-play-fill');
        })  
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index -1}`].style.background = "rgba(105,105,170, .1)";
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);

    if( sec < 10){
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}: ${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);

    if( sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}: ${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})


music.addEventListener('ended', () => {
    masterPlay.classList.toggle('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.remove('active2');
})


let volIcon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let volDot = document.getElementById('vol_dot');
let volBar = document.getElementById('vol_bar');

vol.addEventListener('change', () => {
    if(vol.value == 0){
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 50){
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    volBar.style.width = `${vol_a}%`;
    volDot.style.left = `${vol_a}%`;
    music.volume = vol_a /100; 
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `posters/${index}.jpg` ;
    music.play();
    let trackTitle = tracks.filter((element) => {
        return element.id == index;
    })

    trackTitle.forEach(element => {
        let {trackName} = element;
        title.innerHTML = trackName;
    })

    makeAllPlays();
    document.getElementById(`${index}`).classList.toggle('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    wave.classList.toggle('active2');

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index -1}`].style.background = "rgba(105,105,170, .1)";
})

next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `posters/${index}.jpg` ;
    music.play();
    let trackTitle = tracks.filter((element) => {
        return element.id == index;
    })

    trackTitle.forEach(element => {
        let {trackName} = element;
        title.innerHTML = trackName;
    })

    makeAllPlays();
    document.getElementById(`${index}`).classList.toggle('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    wave.classList.toggle('active2');

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index -1}`].style.background = "rgba(105,105,170, .1)";
})

let left_scroll = document.getElementById('left_scroll'); 
let right_scroll = document.getElementById('right_scroll'); 
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 300;
})

right_scroll.addEventListener('click', () => {
    pop_song.scrollRight += 300;
})

let left_scrolls = document.getElementById('left_scrolls'); 
let right_scrolls = document.getElementById('right_scrolls'); 
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 300;
})

right_scrolls.addEventListener('click', () => {
    item.scrollRight += 300;
})