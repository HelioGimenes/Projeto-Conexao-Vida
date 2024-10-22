const prompt = require('prompt-sync')({ sigint: true });

let doadores = []; 

let continuar = true;
while (continuar) {
    console.log("=== Cadastro de Doador de Sangue ===");

    const nome = prompt("Nome: ");
    const rg = prompt("RG: ");
    const cpf = prompt("CPF: ");
    const telefone = prompt("Telefone de Contato: ");
    const email = prompt("E-mail: ");
    const endereco = prompt("Endereço: ");

    const doador = {
        nome,
        rg,
        cpf,
        telefone,
        email,
        endereco,
    };

    doadores.push(doador); 
    console.log("\nCadastro realizado com sucesso!");

    
    console.log("\n=== Lista de Doadores ===");
    doadores.forEach((doador, index) => {
        console.log(`${index + 1}. Nome: ${doador.nome}, RG: ${doador.rg}, CPF: ${doador.cpf}, Telefone: ${doador.telefone}, E-mail: ${doador.email}, Endereço: ${doador.endereco}`);
    });

    continuar = prompt("\nDeseja cadastrar outro doador? (s/n): ").toLowerCase() === 's';
}

console.log("Programa finalizado.");
