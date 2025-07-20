// IIFE -> Immediately Invoked Function Expression
// Função que é executada imediatamente após ser definida

(function() {
    console.log("Será executado na hora!");
    console.log("Foge do escopo mais abrangente!");
})(); // Chama a função imediatamente após sua definição
// Ou seja, não é necessário chamar a função separadamente