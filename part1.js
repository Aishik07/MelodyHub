//2nd
const music = new Audio('audio/1.mp3');//music store
// music.play();

const songs = [{
        id: '1',
        songName: ` On My Way <br>
    <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: ` Alan Walker-Fade <br>
    <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id: "16",
        songName: `Tu Meri Jindgi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg",
    },
    {
        id: "17",
        songName: ` Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br><div class="subtitle"> Rahat Fateh Ali Khan</div>`,
        poster: "img/17.jpg",
    },
    {
        id: "18",
        songName: `Mere Dhol Judaiyan<br><div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "img/18.jpg",
    },
    {
        id: "19",
        songName: `Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpg",
    },
    {
        id: "20",
        songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/20.jpg",
    },

    
]   


//every song on left and right has same class.getElementsByClassName('songItem') returns an HTMLCollection (not an array).
//Array.from(...) converts it into a real array so you can use .forEach().

//e = the current .songItem element.

//i = index of the current element in the list.


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster; 
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});



//master play button

let masterPlay = document.getElementById('masterPlay');//take the masterplay icon 
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {  //music.currentTime <= 0 → audio hasn’t played at all.
        music.play();
        wave.classList.add('active1');// made a class active1 in css in wave to start the animation
        masterPlay.classList.remove('bi-play-fill');//remove play button
        masterPlay.classList.add('bi-pause-fill');//add pause button
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill'); //reverse
        masterPlay.classList.remove('bi-pause-fill');
    }
});





const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {    //play button in every image
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}





//4th
let index = 0;//index = global variable storing the song’s number or position so the player knows which song to load.
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');


//every song has same class.Converts the HTMLCollection into a real array (so .forEach() works).
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {             //click on the play button on every image


          let clickedId = el.target.id; // the song clicked
        
        // If same song clicked and it's playing → pause it
        if (index == clickedId && !music.paused) {
            music.pause();
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            el.target.classList.add('bi-play-circle-fill');//change the button at the image
            el.target.classList.remove('bi-pause-circle-fill');
            wave.classList.remove('active1');
            return; // exit early
        }
        index = clickedId;//el.target = the exact HTML element clicked (could be the icon or button).id gets that element’s id attribute (this is how you know which song it belongs to).
        // console.log(index);
        music.src = `audio/${index}.mp3`; //play the song according to the id
        poster_master_play.src = `img/${index}.jpg`;//change the poster also according to id in below mastterclass
        music.play();
        masterPlay.classList.remove('bi-play-fill');//play pause in below
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/${index}.mp3`;//set the link of the current song


        let songTitles = songs.filter((els) => {
            return els.id == index;   //filter the song which match the index
        });

        //songTitle will contain all the objects(id,songname,poster) which matches index

        songTitles.forEach(elss => {
            let { songName } = elss;  // object destructuring to extract only the songName property from elss.
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);//download with song name
        });
        makeAllBackground();//albackground opacity set to zero
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";//[index - 1] → picks the currently selected song (your index variable is probably 1-based, so subtracting 1 gives the correct array position).changes that song’s background to a semi-transparent gray to visually indicate it’s selected.
        makeAllplays();  // in all images resets all play buttons to their default “play” state before marking the selected song as “playing.”
        el.target.classList.remove('bi-play-circle-fill');//only change the target song button
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

//5th 
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);//convrt to minuts
    let sec1 = Math.floor(music_dur % 60);//convert to second

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;//to show double digit 0:0
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);//parseInt Removes any decimal places to give you a whole number percentage.
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;//style to show bar and dot
    dot.style.left = `${seekbar}%`;//both move together
});
////if we change the seek bar it will change

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;//move to current point
});





let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) { //change the icon according to volume
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;//change the actual volume
});
//next and back button

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;//that means move to previous index or song
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;//this is for last song as there is no song before that then set the last song after that
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {//after last song set to first song
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});



// SEARCH FUNCTIONALITY
let searchInput = document.querySelector('.search input');
let searchResults = document.querySelector('.search_results');

// Listen to typing in the search box
searchInput.addEventListener('keyup', () => {   // event listener that runs every time a key is released while typing in the search bar.
    let query = searchInput.value.toLowerCase();//search is case-insensitive.
    searchResults.innerHTML = ''; // clear old results
//query.trim() removes extra spaces from start/end.If it’s empty (=== ''), we hide the results and exit the function with return.If the search box is blank, we don’t want to show an empty dropdown or “No results”.
    if (query.trim() === '') {
        searchResults.style.display = 'none'; // hide when empty
        return;
    }

    // Filter songs based on songName (ignoring HTML tags)
    let filteredSongs = songs.filter(song => {
        let cleanName = song.songName.replace(/<[^>]*>/g, '').toLowerCase(); // remove HTML tags fromsongName and ensure case insensitive matching
        return cleanName.includes(query);//Check if query exists anywhere inside cleanName — if yes, return true, otherwise return false.”
   //If this line is inside a .filter() function, the return value (true or false) decides whether the current item should be kept in the filtered array.
    });

    // Show results
    //What: If at least one song matches, show the search results dropdown. 
    //Why: No matches → no need to show empty space.


    if (filteredSongs.length > 0) {
        searchResults.style.display = 'block';
        filteredSongs.forEach(song => {
            let resultItem = document.createElement('div');
            resultItem.classList.add('search_item');
            resultItem.innerHTML = `
                <img src="${song.poster}" alt="${song.songName}">
                <div class="search_text">${song.songName}</div>
            `;

            // When clicking on a search result → play song
            resultItem.addEventListener('click', () => {
                index = song.id;
                music.src = `audio/${index}.mp3`;
                poster_master_play.src = `img/${index}.jpg`;
                music.play();
                masterPlay.classList.remove('bi-play-fill');
                masterPlay.classList.add('bi-pause-fill');

                let { songName } = song;
                title.innerHTML = songName;
                download_music.href = `audio/${index}.mp3`;
                download_music.setAttribute('download', songName);

                makeAllBackground();
                Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
                makeAllplays();
                wave.classList.add('active1');

                searchResults.style.display = 'none';
                searchInput.value = '';
            });

            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.style.display = 'block';
        searchResults.innerHTML = '<p style="padding: 10px;">No results found</p>';
    }
});







/* first*/
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];/*there are multiple elements with class="pop_song", they will be stored in this collection in the order they appear in the HTML.0 means give the first element in that collection */


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;/* scrollleft is a function .everything under pop_song  will move to left by 330 px*/
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});