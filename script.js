/*MUSIC 1*/
const flecheOne = document.getElementById("fleche-blanche-one")
const parolesOne = document.getElementById("paroles-musique-one")

flecheOne.addEventListener("click", function () {
    parolesOne.classList.toggle("visible");
    flecheOne.classList.toggle("active");
});
/*MUSIC 2*/
const flecheTwo = document.getElementById("fleche-blanche-two")
const parolesTwo = document.getElementById("paroles-musique-two")

flecheTwo.addEventListener("click", function () {
    parolesTwo.classList.toggle("visible");
    flecheTwo.classList.toggle("active");

});
/*MUSIC 3*/
const flecheThree = document.getElementById("fleche-blanche-three")
const parolesThree = document.getElementById("paroles-musique-three")

flecheThree.addEventListener("click", function () {
    parolesThree.classList.toggle("visible");
    flecheThree.classList.toggle("active");

});
/*MUSIC 4*/
const flecheFour = document.getElementById("fleche-blanche-four")
const parolesFour = document.getElementById("paroles-musique-four")

flecheFour.addEventListener("click", function () {
    parolesFour.classList.toggle("visible");
    flecheFour.classList.toggle("active");

});