function contarCaractere(letra, frase) {
    const letrar = frase.split("")
    return letrar.filter(palavra => palavra == letra || palavra == letra.toUpperCase()).length

}

console.log(contarCaractere("c", "Conhece a ti mesmo"))