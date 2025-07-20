// Função Construtora
// Função construtora é uma função que cria objetos
// É uma convenção nomear funções construtoras com a primeira letra maiúscula
// Ao usar uma função construtora, é comum usar o operador "new" para criar uma nova instância do objeto
// O operador "new" cria um novo objeto, define o contexto de "this" para esse novo objeto,
// e executa a função construtora com esse novo objeto como contexto

function Carro(VelocidadeMaxima = 200, delta = 5) {

    // Atributos privados
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function() { // Usamos this quando queremos que algo fique disponível fora da função, 
    // ou seja, que faça parte do objeto criado com new.
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = VelocidadeMaxima;
        }
    };

    // Método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    };

}

// Criando uma nova instância do objeto Carro
const uno = new Carro(); // Cria um carro com velocidade máxima padrão de 200 e delta de 5
uno.acelerar(); 
console.log(uno.getVelocidadeAtual()); // Exibe a velocidade atual do carro (5)

const ferrari = new Carro(350, 20); // Cria um carro com velocidade máxima de 350 e delta de 20
ferrari.acelerar(); // Acelera o carro
console.log(ferrari.getVelocidadeAtual()); // Exibe a velocidade atual do carro