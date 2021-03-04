// 1a
const mcuShows = [
    "The Falcon And The Winter Soldier",
    "WandaVision"
];
// 1b
const starWarsShows = [
    "The Mandalorian",
    "The Clone Wars"
];
// 1c
const disneyPlusShows = [
    ...mcuShows,
    ...starWarsShows,
    "Muppets Now"
];
// 1d
// console.log(disneyPlusShows);

// 2a
const netflixMovies = {

    key: "action",
    value: "Extraction",

    key: "drama",
    value: "The Irishman"
};

// 2b
const disneyPlusMovies = {
    key: "musical",
    value: "Hamilton",
    key: "drama",
    value: "Togo"
};
// 2c
const streamingMovies = {
    ...disneyPlusMovies,
    ...netflixMovies,
    key: "comedy",
    value: "Shazam!"

};
// 2d
// console.log(streamingMovies);

// 3a
const disneyJunior = [
    "PJ Masks",
    "Jake and the Neverland Pirates"
];

// 3b
const [pj,jake] = disneyJunior;

// 3c
// console.log(pj,jake);

// 4a
const avengers = {
    captainAmerica: "Steve Rogers",
    theHulk: "Bruce Banner"
};

// 4b
const {captainAmerica,theHulk} = avengers;

// 4c
// console.log(captainAmerica,theHulk);

// 4d
const moreAvengers = {
    blackWidow: "Natasha Romano",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
};

// 4e
const {blackWidow: nat,...others} = moreAvengers;

// 4f
console.log(nat,others);

// BONUS 

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

//   5a

