const aluno = 'João';
const nota = 7.5;

switch (true) {
    case aluno != null:
        switch (true) {
            case nota >= 9:
                console.log(`${aluno} tirou A`);
                break;
            case nota >= 7:
                console.log(`${aluno} tirou B`);
                break;
            case nota >= 5:
                console.log(`${aluno} tirou C`);
                break;
            case nota >= 3:
                console.log(`${aluno} tirou D`);
                break;
            default:
                console.log(`${aluno} tirou F`);
        }
        break; 
    default: // Caso nao seja nenhuma das opções acima
        console.log('Aluno não encontrado');
        break;
}