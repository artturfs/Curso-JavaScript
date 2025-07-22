// CÓDIGO NÃO EXECUTÁVEL

// Procedural, baseado em funções
// O código é organizado em funções que manipulam dados

processamento(valor1, valor2, valor3) 

// OO, baseado em objetos
// O código é organizado em objetos que contêm dados e comportamentos
// O foco é em como os objetos interagem entre si
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // Comportamento do objeto
    }
}

objeto.processamento() // O objeto sabe como processar seus próprios dados

// Principais conceitos de OO:
// 1. Abstração
// 2. Encapsulamento
// 3. Herança
// 4. Polimorfismo

// 1. Abstração: ocultar detalhes complexos e mostrar apenas o necessário

class Carro {
  ligar() {
    console.log("O carro está ligado.");
  }
}

// 2. Encapsulamento: esconde os detalhes internos de um objeto e permite controlar o acesso aos seus dados

class ContaBancaria {
  #saldo = 0; // atributo privado

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  verSaldo() {
    return this.#saldo;
  }
}

// 3. Herança: permite que uma classe herde características e comportamentos de outra classe

class Animal {
  fazerSom() {
    console.log("Algum som...");
  }
}

class Cachorro extends Animal {
  latir() {
    console.log("Au au!");
  }
}

const dog = new Cachorro();
dog.fazerSom(); // herdado
dog.latir();    // específico do cachorro

// Poliformismo: objetos de diferentes classes podem usar o mesmo método, mas com comportamentos diferentes

class Animal {
  falar() {
    console.log("O animal faz um som");
  }
}

class Gato extends Animal {
  falar() {
    console.log("Miau");
  }
}

class Vaca extends Animal {
  falar() {
    console.log("Muu");
  }
}

function fazerAnimalFalar(animal) {
  animal.falar();
}

const gato = new Gato();
const vaca = new Vaca();

fazerAnimalFalar(gato); // Miau
fazerAnimalFalar(vaca); // Muu
