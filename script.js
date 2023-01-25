/*GET AND STORE RATING NUMBER ELEMENTS*/

const numberOneEl = document.getElementById('number-one');

const numberTwoEl = document.getElementById('number-two');

const numberThreeEl = document.getElementById('number-three');

const numberFourEl = document.getElementById('number-four');

const numberFiveEl = document.getElementById('number-five');

let rating 

/*EVENT LISTENERS FOR NUMBER BUTTONS*/

numberOneEl.addEventListener("click", ()=>{
    rating = 1
    console.log(rating)
})
numberTwoEl.addEventListener("click", ()=>{
    rating = 2
    console.log(rating)
})
numberThreeEl.addEventListener("click", ()=>{
    rating = 3
    console.log(rating)
})
numberFourEl.addEventListener("click", ()=>{
    rating = 4
    console.log(rating)
})
numberFiveEl.addEventListener("click", ()=>{
    rating = 5
    console.log(rating)
})

const selection = document.getElementById('number');

const submitEl = document.getElementById('submit-btn');

/*CLICK EVENT FOR SUBMIT*/

submitEl.addEventListener("click", ()=> {
    selection.innerText = `${rating}`;
    
    const ratingStateEl = document.getElementById('rating-state').style.display = 'none';
    const thankYouStateEl = document.getElementById('thank-you-state').style.display = 'flex';
    
})