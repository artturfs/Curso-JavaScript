function tratarErro(e) {
    throw new Error("...");
    // throw 10
    // throw true
    // throw "Mensagem de erro"
}

function imprimirNomeGritando(obj) {
    try { // Se nao tiver erro, vai direto para o finally
        console.log(obj.name.toUpperCase() + "!!!"); 
    } catch (e) { // Se der erro, vai para o catch
       tratarErro(e);
    } finally { // Sempre executa, mesmo que tenha erro
        // O bloco finally é opcional, mas é uma boa prática usá-lo para liberar
        console.log("Finalizando a execução...");
    }
}   

const obj = { name: "Roberto" };
imprimirNomeGritando(obj); // ROBERTO!!!