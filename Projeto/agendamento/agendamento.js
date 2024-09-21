const prompt = require('prompt-sync')({ sigint: true });

let agendamentos = []; 

console.log("=== Agendamento de Doação de Sangue ===");
console.log("As doações podem ser agendadas de segunda a sexta, das 09:00 às 17:00.");

let continuar = true;
while (continuar) {
    const nome = prompt("Nome: ");
    const cpf = prompt("CPF: ");
    const telefone = prompt("Número de Contato: "); 

    agendamentos.push({ nome, cpf, telefone });
    console.log("Agendamento realizado com sucesso!");

    continuar = prompt("\nDeseja agendar outra doação? (s/n): ").toLowerCase() === 's';
}

console.log("\n=== Lista de Agendamentos ===");
agendamentos.forEach((agendamento, index) => {
    console.log(`${index + 1}. Nome: ${agendamento.nome}, CPF: ${agendamento.cpf}, Telefone: ${agendamento.telefone}`);
});
console.log("Horário de doação: das 09:00 às 17:00, atendimento por ordem de chegada.");
console.log("Programa finalizado.");
