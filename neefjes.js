// alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', onClick);
    plaatjes[i].addEventListener('dblclick', dblClick);
    // hier kun je nog 2 events aan toevoegen: click en dblclick
}

function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}

function onClick() {
    this.style.border = 'solid 3px' + this.dataset.kleur;
    document.getElementById('titel').innerHTML = this.title;
    document.getElementById('informatie').innerHTML = this.dataset.info;
    document.getElementById('info').style.border = 'solid 3px' + this.dataset.kleur;
    document.getElementById('titel').style.color =  this.dataset.kleur;
}

function dblClick() {
    this.dataset.clicks++
    this.nextSibling.innerHTML = this.dataset.clicks;
    let ballen = document.createElement("div");
    ballen.setAttribute("class", "bolletje");
    ballen.style.backgroundColor = this.dataset.kleur;
    document.getElementById("bolletjes").appendChild(ballen);
}



/** 
    Maak noeg een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks, 
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit 
    data-kleur toegevoegd worden aan het element div#bolletjes
*/
