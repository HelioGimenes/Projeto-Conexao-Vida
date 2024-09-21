const prompt = require('prompt-sync')({ sigint: true });

let instituicoes = []; 

let continuarInstituicao = true;
while (continuarInstituicao) {
    console.log("\n=== Cadastro de Instituição Hospitalar ===");

    const nomeInstituicao = prompt("Nome da Instituição: ");
    const cnpj = prompt("CNPJ: ");
    const telefoneInstituicao = prompt("Telefone de Contato: ");
    const enderecoInstituicao = prompt("Endereço: ");

    const instituicao = {
        nome: nomeInstituicao,
        cnpj,
        telefone: telefoneInstituicao,
        endereco: enderecoInstituicao,
    };

    instituicoes.push(instituicao); 
    console.log("\nCadastro realizado com sucesso!");

    console.log("\n=== Lista de Instituições ===");
    instituicoes.forEach((instituicao, index) => {
        console.log(`${index + 1}. Nome: ${instituicao.nome}, Telefone: ${instituicao.telefone}, Endereço: ${instituicao.endereco}, CNPJ: ${instituicao.cnpj}`);
    });

    continuarInstituicao = prompt("\nDeseja cadastrar outra instituição? (s/n): ").toLowerCase() === 's';
}

console.log("Programa finalizado.");
