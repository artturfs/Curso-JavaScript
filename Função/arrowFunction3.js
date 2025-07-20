let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Não funciona, pois arrow functions não têm seu próprio "this"
comparaComThisArrow(module.exports) // Também não funciona, pois o "this" é sempre o mesmo em arrow functions