const axios = require('axios').default

const PI_MAX = n => Number(Math.PI.toString().substr(0, Number(n + 1)))



const UNIQUE_COUNTRY = async (name) => {
    let res = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
    //to get the last element of the array
    return res.data[res.data.length - 1].name
}
// UNIQUE_COUNTRY('usa').then(res => console.log(`${res}`))


/*
    --GET ALL WITH MATCHING STRINGS--

    This function will return an array of objects, the key of the object will 
    be the string that is passed as argument, and the countries that match the
    countries name (at least a part of it).

    Note : the countries lists is filtered based on the name only not country code etc.
*/

const MATCHING_STRINGS = async arrayofstrings => {
    let res = await axios.get(`https://restcountries.eu/rest/v2/all`)
    let countries = res.data.map(item => item.name)

    let result = arrayofstrings.map(_string => {
        const _strRegex = new RegExp(_string, 'gi')
        let countriesFiltered = countries.filter(country => _strRegex.test(country) === true)
        return {
            [_string]: countriesFiltered
        }
    })

    return result
}
// MATCHING_STRINGS(['pa', 'us', 'is', 'pak']).then(res => console.log(res))



/*
    --SPINNING MACHINE ALGO--
*/
const SPIN_REELS = () => {

    const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
    const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
    const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]

    //to pick random values from all arrays 
    const spinResult = [
        reel1[Math.floor(Math.random() * reel1.length)],
        reel2[Math.floor(Math.random() * reel1.length)],
        reel3[Math.floor(Math.random() * reel1.length)],
    ]
    //filter out the unique one provided to the function and return an array of the unique elements
    let count = (el) => spinResult.filter(item => item === el)

    if (count('cherry').length === 3) {
        return 'You have won 50 coins !'
    } else if (count('cherry').length === 2) {
        return 'You have won 40 coins !'
    } else if (count('apple').length === 3) {
        return 'You have won 20 coins !'
    } else if (count('apple').length === 2) {
        return 'You have won 10 coins !'
    } else if (count('banana').length === 3) {
        return 'You have won 15 coins !'
    } else if (count('banana').length === 2) {
        return 'You have won 5 coins !'
    } else if (count('lemon').length === 3) {
        return 'You have won 3 coins !'
    } else {
        return 'You won 1 coin with one spin !'
    }

}
// console.log(SPIN_REELS())

//LINK to the schema
// https: //dbdiagram.io/d/5dc402feedf08a25543da38d

//Query for the Schema
"SELECT * FROM players WHERE games.type = 'SLOT' LEFT JOIN games.id = players.favoritegame"