function calculatrice() {
    var premierNombre = parseFloat(prompt("Entrez le premier nombre:"));
    var operateur = prompt("Entrez l'opérateur (+, -, *, /):");
    var secondNombre = parseFloat(prompt("Entrez le second nombre:"));
    
    let resultat;
    if (operateur === '+') {
        resultat = premierNombre + secondNombre;
    } else if (operateur === '-') {
        resultat = premierNombre - secondNombre;
    } else if (operateur === '*') {
        resultat = premierNombre * secondNombre;
    } else if (operateur === '/') {
        if (secondNombre !== 0) {
            resultat = premierNombre / secondNombre;
        } 
    }

    console.log(`Le résultat est : ${resultat}`);
}

calculatrice();