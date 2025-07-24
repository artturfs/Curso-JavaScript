class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // 'constructor' é um método especial dentro de uma classe
    //  que é executado automaticamente quando um novo objeto é criado a partir dessa classe
        this.nome = nome // ta adicionando ao objeto que está sendo instanciado um atributo 'nome'
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // '...' é um operador que permite que você passe vários argumentos para uma função
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeAgua = new Lancamento('Água', -100)
const contaDeInternet = new Lancamento('Internet', -150)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeInternet)
console.log(contas.sumario())
