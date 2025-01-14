"use strict";

// chemins vers balises HTML
const pierre = document.getElementById('pierre');
const ciseaux = document.getElementById('ciseaux');
const feuille = document.getElementById('feuille');

const success = document.getElementById('success');
const monChoix = document.getElementById('mon_choix');
const choixAdverse = document.getElementById('choix_adverse');

// tableau des 3 choix
let tab = ['pierre', 'ciseaux', 'feuille'];



/**
 * Récupère aléatoirement un chiffre entre 0 et 2
 * @returns le choix de l'ordinateur
 */
function choixDeOrdi() {
    let indexAleatoire = Math.floor(Math.random() * tab.length);
    return tab[indexAleatoire];
}



/**
 * Va définir l'issu du match
 * @param {*} choixJoueur 
 * @param {*} choixOrdi 
 * @returns le résultat du match
 */
function determinerGagnant(choixJoueur, choixOrdi) {
    if (choixJoueur === choixOrdi) {
        return `<p id='egalite'>Match NUL !</p>`;
    }

    if ((choixJoueur === 'pierre' && choixOrdi === 'ciseaux') || (choixJoueur === 'ciseaux' && choixOrdi === 'feuille') || (choixJoueur === 'feuille' && choixOrdi === 'pierre')) {
        return `<p id='victoire'>Tu as gagné !</p>`;
    }

    return `<p id='defaite'>Tu as perdu !</p>`;
}



/**
 * Initiation d'un écouteur d'évènements qui va se déclencher lors d'un clique sur le bouton "pierre" et va afficher le choix du joueur, le choix de l'ordinateur ainsi que le résultat du match
 */
pierre.addEventListener('click', () => {
    let choixJoueur = 'pierre';
    monChoix.textContent = 'Votre choix : pierre';

    choixAdverse.textContent = `Choix de l'ordinateur : ${choixDeOrdi()}`;

    success.innerHTML = `${determinerGagnant(choixJoueur, choixDeOrdi())}`;
});



/**
 * Initiation d'un écouteur d'évènements qui va se déclencher lors d'un clique sur le bouton "ciseaux" et va afficher le choix du joueur, le choix de l'ordinateur ainsi que le résultat du match
 */
ciseaux.addEventListener('click', () => {
    let choixJoueur = 'ciseaux';
    monChoix.textContent = 'Votre choix : ciseaux';

    choixAdverse.textContent = `Choix de l'ordinateur : ${choixDeOrdi()}`;

    success.innerHTML = `${determinerGagnant(choixJoueur, choixDeOrdi())}`;
});



/**
 * Initiation d'un écouteur d'évènements qui va se déclencher lors d'un clique sur le bouton "feuille" et va afficher le choix du joueur, le choix de l'ordinateur ainsi que le résultat du match
 */
feuille.addEventListener('click', () => {
    let choixJoueur = 'feuille';
    monChoix.textContent = 'Votre choix : feuille';

    choixAdverse.textContent = `Choix de l'ordinateur : ${choixDeOrdi()}`;

    success.innerHTML = `${determinerGagnant(choixJoueur, choixDeOrdi())}`;
});
