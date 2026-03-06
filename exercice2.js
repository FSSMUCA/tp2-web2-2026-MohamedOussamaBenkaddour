let valeurs = [0, 1, "", "hello", null, undefined, false, true, NaN, "0"];

for (let i = 0; i < valeurs.length; i++) {

    if (valeurs[i]) {
        console.log(valeurs[i] + " -> truthy");
    } else {
        console.log(valeurs[i] + " -> falsy");
    }

}
