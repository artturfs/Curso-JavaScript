// "Foreach" simplifica o processo de percorrer todos os elementos de uma estrutura de dados 
// e executar uma ação específica em cada um deles

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(elemento, indice, array) {
    console.log(`${indice + 1}) ${elemento}`)
})

aprovados.forEach(elemento => console.log(elemento))

/*
| Parâmetro  | Significado                             | Exemplo no seu código      |
| ---------- | --------------------------------------- | -------------------------- |
| `elemento` | O valor atual do array sendo processado | `'Agatha'`, `'Aldo'`, etc. |
| `indice`   | A posição (índice) do elemento          | `0`, `1`, `2`, `3`         |
| `array`    | O próprio array sendo percorrido        | `['Agatha', 'Aldo', ...]`  |
*/

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)