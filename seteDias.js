console.clear();
var prompt = require("prompt-sync")();
const red = "\u001b[31m";
const blue = "\u001b[34m";
const white = "\u001b[0m";
const green = "\u001b[32m";
const rosa = "\u001b[35m";
const azulClaro = "\u001b[36m";
const Amarelo = "\u001b[33m";
let shane;
let escolhasCassino = [`VERMELHO`, `VERDE`, `BRANCO`];
let vencedor;
let consequencia1;
let status = {
  // Objetos referentes aos meus personagens
  dinheiro: 250,
  familia: 50,
  estresse: 50,
  dia: 1,
  aumentarDinheiro: function (valor) {
    // Funções dos objetos
    console.log();
    this.dinheiro = this.dinheiro + valor;
    console.log(green + `Dinheiro + R$${valor}` + white);
  },
  diminuirDinheiro: function (valor) {
    console.log();
    this.dinheiro = this.dinheiro - valor;
    console.log(red + `Dinheiro - R$${valor}` + white);
  },
  aumentarEstresse: function (valor) {
    console.log();
    this.estresse = this.estresse + valor;
    console.log(red + `Estresse +${valor}` + white);
    if (this.estresse > 100) {
      this.estresse = 100;
    } else if (this.estresse < 0) {
      this.estresse = 0;
    }
  },
  diminuirEstresse: function (valor) {
    console.log();
    this.estresse = this.estresse - valor;
    console.log(green + `Estresse -${valor}` + white);
    if (this.estresse > 100) {
      this.estresse = 100;
    } else if (this.estresse < 0) {
      this.estresse = 0;
    }
  },
  aumentarFamilia: function (valor) {
    console.log();
    this.familia = this.familia + valor;
    console.log(green + `Familia +${valor}` + white);
    if (this.familia > 100) {
      this.familia = 100;
    } else if (this.familia < 0) {
      this.familia = 0;
    }
  },
  diminuirFamilia: function (valor) {
    console.log();
    this.familia = this.familia - valor;
    console.log(red + `Familia -${valor}` + white);
    if (this.familia > 100) {
      this.familia = 100;
    } else if (this.familia < 0) {
      this.familia = 0;
    }
  },
  exibirStatus: function () {
    console.log(
      blue +
        `    
Status do personagem: ↴ 
|| Dinheiro: R$${this.dinheiro} || Familia: ${this.familia} 
|| Estresse: ${this.estresse}   || Dia: ${this.dia}
        ` +
        white
    );
    console.log();
    console.log();
  },
  passarDia: function () {
    this.dia++;
  },
  relatorio: function () {
    console.clear();
    console.log(`
         Final do dia ${this.dia}

         || Dinheiro: R$${this.dinheiro} 
         || Familia: ${this.familia} 
         || Estresse: ${this.estresse}
         || Dia: ${this.dia}
         `);
    if (this.estresse > 60) {
      console.log(
        red +
          `
Você está muito estressado, diminua seu estresse e evite consequencias 
` +
          white
      );
    }
    if (this.familia < 30) {
      console.log(
        red +
          `
Familia é uma parte muito importante da nossa vida, cuide mais dela
` +
          white
      );
    }
    prompt("Aperte ENTER para começar um novo dia");
    console.clear();
  },
};
function validarPergunta(pergunta) {
  // Função validação de perguntas de 3 opções
  let resposta;
  do {
    console.log(pergunta);
    resposta = +prompt();
  } while (resposta != 1 && resposta != 2 && resposta != 3);
  return resposta;
}
function validarPergunta2(pergunta) {
  // Função validação de perguntas de 2 opções
  let resposta;
  do {
    console.log(pergunta);
    resposta = +prompt();
  } while (resposta != 1 && resposta != 2);
  return resposta;
}
function cassinoRodadas(pergunta) {
  // Função validação de perguntas de 2 opções
  let resposta;
  do {
    console.clear();
    console.log(pergunta);
    resposta = +prompt();
  } while (resposta < 1 || resposta > 10);
  return resposta;
}
function cassinoValor(pergunta) {
  let resposta;
  do {
    console.clear();
    console.log(pergunta);
    resposta = +prompt();
  } while (resposta < 10 || resposta > 100);
  return resposta;
}
function cassinoEscolha(pergunta) {
  let resposta;
  do {
    console.clear();
    console.log(pergunta);
    resposta = +prompt();
  } while (resposta != 1 && resposta != 2 && resposta != 3);
  return resposta;
}
function continuar(motivo) {
  // função para continuar o programa
  prompt(`
                     Aperte Enter para ${motivo} ➥
                     `);
}
function indoPara(onde) {
  console.log(`
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  ▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
  ▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
  ░█▀█▀█░█▀██░█▀█░█▄█▄█░
  ░█▀█▀█░█▀████▀█░█▄█▄█░
  ████████▀█████████████

Indo para ${onde}     
                          `);
}
function cassinoStatus(rodadaAtual, rodadaRestante) {
  console.log(`
Essa é a rodada: ${rodadaAtual} // restam: ${rodadaRestante} rodadas`);
  console.log();
}
function falasAnne(fala) {
  console.log(
    rosa +
      `
                    ⣀⣤⣶⣶⣶⣾⣷⣶⣾⣿⣿⣶⣶⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⡏⢛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⢙⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⡿⠀⠀⢫⢛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⢃⠀⠀⢀⣳⣾⣿⣉⣉⠉⠉⠙⢿⣿⣿⡶⠅⢿⣿⣿⣯⣸⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣇⣚⣶⣤⠗⠙⠏⢃⠒⠢⠚⠂⠂⠀⣿⣿⠇⠀⢸⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣻⣿⣿⣿⣿⣿⠛⢛⣻⡆⠀⠐⠀⠀⠀⠀⠀⠀⠀⡿⠋⠠⠂⣼⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣹⡏⠻⢿⣿⣿⠄⠃⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠁⠀⠰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡟⠀⠀⣾⣿⡄⠀⠀⡃⠀⠀⠈⠀⠀⠀⠒⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣶⣶⣄⢿⣿⣿⣄⠀⡠⠀⢀⣀⠤⠊⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣮⣿⣿⣿⣮⠉⠉⣀⡠⠔⠀⠀⠀⠀⠀⢀⣴⣿⣿⣻⠿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡉⠙⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⠟⡕⠁⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠟⠛⠛⠿⣿⣿⣿⣿⣿⡇⢓⠤⣰⣤⣤⣾⣿⣿⡿⢛⡡⠊⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⡇⠀⠁⠒⠉⠭⠭⠭⠑⠀⠁⠀⠀⠀⢀⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠤⠀⢀⣀⣀⡀⠠⠄⠂⠁⠀⠀⠀
  Anne(Esposa de Jones): ${white}${fala}`
  );
}
// INICIO DO JOGO
console.log(
  red +
    `        
███████╗███████╗████████╗███████╗ ™
██╔════╝██╔════╝╚══██╔══╝██╔════╝        
███████╗█████╗     ██║   █████╗  
╚════██║██╔══╝     ██║   ██╔══╝  
███████║███████╗   ██║   ███████╗
╚══════╝╚══════╝   ╚═╝   ╚══════╝
                                 
██████╗ ██╗ █████╗ ███████╗      
██╔══██╗██║██╔══██╗██╔════╝      
██║  ██║██║███████║███████╗      
██║  ██║██║██╔══██║╚════██║      
██████╔╝██║██║  ██║███████║      
╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝ 
⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄     
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄

by: Caio Maximus™
                                 
                   ` +
    white
);
continuar("continuar");
console.log(`
Você está no corpo do personagem Jones, Jones mora no suburbio de uma pequena cidade, ele é um juiz
que acabou de entrar na profissão, no entanto a vida de Jones não está nada fácil, sua esposa(Anne) 
estava com uma doença muito rara e o tratamento era muito caro, Jones precisou vender seu carro e 
hipotecar a casa para pagar o hospital.
`);
continuar("continuar");
console.log(`
No entanto Jones ainda precisou pegar um empréstimo com um cara muito barra pesada chamado Lucio,
já que os bancos optaram por não ajudar ele, ele pegou 10.000 e só tem 7 dias para pagar, ou todos 
sabemos o que vai acontecer com Jones.
`);
continuar("continuar");
console.log(`
Jones recebe um valor alto por cada caso que ele julga justamente, sendo um caso por dia, no entanto
se o caso não for resolvido justamente você recebe apenas metade desse valor, faça o possivel para
analisar todos os casos com cuidado para não errar, cada real a menos pode custar a sua vida.
`);
continuar("continuar");
console.log(`
Além do trabalho de Juiz, Jones tem outras formas de conseguir esse dinheiro, saiba escolher cada
uma delas, ou você pode acabar perdendo dinheiro. evite chegar atrasado ao trabalho ou
será descontado
`);
continuar(`continuar`);

whilePrincipal: while (true) {
  // DIA 1
  while (true) {
    console.clear();
    status.exibirStatus();
    falasAnne(`
    Acabei de ver no jornal que hoje há um grande
    movimento na linha de metrô, e pelo que vejo pela janela muito transito também.
    como você vai ao trabalho?`);
    let resposta = validarPergunta(`
                            [1] PEGAR METRÔ
                            [2] PEGAR ONIBUS
                            [3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log(
        "O metrô estava lotado, você chegou bastante suado no seu trabalho"
      );
      status.aumentarEstresse(10);
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`
        O transito estava horrivel, você chegou atrasado.
        Você foi descontado em R$100
        `);
      status.diminuirDinheiro(100);
      continuar("continuar");
      break;
    } else if (resposta == 3) {
      console.clear();
      resposta = validarPergunta2(`
      São 15km até o seu trabalho, você tem certeza?

                      [1] SIM
                      [2] NÃO`);
      if (resposta == 1) {
        console.clear();
        console.log(
          "Você andou bastante mas chegou sem mais problemas ao trabalho"
        );
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("O Tribunal");
  continuar("continuar");
  while (true) {
    console.clear();
    status.exibirStatus();
    console.log(Amarelo + `                       No Tribunal`);
    console.log(
      `
    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
Caso helena Rubens? Helena está sendo acusada de tentativa de suborno 
após o policial Jason muller parar o seu carro e notar sinais de 
embriaguez em helena. Helena ofereceu 150 reais ao policial para 
que ele a deixasse seguir seu rumo.` + white
    );
    resposta = validarPergunta(`
                        [1] Ouvir helena
                        [2] Ouvir Jason 
                        [3] dar um veredito
`);
    if (resposta == 1) {
      console.clear();
      console.log(`
    
                      Defesa Helena Rubens

                  `);
      console.log(`
      ⢸⣿⣿⣿⣿⠃⠄⢀⣴⡾⠃⠄⠄⠄⠄⠄⠈⠺⠟⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣶⣤⡀⠄
      ⢸⣿⣿⣿⡟⢀⣴⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣷
      ⢸⣿⣿⠟⣴⣿⡿⡟⡼⢹⣷⢲⡶⣖⣾⣶⢄⠄⠄⠄⠄⠄⢀⣼⣿⢿⣿⣿⣿⣿⣿⣿⣿
      ⢸⣿⢫⣾⣿⡟⣾⡸⢠⡿⢳⡿⠍⣼⣿⢏⣿⣷⢄⡀⠄⢠⣾⢻⣿⣸⣿⣿⣿⣿⣿⣿⣿
      ⡿⣡⣿⣿⡟⡼⡁⠁⣰⠂⡾⠉⢨⣿⠃⣿⡿⠍⣾⣟⢤⣿⢇⣿⢇⣿⣿⢿⣿⣿⣿⣿⣿
      ⣱⣿⣿⡟⡐⣰⣧⡷⣿⣴⣧⣤⣼⣯⢸⡿⠁⣰⠟⢀⣼⠏⣲⠏⢸⣿⡟⣿⣿⣿⣿⣿⣿
      ⣿⣿⡟⠁⠄⠟⣁⠄⢡⣿⣿⣿⣿⣿⣿⣦⣼⢟⢀⡼⠃⡹⠃⡀⢸⡿⢸⣿⣿⣿⣿⣿⡟
      ⣿⣿⠃⠄⢀⣾⠋⠓⢰⣿⣿⣿⣿⣿⣿⠿⣿⣿⣾⣅⢔⣕⡇⡇⡼⢁⣿⣿⣿⣿⣿⣿⢣
      ⣿⡟⠄⠄⣾⣇⠷⣢⣿⣿⣿⣿⣿⣿⣿⣭⣀⡈⠙⢿⣿⣿⡇⡧⢁⣾⣿⣿⣿⣿⣿⢏⣾
      ⣿⡇⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢻⠇⠄⠄⢿⣿⡇⢡⣾⣿⣿⣿⣿⣿⣏⣼⣿
      ⣿⣷⢰⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⢰⣧⣀⡄⢀⠘⡿⣰⣿⣿⣿⣿⣿⣿⠟⣼⣿⣿
      ⢹⣿⢸⣿⣿⠟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣶⣭⣉⣤⣿⢈⣼⣿⣿⣿⣿⣿⣿⠏⣾⣹⣿⣿
      ⢸⠇⡜⣿⡟⠄⠄⠄⠈⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣻⣿⣿⣿⣿⣿⠟⠁⢳⠃⣿⣿⣿
      ⠄⣰⡗⠹⣿⣄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⠟⣅⣥⣿⣿⣿⣿⠿⠋⠄⠄⣾⡌⢠⣿⡿⠃
      ⠜⠋⢠⣷⢻⣿⣿⣶⣾⣿⣿⣿⣿⠿⣛⣥⣾⣿⠿⠟⠛⠉⠄⠄

Helena disse que pouco se lembra daquela noite pois acabava de 
sair de uma festa.
`);
      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`
    
                    Acusação Jason Muller
                                                    `);
      console.log(`
      ⣶⣿⣾⣷⣷⣾⣿⣿⣿⠋⠀⠀⠀⢠⣾⣿⣿⣿⣶⣤⣤⡀⠀⠀⢀⠀⢹⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣷⣸⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⡿⡟⠀⠀⠀⠀⢿⣿⣿⣿⢷⣿⣿⣿⣿⣿⣿⣿⠿⠁⠃⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⡄⡘⣤⠀⢀⣾⣿⣻⡿⢿⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⡉⣩⠀⣦⡙⠟⠟⠛⢓⠀⠙⢿⣿⣿⣿⣿⡧⠀⠀⣾⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⢿⣯⣿⢸⣿⣷⡗⠀⠀⠁⠒⠠⢀⢰⡿⠻⠼⠓⠂⠘⢿⣿⣿⣿
      ⣻⣿⡟⣯⣿⢋⣯⡟⣿⠏⠿⣿⣧⠀⠀⠀⠀⠀⠀⣨⡇⠀⠀⠀⠀⠀⣈⣿⣿⣿
      ⣿⣿⠿⣟⣻⣿⣿⣇⡟⡀⠀⣹⣿⣷⣦⣤⣤⣦⣾⣿⠇⠀⠀⠀⠀⢀⣾⣿⣿⣿
      ⣿⠃⠐⢩⣿⣿⢟⠟⠃⠀⠀⢸⣿⣿⣿⣿⡟⠿⢿⣿⡄⢰⡆⠀⢀⣿⣿⣿⣿⣿
      ⡏⡄⠀⠀⢻⡁⠀⠀⠀⠀⠐⠅⢻⣿⣿⣿⣿⣶⡄⠀⠀⠀⠁⢀⣾⣿⣿⣿⣿⣿
      ⠔⠀⠀⠀⠈⢟⢄⠀⠀⠀⠀⠈⠘⠛⢷⡄⠀⠭⠉⠁⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿
      ⢵⠀⠀⠀⠀⠈⢉⣦⠀⠀⠀⠀⠀⢱⣶⣿⣶⣶⡄⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿
      ⢀⡐⠀⠀⠀⠀⠈⢼⢅⠀⠀⠀⠀⠀⠈⠉⠛⠛⠁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
      ⠐⠀⠠⡀⠀⠀⠀⠈⠛⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⠉⠉⠉⠙⠻⠿⠿⣿⣿
      ⠓⠄⡀⠈⠢⠀⠀⠐⢤⣄⡀⠀⠀⠀⠀⠰⠀⠀⠀⠀⠀⠣⡄⠀⠀⠀⠀⠀⠀⠀

Jason diz que helena ofereceu 100 reais para que ele a deixasse seguir 
seu rumo e que ao negar ela ofereceu mais 50 reais, foi quando ele 
efetuou a prisão de helena por tentativa de suborno e embriaguez ao 
volante.`);
      console.log();
      continuar("voltar");
    } else {
      console.clear();
      resposta = validarPergunta(`
                        Dê o seu veredito:

                        [1]Helena é culpada!
                        [2]Helena é inocente
    `);
      if (resposta == 1) {
        console.clear();
        console.log(`Parabéns estava na cara que ela era culpada, mas você exerceu seu papel 
como juiz, você ganhou R$500`);
        status.aumentarDinheiro(1400);
        continuar("continuar");
        break;
      } else {
        console.clear();
        console.log(`O que foi isso? Estava na cara que ela era culpada, tenha atenção 
da próxima vez você recebeu apenas metade do salário`);
        status.aumentarDinheiro(700);
        status.aumentarEstresse(5);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("casa");
  continuar("continuar");
  console.clear();
  console.log("Em casa - 20:34");
  falasAnne(`
 Você passou no mercado e comprou a nossa janta? 
 nosso filho está com fome`);
  resposta = validarPergunta2(`
[1]Sim, Comprei nossa janta querida. (- R$100.00)
[2]Não, infelizmente estou sem dinheiro no momento `);
  if (resposta == 1) {
    console.clear();
    falasAnne(`Obrigado querido, ele estava esperando a sua chegada!`);
    status.aumentarFamilia(10);
    status.diminuirDinheiro(100);
    status.diminuirEstresse(5);
    continuar("continuar");
  } else if (resposta == 2) {
    console.clear();
    falasAnne(`
É incrivel como você nunca tem dinheiro para nós dois.`);
    status.diminuirFamilia(10);
    status.aumentarEstresse(5);
    console.log();
    continuar("continuar");
  }
  console.clear();
  status.exibirStatus();
  console.log(`       23:00 DO DIA 1 `);
  console.log();
  falasAnne(`
Um cara ligou hoje perguntando sobre um dinheiro, 
você sabe do que se trata? Espero que você nao tenha arrumado uma encrenca
para conseguir o dinheiro, acho que ele ligou errado`);
  console.log();
  let quest1 = validarPergunta2(`
[1] Contar toda a historia a Anne
[2] Omitir dela o empréstimo de R$10.000 reais`);
  if (quest1 == 1) {
    console.clear();
    falasAnne(`
    Não acredito nisso Jones, estamos correndo risco de vida e 
você decide me contar agora? faltando 14 dias para conseguir o dinheiro?
você é um mentiroso inacreditavél!!`);
    status.diminuirFamilia(15);
    status.aumentarEstresse(15);
    console.log();
    continuar("continuar");
  } else {
    console.clear();
    falasAnne(`
 Tudo bem, vamos dormir, espero que não esteja me escondendo nada.
 eu poderia te ajudar`);
    console.log();
    continuar("continuar");
  }
  status.relatorio();
  status.passarDia();
  while (true) {
    // DIA 2
    console.clear();
    status.exibirStatus();
    console.log();
    falasAnne(`
  Nossa, hoje está chovendo muito, 
acho que ninguém vai querer dirigir hoje, só um carro grande passaria por poças
deste tamanho.
como você vai ao trabalho hoje?`);
    resposta = validarPergunta(`
[1] PEGAR METRÔ
[2] PEGAR ONIBUS
[3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log(`Parece que todos tiveram a mesma ideia, você chegou bastante sujo
    ao trabalho`);
      status.aumentarEstresse(5);
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`Parece que você escolheu bem, chegou sem atrasos`);
      continuar("continuar");
      break;
    } else {
      console.clear();
      resposta = validarPergunta2(`
    São 15 KM até o seu trabalho, você tem certeza?
                    [1] SIM
                    [2] NÃO`);
    }
    if (resposta == 1) {
      console.clear();
      console.log(`Você chegou completamente molhado e atrasado ao trabalho!`);
      status.diminuirDinheiro(100);
      continuar("continuar");
      break;
    }
    indoPara("O tribunal");
    continuar("continuar");
  }
  while (true) {
    console.clear();
    status.exibirStatus();
    console.log();
    console.log(
      Amarelo +
        `No tribunal
    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
Caso Jimmy sand, Jimmy está sendo acusado de botar fogo em seu próprio restaurante 
pela sua seguradora, Na noite do dia 02/05/2022 o restaurante Jimmys Burguers pegou fogo 
e segundo a seguradora o valor de pagamento a ser efetuado ao dono do restaurante, o Jimmy 
e seria de 350.000` +
        white
    );
    console.log();
    resposta = validarPergunta(`
                         [1] Ouvir Jimmy
                         [2] Ouvir a Seguradora 
                         [3] dar um veredito
`);
    if (resposta == 1) {
      console.clear();
      console.log(
        green +
          `                   
      ⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿
      ⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿
      ⡇⠀⠀⠀⠀⣤⣤⣀⣀⣠⣤⣤⣷⣦⣤⣤⣤⣤⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢸⣿
      ⡇⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣄⠀⠀⢸⣿
      ⣷⠀⠀⠈⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿
      ⣿⡄⠀⠀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⢸⣿
      ⣿⡇⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⢸⣿
      ⡇⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠿⡿⢀⡀⠀⣔⣿
      ⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⣿⣿⣿⠿⠛⠛⠛⠋⠈⠀⠀⠀⠀⠘⡇⢠⣾⣿
      ⣇⠇⠀⣠⣄⠀⠀⠀⠀⣀⣀⣀⡀⢸⣿⣿⣇⣀⣀⢠⣀⢀⠀⠀⣀⣠⣶⡇⣾⣿⣿
      ⣿⡄⠀⢸⣿⣶⣤⣀⣀⣠⣽⣿⠁⣼⣿⣿⣿⣿⣿⣼⣬⣭⣶⣶⣿⣿⣿⠀⣿⣿⣿
      ⣿⡇⠀⠀⢹⣿⣿⣿⣿⣿⣿⡿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⣿⣿⣿
      ⣿⣷⡄⠀⠈⢿⣿⣿⣿⣿⣿⠁⢬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠀⢠⣿⣿⣿
      ⣿⣿⣇⠀⠀⠘⠿⣿⣿⣿⣿⠀⠈⠛⠿⠟⠙⠛⣻⣿⣿⣿⣿⣿⣯⠀⠀⣼⣿⣿⣿
      ⣿⣿⣿⡄⠀⠀⠀⠙⢿⣿⣿⣖⣄⣀⠀⢰⣿⣿⢿⣿⢿⣿⣿⡿⠀⠀⠸⢿⣿⣿⣿
      ⠛⠋⠉⠀⠀⠀⠀⠀⢀⣄⡀⠈⢈⠙⠛⢟⣋⢁⢁⣠⣤⣼⡿⠀⠀⠀⠀⠀⠀⠈⠙
      ⠀⠀⠀⠀⠀⠀⠀⠀⠹⠟⢀⢀⠚⠚⠛⠙⠛⢛⣿⣿⡟⠛⠁⠀⡀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⢿⣷⣿⣾⣿⣿⣿⣿⠇⠂⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⢐⠀⠀⠀⠀⠈⠛⠯⠿⡹⠛⠟⠉⠀⠀⠀⢀⣾⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡟⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠸⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢿⠁⠀⠀⠀⠀

Jimmy Sand(Réu):${white} Eu sou inocente, os bombeiros falaram que o incêndio começou na parte elétrica 
do restaurante, eu não tinha porquê botar fogo no meu restaurante, estávamos indo bem
e faturariamos 350.000 em alguns meses.

`
      );

      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`                    Acusação Seguradora 

      ⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
      ⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
      ⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
      ⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
      ⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
      ⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄

Ele anda todo desarrumado, é óbvio que os negócios iam mal, não tinha nem onde 
cair morto e viu no seguro uma chance de mudar de vida.

`);

      continuar("voltar");
    } else {
      console.clear();
      resposta = validarPergunta2(`
                    Dê um veredito:

                   [1] Jimmy é culpado!
                   [2] Jimmy é inocente
    `);
      if (resposta == 1) {
        console.clear();
        console.log(`
Foi um caso difícil, não se deve ignorar o relatório dos bombeiros em um caso como esse
e nem do acusado. Você recebeu apenas metade do salário`);
        status.aumentarDinheiro(700);
        continuar("continuar");
        break;
      } else if (resposta == 2) {
        console.clear();
        console.log(`
Foi um caso muito difícil, que bom que não ignorou o que Jimmy disse sobre os bombeiros.`);
        status.aumentarDinheiro(1400);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  status.exibirStatus();
  console.log();
  console.log(`
                        Seu telefone está tocando...
`);
  continuar("Atender");
  console.clear();
  console.log(` 18:59 do dia 2
${green}
⠁⡼⠋⠀⣆⠀⠀⣰⣿⣫⣾⢿⣿⣿⠍⢠⠠⠀⠀⢀⠰⢾⣺⣻⣿⣿⣿⣷⡀⠀
⣥⠀⠀⠀⠁⠀⠠⢻⢬⠁⣠⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠐⠱⠏⡉⠙⣿⣿⡇⠀
⢳⠀⢰⡖⠀⠀⠈⠀⣺⢰⣿⢻⣾⣶⣿⣿⣶⣶⣤⣤⣴⣾⣿⣷⣼⡆⢸⣿⣧⠀
⠈⠀⠜⠈⣀⣔⣦⢨⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⣼⠛⢹⠀
⠀⠀⠀⠀⢋⡿⡿⣯⣭⡟⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡘⠀
⡀⠐⠀⠀⠀⣿⣯⡿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣉⢽⣿⡆⠀⠀
⢳⠀⠄⠀⢀⣿⣿⣿⣿⣿⣿⣿⠙⠉⠉⠉⠛⣻⢛⣿⠛⠃⠀⠐⠛⠻⣿⡇⠀⠀
⣾⠄⠀⠀⢸⣿⣿⡿⠟⠛⠁⢀⠀⢀⡄⣀⣠⣾⣿⣿⡠⣴⣎⣀⣠⣠⣿⡇⠀⠀
⣧⠀⣴⣄⣽⣿⣿⣿⣶⣶⣖⣶⣬⣾⣿⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡇⠀⠀
⣿⣶⣈⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⢧⣿⣿⣿⣄⠙⢿⣿⣿⣿⠇⠀⠀
⠹⣿⣿⣧⢌⢽⣻⢿⣯⣿⣿⣿⣿⠟⣠⡘⠿⠟⠛⠛⠟⠛⣧⡈⠻⣾⣿⠀⠀⠀
⠀⠈⠉⣷⡿⣽⠶⡾⢿⣿⣿⣿⢃⣤⣿⣷⣤⣤⣄⣄⣠⣼⡿⢷⢀⣿⡏⠀⠀⠀
⠀⠀⢀⣿⣷⠌⣈⣏⣝⠽⡿⣷⣾⣏⣀⣉⣉⣀⣀⣀⣠⣠⣄⡸⣾⣿⠃⠀⠀⠀
⠀⣰⡿⣿⣧⡐⠄⠱⣿⣺⣽⢟⣿⣿⢿⣿⣍⠉⢀⣀⣐⣼⣯⡗⠟⡏⠀⠀⠀⠀
⣰⣿⠀⣿⣿⣴⡀⠂⠘⢹⣭⡂⡚⠿⢿⣿⣿⣿⡿⢿⢿⡿⠿⢁⣴⣿⣷⣶⣦⣤

Joseph(Irmão de Anne):${white} Oi Jonas, quanto tempo, estou com uma parada aqui pra nós, 
como nos velhos tempos, levar umas coisas no ferro velho, sei que você é juiz mas 
não tenho mais quem chamar, eu pago uma rodada e divido o dinheiro com você do trabalho.
`);
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  console.log();
  console.log(`
                   Tem uma mensagem de voz para você, é a Anne...
`);
  continuar("ouvir");
  console.clear();
  falasAnne(`
Oi querido, fui ao mercado e comprei algumas coisas para fazer
um jantar para nós dois, Lucas está na casa da minha mãe, vai ser só nós dois
estou te esperando.`);
  resposta = validarPergunta2(`
[1] Aceitar o trabalho de Joseph e deixar Anne esperando
[2] Recusar o trabalho com joseph e ir para casa.`);

  if (resposta == 1) {
    console.clear();
    console.log(`     23:43 do dia 2

    ⠁⡼⠋⠀⣆⠀⠀⣰⣿⣫⣾⢿⣿⣿⠍⢠⠠⠀⠀⢀⠰⢾⣺⣻⣿⣿⣿⣷⡀⠀
    ⣥⠀⠀⠀⠁⠀⠠⢻⢬⠁⣠⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠐⠱⠏⡉⠙⣿⣿⡇⠀
    ⢳⠀⢰⡖⠀⠀⠈⠀⣺⢰⣿⢻⣾⣶⣿⣿⣶⣶⣤⣤⣴⣾⣿⣷⣼⡆⢸⣿⣧⠀
    ⠈⠀⠜⠈⣀⣔⣦⢨⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⣼⠛⢹⠀
    ⠀⠀⠀⠀⢋⡿⡿⣯⣭⡟⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡘⠀
    ⡀⠐⠀⠀⠀⣿⣯⡿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣉⢽⣿⡆⠀⠀
    ⢳⠀⠄⠀⢀⣿⣿⣿⣿⣿⣿⣿⠙⠉⠉⠉⠛⣻⢛⣿⠛⠃⠀⠐⠛⠻⣿⡇⠀⠀
    ⣾⠄⠀⠀⢸⣿⣿⡿⠟⠛⠁⢀⠀⢀⡄⣀⣠⣾⣿⣿⡠⣴⣎⣀⣠⣠⣿⡇⠀⠀
    ⣧⠀⣴⣄⣽⣿⣿⣿⣶⣶⣖⣶⣬⣾⣿⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡇⠀⠀
    ⣿⣶⣈⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⢧⣿⣿⣿⣄⠙⢿⣿⣿⣿⠇⠀⠀
    ⠹⣿⣿⣧⢌⢽⣻⢿⣯⣿⣿⣿⣿⠟⣠⡘⠿⠟⠛⠛⠟⠛⣧⡈⠻⣾⣿⠀⠀⠀
    ⠀⠈⠉⣷⡿⣽⠶⡾⢿⣿⣿⣿⢃⣤⣿⣷⣤⣤⣄⣄⣠⣼⡿⢷⢀⣿⡏⠀⠀⠀
    ⠀⠀⢀⣿⣷⠌⣈⣏⣝⠽⡿⣷⣾⣏⣀⣉⣉⣀⣀⣀⣠⣠⣄⡸⣾⣿⠃⠀⠀⠀
    ⠀⣰⡿⣿⣧⡐⠄⠱⣿⣺⣽⢟⣿⣿⢿⣿⣍⠉⢀⣀⣐⣼⣯⡗⠟⡏⠀⠀⠀⠀
    ⣰⣿⠀⣿⣿⣴⡀⠂⠘⢹⣭⡂⡚⠿⢿⣿⣿⣿⡿⢿⢿⡿⠿⢁⣴⣿⣷⣶⣦⣤

Vocês carregaram algumas peças até o ferro-velho do Joseph e ele te paga R$300.00
por ter ajudado ele, mas Anne está furiosa com você 
${green}
Joseph(Irmão da Anne):${white}Muito obrigado Jones, não sabia mais a quem chamar, 
que bom que você não deixou aquela roupa de juiz subir a sua cabeça, você é um 
ótimo amigo.
`);
    status.aumentarDinheiro(300);
    status.diminuirFamilia(15);
    continuar("continuar");
    console.clear();
    status.exibirStatus();
    console.log();
    console.log(` 02:00 da madrugada do dia 03

            Seu telefone está tocando, é Anne`);

    continuar("atender");
    console.clear();
    falasAnne(`
Oi, onde você está? 
preciso que venha ao hospital me buscar. como você não veio para o jantar decidi 
caminhar na rua, um pouco alcoolizada e acabei torcendo o meu tornozelo no meio fio,
te espero aqui.`);

    continuar("ir ao Hospital");
    console.clear();
    indoPara("O hospital");
    continuar(`continuar`);
    console.clear();
    falasAnne(`
Os cuidados do hospital custaram R$200.00, vou te deixar
resolver a papelada e vou pra casa de taxi, você poderia ter me avisado que não iria pra
casa.`);
    status.diminuirDinheiro(200);
    status.diminuirFamilia(5);
    continuar("continuar");
  } else {
    console.clear();
    indoPara("casa");
    continuar("continuar");
    console.clear();
    status.exibirStatus();
    console.log();
    console.log(`
Você foi pra casa e encontrou com Anne na cozinha fazendo a sua janta
favorita, nada melhor que isso depois de um dia tão estressante`);
    falasAnne(`
Obrigado por ter vindo, Joseph me ligou e disse que
tinha te chamado para ajudar ele no ferro velho, que bom que você veio pra casa
deu trabalho preparar toda essa comida`);
    status.aumentarFamilia(15);
    status.diminuirEstresse(10);
    continuar("continuar");
    console.clear();
    falasAnne(`
  O que acha de ir dar uma volta no bairro,
sei que já é tarde mas podemos tomar um pouco de ar fresco`);
    resposta = validarPergunta2(`
[1] Ir com Anne
[2] Ir dormir
`);
    if (resposta == 1) {
      console.clear();
      console.log(`
    Você está caminhando com Anne e acha R$200.00 na rua, o dinheiro
    estava bem escondido na grama, você tem bons olhos.
    `);
      status.aumentarDinheiro(200);
      status.diminuirEstresse(5);
      status.aumentarFamilia(5);
      continuar("continuar");
    } else {
      console.clear();
      falasAnne(`
    Tudo bem então... se é o que você quer,
    vamos dormir.`);
      status.diminuirFamilia(5);
      continuar("continuar");
    }
  }
  console.clear();
  console.log();
  status.relatorio();
  status.passarDia();
  continuar("continuar");
  console.clear();
  status.exibirStatus(); // DIA 3
  console.log();
  falasAnne(`
Hoje está um dia lindo, parece que as pessoas
optaram por ficar em casa, pelo que vejo no jornal tem poucas pessoas nas ruas.
como você vai ao trabalho ?`);
  resposta = validarPergunta(`
[1] PEGAR METRÔ
[2] PEGAR ONIBUS
[3] IR ANDANDO
`);
  if (resposta == 1) {
    console.clear();
    console.log(`
Houve um problema com os trilhos, você não chegou atrasado mas foi bem estressante`);
    status.aumentarEstresse(5);
    continuar("continuar");
  } else {
    console.clear();
    console.log(`
    Sua esposa estava certa, foi um ótimo dia para não ir para baixo do solo naquele metrô.`);
    status.diminuirEstresse(5);
    continuar("continuar");
  }
  console.clear();
  indoPara("O tribunal");
  continuar("continuar");
  console.clear();
  console.log(`
                     Antes de entrar na sessão seu telefone toca...
                     É Paul, o advogado de Hernan Diaz`);

  continuar("atender o celular");
  console.clear();
  console.log(
    green +
      `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠄⢀⣤⣶⣶⣶⣶⣶⣤⣄⠄⠈⢿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠄⠄⠄⠄⠄⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣼⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⢃⡀⠂⠄⠄⠄⠄⢿⣿⣿⣿⣿⣿⣶⡶⠤⣬⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣶⣾⣏⣀⣿⣿⣿⢳⣤⣜⣿
⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣁⣸⣿
⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠿⠾⠯⣭⣿⣷⣿⣿
⣿⣿⣿⣿⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⢈⣿⣿⣿⣿⣿⠋⠄⠄⠄⠄⠈⠄⠙⡿⣿
⣿⣿⣿⣿⡉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣽⣿⠄⠐⢦⣴⣶⢚⠋⠄⠄⣁⣿
⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠁⠉⠁⠄⠄⠄⠸⢷⣾⡄⠄⠄⢸⣿
⣿⣿⠿⠛⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⠇⠄⠄⢸⣿
⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣧⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿

    Paul (Advogado de Hernan): ${white} Sabemos que você é um juiz não muito prestigiado 
    e que ganha menos do que a maioria, pare de ajudar esse sistema a troco de migalhas,
    meu cliente te oferece R$2000.00 pela soltura imediata dele.
    `
  );
  continuar("Entrar na sessão");
  while (true) {
    console.clear();
    status.exibirStatus();
    console.log(
      Amarelo +
        `No tribunal
    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
Caso Hernan Diaz, Hernan Diaz está sendo acusado de desacato a autoridade.
Após sair da sua empresa, Hernan foi parado por um policial e não ficou nada feliz 
com isso, desacatou o policial de todas as formas possíveis e acabou sendo detido.` +
        white
    );

    resposta = validarPergunta(`
[1] Ouvir Hernan
[2] Ouvir o Policial 
[3] Dar veredito
`);
    if (resposta == 1) {
      console.clear();
      console.log(
        green +
          `                    Defesa Hernan  
 
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⣾⣷⣿⣿⣿⣷⣄⠄⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⢅⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⡀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠘⢿⣿⠁⣩⣿⣿⣿⠿⣿⡿⢿⣿⣿⣿⠛⣿⡟⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⢷⣾⣿⣋⡡⠤⣀⣷⣄⠠⠤⣉⣿⣷⣽⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡻⣾⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣟⢋⣰⣯⠉⠉⣿⢄⠉⢻⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⢿⣷⣶⠤⠔⣶⣶⠿⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⢀⡀⠠⠀⠂⠀⠀⣧⡚⢿⣿⡶⢶⡿⠟⣠⣿⣿⠀⠀⠀⠀⠄⣀⡀⠀⠀
      ⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⢿⣷⣄⡀⠀⠀⠀⣈⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠒
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠒⠐⠺⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣋⣀⡄⠠⣢⣀⣩⣛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀      
Hernan Diaz(Réu):${white}Senhor Juiz, esse policial mediocre me prendeu por motivo algum, ele apenas 
ficou com inveja do meu lindo carro novo e resolveu me parar e me prender!!`
      );

      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`              Acusação estado

      ⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
      ⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
      ⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
      ⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
      ⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
      ⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄

Senhor Juiz, ele estava trafegando em altíssima velocidade e pedi que ele encostasse,
mas ao encostar ele saiu do carro de forma brusca me perguntando varias vezes o porque
de eu ter parado ele, me xingando de todas as formas possíveis e até ameaçando o meu emprego. 
`);
      continuar("voltar");
    } else {
      console.clear();
      console.log(`
                             Dê o seu veredito  `);
      consequencia1 = validarPergunta2(`
 [1] Hernan é culpado de desacato e tentativa de suborno de um Juiz!!
 [2] Hernan Diaz é inocente
 `);
      if (consequencia1 == 1) {
        console.clear();
        console.log(`
     Parabéns senhor juiz, você fez o que era certo, sempre soube que o senhor era Honesto `);
        status.aumentarDinheiro(1400);
        continuar("continuar");
        break;
      } else {
        console.clear();
        console.log(`
     Era esperado, Um juiz medíocre como esse jamais prenderia um homem tão rico.
     `);
        status.aumentarDinheiro(700);
        continuar("continuar");
        console.clear();
        console.log(`
                    O advogado de Hernan te liga `);
        continuar("atender");
        console.clear();
        console.log(`
    Olá Jones, você cumpriu o trato e eu estou cumprindo a minha parte nesse momento
    estou te enviando uma transferencia de R$2000, Obrigado, Hernan não vai se esquecer de você
     `);
        status.aumentarDinheiro(2000);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("casa");
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  falasAnne(`
Oi querido, que bom que você chegou estava
te esperando, o encanamento da cozinha quebrou, você pode chamar o encanador?
liguei pra eles e cobraram R$400.00 para consertar isso`);
  resposta = validarPergunta2(`
[1] Consertar você mesmo
[2] Ligar para o encanador
`);

  if (resposta == 1) {
    console.clear();
    console.log(`
 Parece que você não sabe nada sobre encanamento, se machucou mas conseguiu consertar`);
    status.aumentarEstresse(5);
    status.aumentarFamilia(5);
    continuar("continuar");
  } else {
    console.clear();
    console.log("você chamou o encanador e eles cobraram R$400.00");
    status.diminuirDinheiro(400);
    continuar("continuar");
  }
  console.clear();
  status.exibirStatus();
  console.log(`              Seu telefone toca, não tem nome...    
`);
  continuar("Atender telefone");
  console.clear();
  console.log(`Em casa 23:43 dia 3
  ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠄⠄⠄⠁⠄⠁⠄⠄⠄⠄⠄    ${green} Anônimo: ${white} Oi Jones, você não sabe quem é, mas eu sei exatamente
⠄⠄⠄⠄⠄⠄⣀⣀⣤⣤⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣤⣄⣀⡀⠄⠄⠄⠄⠄    quem você é, sei da sua situação e sei que seu tempo já está acabando eu posso te ajudar,
⠄⠄⠄⠄⣴⣿⣿⡿⣿⢿⣟⣿⣻⣟⡿⣟⣿⣟⡿⣟⣿⣻⣟⣿⣻⢿⣻⡿⣿⢿⣷⣆⠄⠄⠄    amanhã no seu tribunal você verá Shane Manson, Inocente ele e te daremos R$40.000 e 
⠄⠄⠄⢘⣿⢯⣷⡿⡿⡿⢿⢿⣷⣯⡿⣽⣞⣷⣻⢯⣷⣻⣾⡿⡿⢿⢿⢿⢯⣟⣞⡮⡀⠄⠄    três passagens para fora do país, com passaportes novos você paga sua divida e saí do país
⠄⠄⠄⢸⢞⠟⠃⣉⢉⠉⠉⠓⠫⢿⣿⣷⢷⣻⣞⣿⣾⡟⠽⠚⠊⠉⠉⠉⠙⠻⣞⢵⠂⠄⠄    para evitar de ser preso por conspiração. Bom, essa é minha oferta, pense bem...
⠄⠄⠄⢜⢯⣺⢿⣻⣿⣿⣷⣔⡄⠄⠈⠛⣿⣿⡾⠋⠁⠄⠄⣄⣶⣾⣿⡿⣿⡳⡌⡗⡅⠄⠄
⠄⠄⠄⢽⢱⢳⢹⡪⡞⠮⠯⢯⡻⡬⡐⢨⢿⣿⣿⢀⠐⡥⣻⡻⠯⡳⢳⢹⢜⢜⢜⢎⠆⠄⠄
⠄⠄⠠⣻⢌⠘⠌⡂⠈⠁⠉⠁⠘⠑⢧⣕⣿⣿⣿⢤⡪⠚⠂⠈⠁⠁⠁⠂⡑⠡⡈⢮⠅⠄⠄    Anônimo desliga o telefone...
⠄⠄⠠⣳⣿⣿⣽⣭⣶⣶⣶⣶⣶⣺⣟⣾⣻⣿⣯⢯⢿⣳⣶⣶⣶⣖⣶⣮⣭⣷⣽⣗⠍⠄⠄
⠄⠄⢀⢻⡿⡿⣟⣿⣻⣽⣟⣿⢯⣟⣞⡷⣿⣿⣯⢿⢽⢯⣿⣻⣟⣿⣻⣟⣿⣻⢿⣿⢀⠄⠄
⠄⠄⠄⡑⡏⠯⡯⡳⡯⣗⢯⢟⡽⣗⣯⣟⣿⣿⣾⣫⢿⣽⠾⡽⣺⢳⡫⡞⡗⡝⢕⠕⠄⠄⠄
⠄⠄⠄⢂⡎⠅⡃⢇⠇⠇⣃⣧⡺⡻⡳⡫⣿⡿⣟⠞⠽⠯⢧⣅⣃⠣⠱⡑⡑⠨⢐⢌⠂⠄⠄
⠄⠄⠄⠐⠼⣦⢀⠄⣶⣿⢿⣿⣧⣄⡌⠂⠢⠩⠂⠑⣁⣅⣾⢿⣟⣷⠦⠄⠄⡤⡇⡪⠄⠄⠄
⠄⠄⠄⠄⠨⢻⣧⡅⡈⠛⠿⠿⠿⠛⠁⠄⢀⡀⠄⠄⠘⠻⠿⠿⠯⠓⠁⢠⣱⡿⢑⠄⠄⠄⠄
⠄⠄⠄⠄⠈⢌⢿⣷⡐⠤⣀⣀⣂⣀⢀⢀⡓⠝⡂⡀⢀⢀⢀⣀⣀⠤⢊⣼⡟⡡⡁⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠈⢢⠚⣿⣄⠈⠉⠛⠛⠟⠿⠿⠟⠿⠻⠻⠛⠛⠉⠄⣠⠾⢑⠰⠈⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠑⢌⠿⣦⡡⣱⣸⣸⣆⠄⠄⠄⣰⣕⢔⢔⠡⣼⠞⡡⠁⠁⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠑⢝⢷⣕⡷⣿⡿⠄⠄⠠⣿⣯⣯⡳⡽⡋⠌⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢮⣿⣽⣯⠄⠄⢨⣿⣿⡷⡫⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⠙⠝⠂⠄⢘⠋⠃⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄

`);

  continuar("dormir");
  console.clear();
  status.relatorio();
  status.passarDia();
  continuar("Continuar");
  while (true) {
    // DIA 4
    console.clear();
    status.exibirStatus();
    console.log();
    falasAnne(`
  O transito tá caótico hoje, consigo ouvir 
  as buzinas daqui de casa, sem falar do clima que parece que vai chover a qualquer momento.`);
    let resposta = validarPergunta(`
                          [1] PEGAR METRÔ
                          [2] PEGAR ONIBUS
                          [3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log("Você chegou ao trabalho com tempo de sobra.");
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`
      O transito estava horrivel, você chegou atrasado.
      Você foi descontado em R$200
      `);
      status.diminuirDinheiro(200);
      continuar("continuar");
      break;
    } else if (resposta == 3) {
      console.clear();
      resposta = validarPergunta2(`
    São 15km até o seu trabalho, você tem certeza?

                    [1] SIM
                    [2] NÃO`);
      if (resposta == 1) {
        console.clear();
        console.log(`
    Caiu uma chuva no meio do caminho e você teve que esperar passar
    para continuar seu trajeto, você se atrasou`);
        status.diminuirDinheiro(200);
        continuar("continuar");
        break;
      }
    }
  }
  // PRIMEIRO FINAL ALTERNATIVO
  console.clear();
  indoPara("O tribunal");
  continuar("continuar");
  while (true) {
    console.clear();
    console.log(
      Amarelo +
        `
    No Tribunal
    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

Caso Shane Manson, Shane é acusado de homicidio duplo, após ser encontrado com uma faca
ao lado do corpo de sua esposa e filha, Shane já tem diversas passagens e é considerado 
um criminoso altamente perigoso.
` +
        white
    );
    resposta = validarPergunta(`
[1] Ouvir Shane
[2] Ouvir Acusação
[3] Dar um veredito `);
    if (resposta == 1) {
      console.clear();
      console.log(`                Defesa de Shane        
      ⣿⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿
      ⢿⣿⣿⠟⠁⠄⠄⠄⠄⠄⠄⢀⣀⣀⣀⣀⣀⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿
      ⣾⣻⠏⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠄⠄⠄⠄⠄⣿⣿⣿
      ⣿⠏⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⢀⣿⣿⣿
      ⣿⠄⠄⠄⠄⠄⠠⠖⠻⠟⠛⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⣸⣿⣿⣿
      ⣿⠆⠄⠄⠄⠄⢀⣠⣤⡶⠦⣤⣄⠠⣤⣨⣿⣿⣿⡿⠟⠛⠛⠁⠄⢀⣿⣿⣿⣿
      ⡇⣶⡄⠄⠄⣸⣿⣿⣯⣀⣀⣀⣴⣵⣎⣻⣿⣿⣟⠁⠄⡐⠲⠄⣴⣿⣿⣿⣿⣿
      ⡁⣟⠄⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡆⣾⣿⣿⣿⣿⣿⣿
      ⣿⡻⣷⡆⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣽⣶⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿
      ⣽⣿⣶⣆⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⠅⢸⣿⡏⠿⣿⣿⢫⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⠄⠐⠛⣿⣿⣿⡟⠉⡁⠬⢶⣿⣿⣿⣿⠷⠈⣱⣿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⠄⢀⡀⠈⠿⠛⣿⣿⣿⣿⠟⠛⠛⠛⠻⠟⠒⠛⠛⠿⠿⠻⣿⣿⣿⣿
      ⣻⣿⣽⠏⠄⠈⣿⣥⡀⠄⠄⠈⠉⠘⠃⠄⠄⠄⠁⢸⣿⣿⣿⣶⠄⠄⠄⠄⠄⡀
      ⠉⣈⡀⠄⠄⠄⢹⣿⣿⣾⣷⣦⣀⣀⢀⢀⣀⡀⢀⣿⣿⡿⢿⣁⠄⠄⣠⣠⣿⣯
      ⡈⣛⣛⣄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⡾⠛⢁⣴⣿⣿⣦⣾⣿⣿⣿⣿

                        A defesa não deseja se pronunciar...`);
      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`                    Acusação
⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄

O suspeito foi encontrado ao lado de dois corpos, sendo eles de sua mulher e filha,
Shane já passou por esse tribunal diversas vezes e nunca foi considerado inocente
ele nem mesmo diz uma palavra para se defender, está claro que ele é culpado
`);
      continuar("voltar");
    } else {
      console.clear();
      shane = validarPergunta2(`Dar um veredito
[1] Shane é culpado
[2] Shane é inocente
`);
      if (shane == 1) {
        console.clear();
        console.log(`
Foi um caso muito fácil, mas você tomou a decisão certa, esse cara é muito 
perigoso, nós sabemos o quanto ele a gangue dele ameaçam e prometem rios
de dinheiro aos juízes que vão julgar o caso dele`);
        status.aumentarDinheiro(1400);
        continuar("continuar");
        break;
      } else if (shane == 2) {
        console.clear();
        console.log(`
Isso é inacreditavél, uma coisa sem precedentes, está na cara que você foi comprado
isso será investigado!!! Você não sairá impune dessa!!`);
        status.aumentarDinheiro(700);
        continuar("continuar");
        break;
      }
    }
  }
  if (shane == 2) {
    console.clear();
    indoPara("Casa");
    continuar("continuar");
    console.clear();
    console.log(`               Seu telefone está tocando, sem numero...`);
    continuar("Atender");
    console.clear();
    console.log(`Em casa 19:30 dia 4
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠄⠄⠄⠁⠄⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣀⣀⣤⣤⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣤⣄⣀⡀⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⣴⣿⣿⡿⣿⢿⣟⣿⣻⣟⡿⣟⣿⣟⡿⣟⣿⣻⣟⣿⣻⢿⣻⡿⣿⢿⣷⣆⠄⠄⠄
    ⠄⠄⠄⢘⣿⢯⣷⡿⡿⡿⢿⢿⣷⣯⡿⣽⣞⣷⣻⢯⣷⣻⣾⡿⡿⢿⢿⢿⢯⣟⣞⡮⡀⠄⠄  ${green} Anônimo: ${white} HAHAHA, eu sabia que você não ia deixar passar essa oportunidade,
    ⠄⠄⠄⢸⢞⠟⠃⣉⢉⠉⠉⠓⠫⢿⣿⣷⢷⣻⣞⣿⣾⡟⠽⠚⠊⠉⠉⠉⠙⠻⣞⢵⠂⠄⠄  você fez a sua parte no trato, chegou a hora de fazer a minha, leve a sua familia para
    ⠄⠄⠄⢜⢯⣺⢿⣻⣿⣿⣷⣔⡄⠄⠈⠛⣿⣿⡾⠋⠁⠄⠄⣄⣶⣾⣿⡿⣿⡳⡌⡗⡅⠄⠄  o aeroporto mais próximo e irei entregar tudo que eu prometi.
    ⠄⠄⠄⢽⢱⢳⢹⡪⡞⠮⠯⢯⡻⡬⡐⢨⢿⣿⣿⢀⠐⡥⣻⡻⠯⡳⢳⢹⢜⢜⢜⢎⠆⠄⠄
    ⠄⠄⠠⣻⢌⠘⠌⡂⠈⠁⠉⠁⠘⠑⢧⣕⣿⣿⣿⢤⡪⠚⠂⠈⠁⠁⠁⠂⡑⠡⡈⢮⠅⠄⠄
    ⠄⠄⠠⣳⣿⣿⣽⣭⣶⣶⣶⣶⣶⣺⣟⣾⣻⣿⣯⢯⢿⣳⣶⣶⣶⣖⣶⣮⣭⣷⣽⣗⠍⠄⠄
    ⠄⠄⢀⢻⡿⡿⣟⣿⣻⣽⣟⣿⢯⣟⣞⡷⣿⣿⣯⢿⢽⢯⣿⣻⣟⣿⣻⣟⣿⣻⢿⣿⢀⠄⠄
    ⠄⠄⠄⡑⡏⠯⡯⡳⡯⣗⢯⢟⡽⣗⣯⣟⣿⣿⣾⣫⢿⣽⠾⡽⣺⢳⡫⡞⡗⡝⢕⠕⠄⠄⠄
    ⠄⠄⠄⢂⡎⠅⡃⢇⠇⠇⣃⣧⡺⡻⡳⡫⣿⡿⣟⠞⠽⠯⢧⣅⣃⠣⠱⡑⡑⠨⢐⢌⠂⠄⠄
    ⠄⠄⠄⠐⠼⣦⢀⠄⣶⣿⢿⣿⣧⣄⡌⠂⠢⠩⠂⠑⣁⣅⣾⢿⣟⣷⠦⠄⠄⡤⡇⡪⠄⠄⠄
    ⠄⠄⠄⠄⠨⢻⣧⡅⡈⠛⠿⠿⠿⠛⠁⠄⢀⡀⠄⠄⠘⠻⠿⠿⠯⠓⠁⢠⣱⡿⢑⠄⠄⠄⠄
    ⠄⠄⠄⠄⠈⢌⢿⣷⡐⠤⣀⣀⣂⣀⢀⢀⡓⠝⡂⡀⢀⢀⢀⣀⣀⠤⢊⣼⡟⡡⡁⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠈⢢⠚⣿⣄⠈⠉⠛⠛⠟⠿⠿⠟⠿⠻⠻⠛⠛⠉⠄⣠⠾⢑⠰⠈⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠑⢌⠿⣦⡡⣱⣸⣸⣆⠄⠄⠄⣰⣕⢔⢔⠡⣼⠞⡡⠁⠁⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠑⢝⢷⣕⡷⣿⡿⠄⠄⠠⣿⣯⣯⡳⡽⡋⠌⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢮⣿⣽⣯⠄⠄⢨⣿⣿⡷⡫⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⠙⠝⠂⠄⢘⠋⠃⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
`);
    continuar("continuar");
    console.clear();
    console.log(`
Você entra em casa fala com a sua esposa e filho e pede que ela arrume a mala urgente...`);
    continuar("continuar");
    console.clear();
    console.log(`
Vocês pegam um ônibus em direção ao aeroporto`);
    continuar("continuar");
    console.clear();
    console.log(`
Vocês conseguem chegar ao aeroporto mas ninguem aparece para te dar nada, nenhuma
transferência, nenhum passaporte, nenhuma passagem.
você espera por mais 3 horas com a sua familia no aeroporto até que:

Seu telefone toca, sem nome...`);
    continuar("Atender");
    console.clear();
    console.log(`Em casa 23:43 dia 3

    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠄⠄⠄⠁⠄⠁⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⣀⣀⣤⣤⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣤⣄⣀⡀⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⣴⣿⣿⡿⣿⢿⣟⣿⣻⣟⡿⣟⣿⣟⡿⣟⣿⣻⣟⣿⣻⢿⣻⡿⣿⢿⣷⣆⠄⠄⠄
    ⠄⠄⠄⢘⣿⢯⣷⡿⡿⡿⢿⢿⣷⣯⡿⣽⣞⣷⣻⢯⣷⣻⣾⡿⡿⢿⢿⢿⢯⣟⣞⡮⡀⠄⠄   ${green} Anônimo: ${white} Olá juiz, o que não fazemos pela nossa familia, não é?
    ⠄⠄⠄⢸⢞⠟⠃⣉⢉⠉⠉⠓⠫⢿⣿⣷⢷⣻⣞⣿⣾⡟⠽⠚⠊⠉⠉⠉⠙⠻⣞⢵⠂⠄⠄   infelizmente nem sempre fazemos a escolha certa, as coisa não são tão faceis
    ⠄⠄⠄⢜⢯⣺⢿⣻⣿⣿⣷⣔⡄⠄⠈⠛⣿⣿⡾⠋⠁⠄⠄⣄⣶⣾⣿⡿⣿⡳⡌⡗⡅⠄⠄   assim, espero que não leve para o lado pessoal, afinal de conta somos iguais.
    ⠄⠄⠄⢽⢱⢳⢹⡪⡞⠮⠯⢯⡻⡬⡐⢨⢿⣿⣿⢀⠐⡥⣻⡻⠯⡳⢳⢹⢜⢜⢜⢎⠆⠄⠄   bandidos corrompidos pelo dinheiro. Boa sorte!
    ⠄⠄⠠⣻⢌⠘⠌⡂⠈⠁⠉⠁⠘⠑⢧⣕⣿⣿⣿⢤⡪⠚⠂⠈⠁⠁⠁⠂⡑⠡⡈⢮⠅⠄⠄
    ⠄⠄⠠⣳⣿⣿⣽⣭⣶⣶⣶⣶⣶⣺⣟⣾⣻⣿⣯⢯⢿⣳⣶⣶⣶⣖⣶⣮⣭⣷⣽⣗⠍⠄⠄
    ⠄⠄⢀⢻⡿⡿⣟⣿⣻⣽⣟⣿⢯⣟⣞⡷⣿⣿⣯⢿⢽⢯⣿⣻⣟⣿⣻⣟⣿⣻⢿⣿⢀⠄⠄
    ⠄⠄⠄⡑⡏⠯⡯⡳⡯⣗⢯⢟⡽⣗⣯⣟⣿⣿⣾⣫⢿⣽⠾⡽⣺⢳⡫⡞⡗⡝⢕⠕⠄⠄⠄
    ⠄⠄⠄⢂⡎⠅⡃⢇⠇⠇⣃⣧⡺⡻⡳⡫⣿⡿⣟⠞⠽⠯⢧⣅⣃⠣⠱⡑⡑⠨⢐⢌⠂⠄⠄
    ⠄⠄⠄⠐⠼⣦⢀⠄⣶⣿⢿⣿⣧⣄⡌⠂⠢⠩⠂⠑⣁⣅⣾⢿⣟⣷⠦⠄⠄⡤⡇⡪⠄⠄⠄
    ⠄⠄⠄⠄⠨⢻⣧⡅⡈⠛⠿⠿⠿⠛⠁⠄⢀⡀⠄⠄⠘⠻⠿⠿⠯⠓⠁⢠⣱⡿⢑⠄⠄⠄⠄
    ⠄⠄⠄⠄⠈⢌⢿⣷⡐⠤⣀⣀⣂⣀⢀⢀⡓⠝⡂⡀⢀⢀⢀⣀⣀⠤⢊⣼⡟⡡⡁⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠈⢢⠚⣿⣄⠈⠉⠛⠛⠟⠿⠿⠟⠿⠻⠻⠛⠛⠉⠄⣠⠾⢑⠰⠈⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠑⢌⠿⣦⡡⣱⣸⣸⣆⠄⠄⠄⣰⣕⢔⢔⠡⣼⠞⡡⠁⠁⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠑⢝⢷⣕⡷⣿⡿⠄⠄⠠⣿⣯⣯⡳⡽⡋⠌⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⢮⣿⣽⣯⠄⠄⢨⣿⣿⡷⡫⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⠙⠝⠂⠄⢘⠋⠃⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄   

`);
    continuar("continuar");
    console.clear();
    console.log(`
não houve transferência, eles não cumpriram a parte deles do acordo`);
    continuar("continuar");
    console.clear();
    console.log(`
Você foi preso por conspiração contra corte do seu país, infelizmente sua familia
vai ter que lidar com a sua divida, nada de bom vai acontecer com eles.

O corrupto sempre vai se achar o mais esperto... até ser pego.`);
    continuar("continuar");
    console.clear();
    let jogarNovamente = validarPergunta2(`Você deseja Jogar novamente?
[1] Sim
[2] Não
`);

    if (jogarNovamente == 1) {
      status.dinheiro = 250;
      status.familia = 50;
      status.estresse = 50;
      status.dia = 1;
      continue;
    } else {
      console.log(
        red +
          `
          ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
          ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
          ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
          ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
          ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
           ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝
      `
      );
      break;
    }
  } else {
    console.clear();
    indoPara("Casa");
    continuar("continuar");
    console.clear();
    status.exibirStatus();
    falasAnne(`
    Oi querido, como foi o seu dia hoje ?`);
    resposta = validarPergunta2(`
[1] Contar sobre Shane
[2] Foi tranquilo, mais um caso pequeno
`);
    if (resposta == 1) {
      console.clear();
      falasAnne(`
nossa, então você teve um dia muito cheio, que bom
que você tomou a decisão correta, nós estamos orgulhosos de você`);
      status.aumentarFamilia(15);
      status.diminuirEstresse(10);
      continuar(`continuar`);
    } else if (resposta == 2) {
      console.clear();
      falasAnne(`
    Engraçado, vi na tv hoje que um criminoso muito perigoso
    iria ao seu tribunal, mas aparentemente você não compartilha mais as coisas comigo. `);
      status.diminuirFamilia(10);
      status.aumentarEstresse(10);
      continuar("continuar");
    }
  }
  console.clear();
  status.exibirStatus();
  console.log(`Em casa 23:25

você ouve uma tosse vindo da sua cozinha, é Anne, ela parece engasgada com alguma coisa...
ela está muito vermelha e você precisa ajudar ela, mas como você fará isso?
`);
  resposta = validarPergunta2(`
[1] Segurar Anne pelas costas e apertar acima do abdomén puxando para cima
[2] Enfiar o dedo na garganta dela e puxar o que esteja obstruindo-a
`);
  if (resposta == 1) {
    console.clear();
    console.log(`
Que ótmio, Anne cuspiu longe um pedaço de carne e voltou a respirar tranquilamente`);
    falasAnne(`
Obrigado querido, ainda bem que você estava em casa, 
parece que aquele curso de primeiros socorros foi muito util no final das contas.`);
    status.aumentarFamilia(10);
    continuar("continuar");
  } else {
    console.clear();
    console.log(`
    Parece que não surtiu efeito, você ligou para a emergência e eles chegaram para ajudar anne
    ela vai precisar ficar sob cuidados médicos essa noite, você arcou com os custos.
    `);
    status.diminuirFamilia(10);
    status.diminuirDinheiro(600);
    continuar("continuar");
  }
  console.clear();
  console.log(`Final do dia 4`);
  status.relatorio();
  status.passarDia();
  continuar("continuar");
  console.clear();
  while (true) {
    // dia 5
    console.clear();
    status.exibirStatus();
    console.log();
    falasAnne(`
  Hoje está muito frio, fazia tempo que eu não
  sentia tanto frio assim, parece que as ruas estão alagadas, melhor não esquecer o
  guarda chuva, Não quero que fique resfriado.`);
    let resposta = validarPergunta(`
                          [1] PEGAR METRÔ
                          [2] PEGAR ONIBUS
                          [3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log(
        "O metrô estava lotado, parece que todos tiveram a mesma ideia"
      );
      status.aumentarEstresse(5);
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`
      Apesar do engarrafamento você chegou a tempo no seu trabalho, isso é bom.
      `);
      continuar("continuar");
      break;
    } else if (resposta == 3) {
      console.clear();
      resposta = validarPergunta2(`
    São 15km até o seu trabalho, você tem certeza?

                    [1] SIM
                    [2] NÃO`);
      if (resposta == 1) {
        console.clear();
        console.log(
          `Muita chuva, você não conseguiu nem sair da sua rua até que a chuva
        passasse, chegou atrasado ao trabalho`
        );
        status.diminuirDinheiro(250);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("O tribunal");
  continuar("continuar");
  while (true) {
    console.clear();
    console.log(
      Amarelo +
        `No Tribunal
    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

Caso Antonio Gutierrez, Antonio está sendo acusado de furto por seu proprio pai,
um quadro de alto valor foi furtado da residência Gutierrez na manhã do dia 
27 de janeiro de 2022, o pai afirma que Antonio, foi a unica pessoa a entrar e
sair da residência apenas um dia antes do seu pai notar o sumisso do quadro
` +
        white
    );
    resposta = validarPergunta(`
[1] Ouvir Antonio
[2] Ouvir Gerrad (o pai)
[3] Dar um veredito `);
    if (resposta == 1) {
      console.clear();
      console.log(`                Defesa de Antônio Gutierrez      
  
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⠄⢠⣾⣷⣔⣄⠄⠄⠄⠄⠄⡀⣀⣼⣿⣷⣄⠄⠄⠹⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠄⢠⣿⣿⣿⣿⣿⣿⣷⣄⣤⣾⣿⣿⣿⣿⣿⣿⣧⠄⠄⢿⣿⣿⣿⣿
⣿⣿⣿⣏⠄⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⠄⣿⠿⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⣿⣧⠄⠘⣿⣿⣿⣿
⣿⣿⣿⣿⡄⣯⡀⠄⠄⠄⠄⠉⢻⣿⣟⠉⠄⠄⠄⠄⠄⠤⣼⣿⠄⢻⣿⣿⣿⣿
⣿⣿⣿⣿⣧⣿⣶⣄⠼⠶⣖⣶⣼⣿⣿⣾⣶⣔⣀⣓⣦⣿⣿⣿⢺⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢹⣿⣿⣿⠿⠋⣾⣿⣿⣿⣿⣷⣎⡛⢿⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣇⢪⣄⣤⠄⠐⠈⠙⠛⠛⠉⠄⠉⠛⠢⣽⣾⡿⠄⠘⡹⠿⣿⣿⣿
⣿⣿⣿⣿⣿⡷⠈⠹⣧⣀⣠⡤⠴⠶⠶⠶⢦⣴⣤⣤⣿⠃⠁⢠⣮⡟⢰⣿⢟⣽
⣿⢙⢮⣻⣿⡁⠄⠄⠉⠙⢿⣿⣦⡀⡀⣀⣼⣿⡿⢻⠂⠄⢠⣿⣿⢁⣿⢃⣿⣿
⣦⡐⣼⣿⣿⣧⠄⡗⣄⡀⠈⠙⠛⠛⠚⠛⠋⠋⠄⢀⠄⣠⣿⣿⣿⡿⣱⣿⣿⣿

 Antonio disse que passou na residência aquela noite apenas para pegar suas luvas de boxe
 e que na mesma noite encontrou a porta aberta ao entrar a residência, quando lembrou que
 seu pai viajou pensou em comunicar a policia mas devido a natureza do seu relacionamento com
 o seu pai, optou por apenas sair da casa, segundo Antonio ele sabia que seu pai o acusaria
 pois o mesmo havia negado um empréstimo de R$12.000 reais na semana anterior.`);
      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`                    Gerrad Gutierrez (O pai)

      ⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⡀⠄⡀⠄⡀⢀⠄⡀⢀⠄⡀⠄⡀⠄⠄⠄⠄⢀⠄⠄⡀⢀⠄⠄⡀⠄⠄⠄⠄
      ⠄⠄⠄⠈⠄⠁⠈⠄⠂⠄⡀⠄⠄⡀⢀⠄⢀⠄⢀⠄⡀⠠⠄⠄⠂⠁⠈⡀⠄⠄⠁⠄⠄⠄⠂⠄⡀⠁⠄⠄
      ⠄⠄⠄⠁⠄⠁⠄⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⡀⡀⠄⠄⠁⢀⢁⠄⡀⠠⠄⠁⡈⢀⠈⢀⠠⠄⢀⠄⠄
      ⠄⠄⠄⠄⠁⠄⠁⠄⠂⠄⡠⣲⢧⣳⡳⡯⣟⣼⢽⣺⣜⡵⣝⢜⢔⠔⡅⢂⠄⠄⠁⠄⢀⠄⡀⠄⡀⠄⠄⠄
      ⠄⠄⠄⠄⠈⠄⠈⠄⢀⡇⡯⡺⢵⣳⢿⣻⣟⣿⣿⣽⢾⣝⢮⡳⣣⢣⠣⡃⢅⠂⠐⠈⠄⠄⢀⠄⡀⠄⠄⠄
      ⠄⠄⠄⠄⠈⠄⠐⢀⠇⡪⡸⡸⣝⣾⣻⣯⣿⣿⡿⣟⣿⡽⣗⡯⣞⢜⢌⠢⡡⢈⠈⠄⠁⠈⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠐⠄⠈⠆⠕⢔⠡⣓⣕⢷⣻⣽⣝⢷⣻⣻⣝⢯⢿⠹⠸⡑⡅⠕⠠⠠⠄⠅⠄⠂⠄⠂⠈⠄⠄⠄
      ⠄⠄⠄⠄⠄⠂⠡⡑⢍⠌⡊⢢⢢⢱⠼⣺⢿⢝⠮⢪⣪⡺⣘⡜⣑⢤⢐⠅⠡⢂⠡⠐⡀⢀⠠⠐⠄⠐⠄⠄
      ⠄⠄⠄⠄⢈⢀⠡⠨⡢⡑⡌⡔⡮⡷⣭⢧⣳⠭⣪⣲⣼⣾⣟⣻⣽⣺⣸⣜⢌⢆⢌⠐⠄⡀⠄⡀⠄⠄⠄⠄  
      ⠄⠄⠄⠄⠄⠠⠄⠌⡢⡵⠺⠞⠟⠛⠯⠟⠟⠝⡫⢗⠟⠝⠙⠉⠊⠑⠉⠉⠉⠑⢒⠠⠁⠄⡀⠠⠄⠄⠄⠄
      ⠄⠄⠄⠐⡀⠄⠄⠅⡪⠄⠂⠄⠄⠄⠄⠄⠄⠄⢀⢕⢔⠄⠄⠄⠄⡀⠠⠐⠈⢀⠄⠠⠄⡁⠄⡀⠂⠠⠄⠄
      ⠄⠄⠄⠠⠄⠄⠂⡑⠄⠄⠠⠐⠄⠁⠄⠁⠄⠄⢸⣿⣿⡂⠄⠄⢀⠄⡀⠄⠂⠠⠐⠄⡐⡀⠂⢀⠐⠄⠄⠄
      ⠄⠄⠄⠄⢐⠄⠂⢕⢅⢄⠄⣀⡀⢄⠄⠁⣀⣔⡵⣿⣯⠧⡣⣢⡠⢀⢀⡠⠐⢀⢐⠠⢀⠐⠄⠄⠄⠄⠄⠄
      ⠄⠄⠄⠄⠐⡔⢀⠘⢽⣻⣶⣥⣉⠥⡣⣱⣷⠻⣪⣻⣷⡣⡣⢫⣞⣗⡦⡵⢻⠺⡸⠐⡀⠐⠄⠂⡀⠄⠄⠄
      ⠄⠄⠄⠄⠂⠘⡀⠔⢀⠑⠍⠍⡽⣽⣿⣻⠂⡷⣯⡿⣟⡿⠌⡆⠘⣾⣻⢵⢕⠔⢀⠁⠠⠈⡀⠁⠄⡀⠄⠄
      ⠄⠄⠄⠄⠠⠄⠄⡐⢰⢈⢄⠱⢽⣺⢳⠁⣈⠄⠄⠈⠊⠈⠄⠄⢡⣐⢫⢯⡢⢊⢄⢪⠨⠠⠄⡀⠁⠄⠄⠄
      ⠄⠄⠄⠄⠂⠄⠂⠠⠱⣕⡣⡇⡏⢮⢕⣸⣾⠠⠄⠄⠄⠂⠄⠄⠌⢟⣜⡵⣯⢷⡴⡅⠅⡂⠠⠄⢈⠄⠄⠄
      ⠄⠄⠄⠄⠂⠁⢀⠈⠌⡪⢝⢾⣝⣎⠒⠏⠙⠠⠑⠁⠆⠒⠐⠐⠉⢀⠑⣍⡿⣽⡽⡂⠕⠄⠄⠂⢀⠠⠄⠄
      ⠄⠄⠄⠐⠄⡈⠄⢀⠄⠊⠍⢯⣷⣏⢊⢀⣈⣠⣤⣤⣤⣴⣶⢶⣴⢤⢬⣌⢻⡺⡻⠈⠄⠂⠄⠂⡀⠄⠄⠄
      ⠄⠄⠄⠄⠂⢀⠐⠄⠄⠂⠡⠑⠕⠅⡕⡽⡑⡁⠉⠉⠉⠉⠁⠁⠁⠠⢊⠊⠢⠈⠄⠨⠄⠄⠁⠐⢀⠈⠄⠄
      ⠄⠄⠄⠈⢀⠄⠄⠈⡀⢂⠐⠄⠂⠁⠠⠁⡢⡪⣢⣲⣦⣖⡔⡤⡨⡐⢄⠌⠠⠈⠐⠄⠂⠠⠁⢈⠠⠄⠄⠄
      ⠄⠄⠄⠄⠄⠄⠄⢂⠄⠢⠂⠈⡀⠈⡀⠈⠰⠹⡨⠑⡑⠕⠕⠊⠌⠌⠄⠐⠄⠂⠁⢈⠄⡁⠐⠄⡐⢀⠂⠄
      ⠄⠄⠄⠄⡐⢄⠑⠄⠄⡇⡁⠄⠄⠄⠄⡈⠄⠄⠄⠄⢀⠠⠄⠂⢀⠐⠄⡈⠠⠈⠄⠄⠠⠐⠄⠁⠠⠄⠄⠄
      ⠄⠄⡀⢊⠨⢀⢊⠄⠨⡂⡂⠄⠂⠄⢀⠄⠠⠄⠂⠄⠄⡀⠠⠄⠄⠄⠐⠄⠄⡀⠁⡀⠂⠄⠂⠁⠨⠄⠅⠄
      ⠄⠄⠐⠄⢂⠢⡀⠄⠬⠄⠂⠅⡀⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠂⠄⠂⠄⢀⠄⠄⠄⠄⠂⠄⠂⢈⠐⠄⠄
      ⠄⠄⠈⡀⠄⠄⠄⠄⠅⠅⠐⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠄⠄⠄⠂⢐⠄⠐⠄
      ⠄⠄⠄⠄⠄⠂⠄⠄⠕⠈⡂⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠄⠄⠂⠄

Gerrad afirma que o Antonio fez isso por vingança, pois ele se negou a emprestar mais
dinheiro a Antonio, segundo Gerrad o filho passava por problemas financerios devido ao seu
vicio em apostas, Gerrad diz que desde que seu filho saiu de sua casa vive em cassinos,
apostando até perder tudo. Gerrad diz também que as cameras de segurança do portão da frente 
registraram a saída e entrada de Antonio com uma mochila, mas que o quadro não fora encontrado
na casa de Antonio pelas autoridades, apenas a mochila vazia.  
`);
      continuar("voltar");
    } else {
      console.clear();
      resposta = validarPergunta2(`Dar um veredito
[1] Antonio Gutierrez é culpado
[2] Antonio Gutierrez é inocente
`);
      if (resposta == 1) {
        console.clear();
        console.log(`
É uma relação muito complicada de um pai com o filho, mas devido ao seu vicio em apostas
ficou dificil considerar que Antonio é inocente, você fez o seu trabalho, decidiu o mais
lógico dentro das circunstâncias apresentadas.`);
        status.aumentarDinheiro(1400);
        continuar("continuar");
        break;
      } else if (resposta == 2) {
        console.clear();
        console.log(`
Você deveria considerar o vicio em apostas de Antonio, o fato dele ter sido o unico a
entrar e sair daquela casa naquela noite é muito suspeito, bom, não acho que você agiu 
pela lógica, deixou as emoções afetarem o seu veredito
`);

        status.aumentarDinheiro(700);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("casa");
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  console.log(`          seu celular está tocando... é Joseph
`);
  continuar(`atender`);
  console.clear();
  console.log(
    green +
      `
      ⠁⡼⠋⠀⣆⠀⠀⣰⣿⣫⣾⢿⣿⣿⠍⢠⠠⠀⠀⢀⠰⢾⣺⣻⣿⣿⣿⣷⡀⠀
      ⣥⠀⠀⠀⠁⠀⠠⢻⢬⠁⣠⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠐⠱⠏⡉⠙⣿⣿⡇⠀
      ⢳⠀⢰⡖⠀⠀⠈⠀⣺⢰⣿⢻⣾⣶⣿⣿⣶⣶⣤⣤⣴⣾⣿⣷⣼⡆⢸⣿⣧⠀
      ⠈⠀⠜⠈⣀⣔⣦⢨⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⣼⠛⢹⠀
      ⠀⠀⠀⠀⢋⡿⡿⣯⣭⡟⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡘⠀
      ⡀⠐⠀⠀⠀⣿⣯⡿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣉⢽⣿⡆⠀⠀
      ⢳⠀⠄⠀⢀⣿⣿⣿⣿⣿⣿⣿⠙⠉⠉⠉⠛⣻⢛⣿⠛⠃⠀⠐⠛⠻⣿⡇⠀⠀
      ⣾⠄⠀⠀⢸⣿⣿⡿⠟⠛⠁⢀⠀⢀⡄⣀⣠⣾⣿⣿⡠⣴⣎⣀⣠⣠⣿⡇⠀⠀
      ⣧⠀⣴⣄⣽⣿⣿⣿⣶⣶⣖⣶⣬⣾⣿⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡇⠀⠀
      ⣿⣶⣈⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⢧⣿⣿⣿⣄⠙⢿⣿⣿⣿⠇⠀⠀
      ⠹⣿⣿⣧⢌⢽⣻⢿⣯⣿⣿⣿⣿⠟⣠⡘⠿⠟⠛⠛⠟⠛⣧⡈⠻⣾⣿⠀⠀⠀
      ⠀⠈⠉⣷⡿⣽⠶⡾⢿⣿⣿⣿⢃⣤⣿⣷⣤⣤⣄⣄⣠⣼⡿⢷⢀⣿⡏⠀⠀⠀
      ⠀⠀⢀⣿⣷⠌⣈⣏⣝⠽⡿⣷⣾⣏⣀⣉⣉⣀⣀⣀⣠⣠⣄⡸⣾⣿⠃⠀⠀⠀
      ⠀⣰⡿⣿⣧⡐⠄⠱⣿⣺⣽⢟⣿⣿⢿⣿⣍⠉⢀⣀⣐⣼⣯⡗⠟⡏⠀⠀⠀⠀
      ⣰⣿⠀⣿⣿⣴⡀⠂⠘⢹⣭⡂⡚⠿⢿⣿⣿⣿⡿⢿⢿⡿⠿⢁⣴⣿⣷⣶⣦⣤

Joseph(Irmão de Anne): ${white} Oi Jones, apareceu mais uma coisa por aqui, um pouco mais
arriscado dessa vez mas o pagamento compensa, tem uma lata velha abandonada em um bairro
perigoso, vamos lá pegar, vai dar uma grana, o que acha ?`
  );
  resposta = validarPergunta2(`
[1] Ir com Joseph
[2] Continuar em casa com Anne
`);
  if (resposta == 1) {
    // PRIMEIRO IF
    console.clear();
    indoPara(`Bairro perigoso`);
    continuar("continuar");
    console.clear();
    console.log(`O carro é abordado por 3 homens em um semáforo.
    
${green}
⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⣿
⣿⣿⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿
⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⢀⠄⣀⠄⠄⠄⠄⠄⣼⣿
⠇⠄⠄⠄⠄⠄⢀⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⢺⣿
⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠄⢸⣿
⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿
⠄⠄⠄⢀⣾⣿⣿⣿⡿⠟⠛⠛⠻⣿⣿⡿⠛⠉⠄⠉⠉⣻⣾⣿
⡆⠄⠄⢸⣿⣿⣿⡟⢀⠔⠒⡀⠄⣸⣿⣷⡄⡈⢉⠁⣠⣿⣹⣿
⣿⣀⠄⠄⣿⣿⣿⣦⣄⡒⢚⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿
⣟⢉⡵⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣼⣦⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⠩⠁⡄⣸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠝⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣀⡀⠄⠙⢿⣿⣿⣿⣿
⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿⣿⢋⣀⣤⣤⣤⣤⣤⣼⣿⣿⢻⣿
⡿⠿⠛⠛⣷⠈⠻⢿⣿⣿⣿⣯⣿⣿⣏⡀⢀⣹⣿⠙⠟⠄⣼⣿
⠄⠄⠄⠄⣿⣧⡀⠄⠈⠉⠛⠻⠻⣿⣿⣿⣿⡿⡟⠄⠄⣼⣿⣿
⠄⠄⠄⠄⢸⣿⣿⣄⠄⠄⠄⠄⠄⠈⠉⠉⠄⠄⠄⠄⠄⠉⠿⣿
⠄⠄⠄⠄⠄⢻⣿⣿⣷⣆⡀⠄⠄⠄⠄⠄⠄⠄⣴⡇⠄⠄⠄⠈

Homem armado: ${white} Vocês moram por aqui?
    `);
    resposta = validarPergunta2(`
    [1] Sim, nos moramos aqui perto
    [2] Não, viemos só buscar uma coisa
    `);
    if (resposta == 1) {
      // SEGUNDO IF
      while (true) {
        console.clear();
        console.log(`${green}
        ⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⣿⣿⣿⣿
        ⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⣿
        ⣿⣿⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿
        ⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⢀⠄⣀⠄⠄⠄⠄⠄⣼⣿
        ⠇⠄⠄⠄⠄⠄⢀⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⢺⣿
        ⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠄⢸⣿
        ⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿
        ⠄⠄⠄⢀⣾⣿⣿⣿⡿⠟⠛⠛⠻⣿⣿⡿⠛⠉⠄⠉⠉⣻⣾⣿
        ⡆⠄⠄⢸⣿⣿⣿⡟⢀⠔⠒⡀⠄⣸⣿⣷⡄⡈⢉⠁⣠⣿⣹⣿
        ⣿⣀⠄⠄⣿⣿⣿⣦⣄⡒⢚⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿
        ⣟⢉⡵⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣼⣦⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⠩⠁⡄⣸⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⠝⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣀⡀⠄⠙⢿⣿⣿⣿⣿
        ⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿⣿⢋⣀⣤⣤⣤⣤⣤⣼⣿⣿⢻⣿
        ⡿⠿⠛⠛⣷⠈⠻⢿⣿⣿⣿⣯⣿⣿⣏⡀⢀⣹⣿⠙⠟⠄⣼⣿
        ⠄⠄⠄⠄⣿⣧⡀⠄⠈⠉⠛⠻⠻⣿⣿⣿⣿⡿⡟⠄⠄⣼⣿⣿
        ⠄⠄⠄⠄⢸⣿⣿⣄⠄⠄⠄⠄⠄⠈⠉⠉⠄⠄⠄⠄⠄⠉⠿⣿
        ⠄⠄⠄⠄⠄⢻⣿⣿⣷⣆⡀⠄⠄⠄⠄⠄⠄⠄⣴⡇⠄⠄⠄⠈

    Homem armado: ${white} Então vocês sabem que temos um toque de recolher a noite e que
    não deveriam estar aqui, ou vocês estão tentando me enganar, se vocês moram aqui
    sabem o nome da nossa gangue, certo? me digam, qual é e deixo vocês irem `);
        resposta = validarPergunta(`
    [1] Analisar Homem armado
    [2] Analisar Bairro
    [3] Responder
    `);
        if (resposta == 1) {
          console.clear();
          console.log(`Analisando homem armado.

        Ele está sem camisa em uma noite fria, no seu braço tem a tatuagem de um morcego,
        mas um morcego que está em chamas.
        `);

          continuar("voltar");
        } else if (resposta == 2) {
          console.clear();
          console.log(`Analisando o muro a sua direita, dá pra ver algo parecido com um tridente
    e em volta do tridente há muito fogo, parece que eles gostam de fogo.
    `);
          continuar("voltar");
        } else {
          console.clear();
          resposta = validarPergunta(`Diga o nome da gangue:
        [1] Morcegos flamejantes
        [2] Morcegos do inferno
        [3] Morcegos que pegam fogo`);
          if (resposta == 2) {
            // TERCEIRO IF
            console.clear();
            console.log(`
⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⣿
⣿⣿⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿
⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⢀⠄⣀⠄⠄⠄⠄⠄⣼⣿
⠇⠄⠄⠄⠄⠄⢀⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⢺⣿
⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠄⢸⣿
⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿
⠄⠄⠄⢀⣾⣿⣿⣿⡿⠟⠛⠛⠻⣿⣿⡿⠛⠉⠄⠉⠉⣻⣾⣿
⡆⠄⠄⢸⣿⣿⣿⡟⢀⠔⠒⡀⠄⣸⣿⣷⡄⡈⢉⠁⣠⣿⣹⣿
⣿⣀⠄⠄⣿⣿⣿⣦⣄⡒⢚⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿
⣟⢉⡵⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣼⣦⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⠩⠁⡄⣸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠝⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣀⡀⠄⠙⢿⣿⣿⣿⣿
⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿⣿⢋⣀⣤⣤⣤⣤⣤⣼⣿⣿⢻⣿
⡿⠿⠛⠛⣷⠈⠻⢿⣿⣿⣿⣯⣿⣿⣏⡀⢀⣹⣿⠙⠟⠄⣼⣿
⠄⠄⠄⠄⣿⣧⡀⠄⠈⠉⠛⠻⠻⣿⣿⣿⣿⡿⡟⠄⠄⣼⣿⣿
⠄⠄⠄⠄⢸⣿⣿⣄⠄⠄⠄⠄⠄⠈⠉⠉⠄⠄⠄⠄⠄⠉⠿⣿
⠄⠄⠄⠄⠄⢻⣿⣿⣷⣆⡀⠄⠄⠄⠄⠄⠄⠄⣴⡇⠄⠄⠄⠈

        ${green} Homem armado: ${white} Tudo bem, deixem-o passar.`);
            continuar("continuar");
            console.clear();
            console.log(`${green}
            ⠁⡼⠋⠀⣆⠀⠀⣰⣿⣫⣾⢿⣿⣿⠍⢠⠠⠀⠀⢀⠰⢾⣺⣻⣿⣿⣿⣷⡀⠀
            ⣥⠀⠀⠀⠁⠀⠠⢻⢬⠁⣠⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠐⠱⠏⡉⠙⣿⣿⡇⠀
            ⢳⠀⢰⡖⠀⠀⠈⠀⣺⢰⣿⢻⣾⣶⣿⣿⣶⣶⣤⣤⣴⣾⣿⣷⣼⡆⢸⣿⣧⠀
            ⠈⠀⠜⠈⣀⣔⣦⢨⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⣼⠛⢹⠀
            ⠀⠀⠀⠀⢋⡿⡿⣯⣭⡟⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡘⠀
            ⡀⠐⠀⠀⠀⣿⣯⡿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣉⢽⣿⡆⠀⠀
            ⢳⠀⠄⠀⢀⣿⣿⣿⣿⣿⣿⣿⠙⠉⠉⠉⠛⣻⢛⣿⠛⠃⠀⠐⠛⠻⣿⡇⠀⠀
            ⣾⠄⠀⠀⢸⣿⣿⡿⠟⠛⠁⢀⠀⢀⡄⣀⣠⣾⣿⣿⡠⣴⣎⣀⣠⣠⣿⡇⠀⠀
            ⣧⠀⣴⣄⣽⣿⣿⣿⣶⣶⣖⣶⣬⣾⣿⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡇⠀⠀
            ⣿⣶⣈⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⢧⣿⣿⣿⣄⠙⢿⣿⣿⣿⠇⠀⠀
            ⠹⣿⣿⣧⢌⢽⣻⢿⣯⣿⣿⣿⣿⠟⣠⡘⠿⠟⠛⠛⠟⠛⣧⡈⠻⣾⣿⠀⠀⠀
            ⠀⠈⠉⣷⡿⣽⠶⡾⢿⣿⣿⣿⢃⣤⣿⣷⣤⣤⣄⣄⣠⣼⡿⢷⢀⣿⡏⠀⠀⠀
            ⠀⠀⢀⣿⣷⠌⣈⣏⣝⠽⡿⣷⣾⣏⣀⣉⣉⣀⣀⣀⣠⣠⣄⡸⣾⣿⠃⠀⠀⠀
            ⠀⣰⡿⣿⣧⡐⠄⠱⣿⣺⣽⢟⣿⣿⢿⣿⣍⠉⢀⣀⣐⣼⣯⡗⠟⡏⠀⠀⠀⠀
            ⣰⣿⠀⣿⣿⣴⡀⠂⠘⢹⣭⡂⡚⠿⢿⣿⣿⣿⡿⢿⢿⡿⠿⢁⣴⣿⣷⣶⣦⣤

Joseph(irmão de Anne) ${white}Caraca, como você sabia o nome da gangue deles?
eu não fazia ideia, você salvou a gente`);
            continuar("continuar");
            console.clear();
            console.log(`
Você e Joseph encontram o carro, guincham ele e levam para o ferro
velho, Joseph te dá metade dos ganhos e você vai para casa para dormir`);
            status.aumentarDinheiro(1000);
            continuar("Dormir");
            break;
          } else {
            console.clear();
            console.log(`${green} 
            ⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⣿⣿⣿⣿
            ⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⣿
            ⣿⣿⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿
            ⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⢀⠄⣀⠄⠄⠄⠄⠄⣼⣿
            ⠇⠄⠄⠄⠄⠄⢀⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⢺⣿
            ⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠄⢸⣿
            ⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿
            ⠄⠄⠄⢀⣾⣿⣿⣿⡿⠟⠛⠛⠻⣿⣿⡿⠛⠉⠄⠉⠉⣻⣾⣿
            ⡆⠄⠄⢸⣿⣿⣿⡟⢀⠔⠒⡀⠄⣸⣿⣷⡄⡈⢉⠁⣠⣿⣹⣿
            ⣿⣀⠄⠄⣿⣿⣿⣦⣄⡒⢚⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿
            ⣟⢉⡵⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣼⣦⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⠩⠁⡄⣸⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⠝⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣀⡀⠄⠙⢿⣿⣿⣿⣿
            ⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿⣿⢋⣀⣤⣤⣤⣤⣤⣼⣿⣿⢻⣿
            ⡿⠿⠛⠛⣷⠈⠻⢿⣿⣿⣿⣯⣿⣿⣏⡀⢀⣹⣿⠙⠟⠄⣼⣿
            ⠄⠄⠄⠄⣿⣧⡀⠄⠈⠉⠛⠻⠻⣿⣿⣿⣿⡿⡟⠄⠄⣼⣿⣿
            ⠄⠄⠄⠄⢸⣿⣿⣄⠄⠄⠄⠄⠄⠈⠉⠉⠄⠄⠄⠄⠄⠉⠿⣿
            ⠄⠄⠄⠄⠄⢻⣿⣿⣷⣆⡀⠄⠄⠄⠄⠄⠄⠄⣴⡇⠄⠄⠄⠈

    Homem armado: ${white}parece que você não mora aqui, vocês são policiais?
    quem vocês acham que são para mentir para mim assim dessa forma? dois idiotas.
    Peguem tudo deles.`);
            continuar("continuar");
            console.clear();
            console.log(`
    Você foi levado para um lugar completamente estranho, roubaram seus pertences, 
    junto com Joseph.

    Você é um juiz, deveria saber ler as pessoas.
    `);
            status.diminuirDinheiro(1200);
            status.aumentarEstresse(20);
            continuar("continuar");
            break;
          }
        }
      }
    } else {
      console.clear();
      status.exibirStatus();
      console.log(`
    ${green}
⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⢿⣿
⣿⣿⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿
⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⢀⠄⣀⠄⠄⠄⠄⠄⣼⣿
⠇⠄⠄⠄⠄⠄⢀⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⢺⣿
⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠄⢸⣿
⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿
⠄⠄⠄⢀⣾⣿⣿⣿⡿⠟⠛⠛⠻⣿⣿⡿⠛⠉⠄⠉⠉⣻⣾⣿
⡆⠄⠄⢸⣿⣿⣿⡟⢀⠔⠒⡀⠄⣸⣿⣷⡄⡈⢉⠁⣠⣿⣹⣿
⣿⣀⠄⠄⣿⣿⣿⣦⣄⡒⢚⣿⣿⣿⣿⣿⣿⣶⣴⣾⣿⣿⣿⣿
⣟⢉⡵⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣼⣦⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⠩⠁⡄⣸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠝⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣀⡀⠄⠙⢿⣿⣿⣿⣿
⣿⣿⣿⣷⡀⢿⣿⣿⣿⣿⣿⣿⢋⣀⣤⣤⣤⣤⣤⣼⣿⣿⢻⣿
⡿⠿⠛⠛⣷⠈⠻⢿⣿⣿⣿⣯⣿⣿⣏⡀⢀⣹⣿⠙⠟⠄⣼⣿
⠄⠄⠄⠄⣿⣧⡀⠄⠈⠉⠛⠻⠻⣿⣿⣿⣿⡿⡟⠄⠄⣼⣿⣿
⠄⠄⠄⠄⢸⣿⣿⣄⠄⠄⠄⠄⠄⠈⠉⠉⠄⠄⠄⠄⠄⠉⠿⣿
⠄⠄⠄⠄⠄⢻⣿⣿⣷⣆⡀⠄⠄⠄⠄⠄⠄⠄⣴⡇⠄⠄⠄⠈

    Homem armado: ${white}Então voltem para o buraco que sairam, não podem entrar
    aqui esse horário, e me dá R$100.00 antes que eu mate os dois`);
      status.diminuirDinheiro(100);
      continuar("voltar para casa");
    }
  } else {
    console.clear();
    status.exibirStatus();
    continuar("continuar");
    console.clear();
    status.exibirStatus();
    falasAnne(`
Querido, o que acha de nós jantarmos fora hoje?
faz um tempo desde que fizemos isso, acho que vai ser uma boa. e você?`);
    resposta = validarPergunta2(`
[1] Sair para jantar com Anne
[2] Dizer que está cansado e ir dormir
`);
    if (resposta == 1) {
      console.clear();
      console.log(`
Vocês foram a um restaurante caro, foi uma noite muito agradavél com Anne,
vocês chegaram em casa e foram dormir.
`);
      status.diminuirDinheiro(400);
      status.aumentarFamilia(15);
      status.diminuirEstresse(5);
      continuar("ir dormir");
    } else {
      console.clear();
      console.log(`
Anne não ficou nada feliz com isso, você se meteu em uma enrascada
`);
      status.diminuirFamilia(10);
      status.aumentarEstresse(5);
      continuar("ir dormir");
    }
  }
  console.clear();
  status.relatorio();
  status.passarDia();
  continuar("continuar");
  status.exibirStatus();
  while (true) {
    // DIA 6
    console.clear();
    status.exibirStatus();
    falasAnne(`
Jones, no jornal está dizendo que um prédio está em chamas
ao lado da rua do tribunal, o trânsito está uma loucura daquele lado da cidade.
`);
    let resposta = validarPergunta(`
                          [1] PEGAR METRÔ
                          [2] PEGAR ONIBUS
                          [3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log(`
    O metrô estava muito cheio, apesar de todo o estresse você chegou
    ao trabalho`);
      status.aumentarEstresse(5);
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`
      O transito estava horrivel, você chegou atrasado.
      `);
      status.diminuirDinheiro(300);
      continuar("continuar");
      break;
    } else if (resposta == 3) {
      console.clear();
      resposta = validarPergunta2(`
    São 15km até o seu trabalho, você tem certeza?

                    [1] SIM
                    [2] NÃO`);
      if (resposta == 1) {
        console.clear();
        console.log(
          "Você andou bastante mas chegou sem mais problemas ao trabalho"
        );
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("o tribunal");
  continuar("continuar");
  while (true) {
    console.clear();
    console.log(
      Amarelo +
        `
    No Tribunal

    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

    Caso Pedro Salles, Pedro está sendo acusado de agredir sua ex mulher, em dezembro de 2021,
    há relatos de vizinhos que dizem terem ouvido uma grande briga na casa, na mesma noite a 
    policia foi a casa e encontrou ambos machucados, Pedro foi levado a delegacia e foi 
    detido até o julgamento por agressão.
    ` +
        white
    );
    resposta = validarPergunta(`
    [1] Ouvir Pedro Salles
    [2] Ouvir Marina Salles(A vítima)
    [3] Dar um veredito `);
    if (resposta == 1) {
      console.clear();
      console.log(`                Defesa de Pedro Salles
    
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠋⠉⠈⠉⠉⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿
⣿⣿⣿⢏⣴⣿⣷⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿
⣿⣿⣟⣾⣿⡟⠁⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⢢⠀⠀⠀⠀⠀⠀⠀⢸⣿
⣿⣿⣿⣿⣟⠀⡴⠄⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⣿
⣿⣿⣿⠟⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⣿
⣿⣁⡀⠀⠀⢰⢠⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡄⠀⣴⣶⣿⡄⣿
⣿⡋⠀⠀⠀⠎⢸⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠗⢘⣿⣟⠛⠿⣼
⣿⣿⠋⢀⡌⢰⣿⡿⢿⡀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣧⢀⣼
⣿⣿⣷⢻⠄⠘⠛⠋⠛⠃⠀⠀⠀⠀⠀⢿⣧⠈⠉⠙⠛⠋⠀⠀⠀⣿⣿⣿⣿⣿
⣿⣿⣧⠀⠈⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⢀⢃⠀⠀⢸⣿⣿⣿⣿
⣿⣿⡿⠀⠴⢗⣠⣤⣴⡶⠶⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡸⠀⣿⣿⣿⣿
⣿⣿⣿⡀⢠⣾⣿⠏⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠀⣿⣿⣿⣿
⣿⣿⣿⣧⠈⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿
⣿⣿⣿⣿⡄⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣦⣄⣀⣀⣀⣀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

    Pedro alega que após sua esposa olhar seu celular, ela perdeu o controle e começou a agredir
    ele, após ela se acalmar percebeu o que tinha feito e começou a se agredir, jogar coisas nela
    e até mesmo se jogou da escada, e por isso eu estou aqui preso hoje.
    `);
      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`                    Acusação Marina Salles
  
⢸⣿⣿⣿⣿⠃⠄⢀⣴⡾⠃⠄⠄⠄⠄⠄⠈⠺⠟⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣶⣤⡀⠄
⢸⣿⣿⣿⡟⢀⣴⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣷
⢸⣿⣿⠟⣴⣿⡿⡟⡼⢹⣷⢲⡶⣖⣾⣶⢄⠄⠄⠄⠄⠄⢀⣼⣿⢿⣿⣿⣿⣿⣿⣿⣿
⢸⣿⢫⣾⣿⡟⣾⡸⢠⡿⢳⡿⠍⣼⣿⢏⣿⣷⢄⡀⠄⢠⣾⢻⣿⣸⣿⣿⣿⣿⣿⣿⣿
⡿⣡⣿⣿⡟⡼⡁⠁⣰⠂⡾⠉⢨⣿⠃⣿⡿⠍⣾⣟⢤⣿⢇⣿⢇⣿⣿⢿⣿⣿⣿⣿⣿
⣱⣿⣿⡟⡐⣰⣧⡷⣿⣴⣧⣤⣼⣯⢸⡿⠁⣰⠟⢀⣼⠏⣲⠏⢸⣿⡟⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠁⠄⠟⣁⠄⢡⣿⣿⣿⣿⣿⣿⣦⣼⢟⢀⡼⠃⡹⠃⡀⢸⡿⢸⣿⣿⣿⣿⣿⡟
⣿⣿⠃⠄⢀⣾⠋⠓⢰⣿⣿⣿⣿⣿⣿⠿⣿⣿⣾⣅⢔⣕⡇⡇⡼⢁⣿⣿⣿⣿⣿⣿⢣
⣿⡟⠄⠄⣾⣇⠷⣢⣿⣿⣿⣿⣿⣿⣿⣭⣀⡈⠙⢿⣿⣿⡇⡧⢁⣾⣿⣿⣿⣿⣿⢏⣾
⣿⡇⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢻⠇⠄⠄⢿⣿⡇⢡⣾⣿⣿⣿⣿⣿⣏⣼⣿
⣿⣷⢰⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⢰⣧⣀⡄⢀⠘⡿⣰⣿⣿⣿⣿⣿⣿⠟⣼⣿⣿
⢹⣿⢸⣿⣿⠟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣶⣭⣉⣤⣿⢈⣼⣿⣿⣿⣿⣿⣿⠏⣾⣹⣿⣿
⢸⠇⡜⣿⡟⠄⠄⠄⠈⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣻⣿⣿⣿⣿⣿⠟⠁⢳⠃⣿⣿⣿
⠄⣰⡗⠹⣿⣄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⠟⣅⣥⣿⣿⣿⣿⠿⠋⠄⠄⣾⡌⢠⣿⡿⠃
⠜⠋⢠⣷⢻⣿⣿⣶⣾⣿⣿⣿⣿⠿⣛⣥⣾⣿⠿⠟⠛⠉⠄⠄
  
  Marina alega que após pedro olhar o celular dela, viu coisas que não o agradaram e começou a bater
  nela e dizer que ia matar ela, assim como disseram os vizinhos só se ouviam gritos de Pedro.
  Marina disse que ficou com muito medo e acabou jogando tudo que ela encontrou nele, isso fez os
  vizinhos chamarem a policia, Marina alega estar com medo pois Pedro jurou matar ela.
    `);
      continuar("voltar");
    } else {
      console.clear();
      resposta = validarPergunta2(`Dar um veredito
    [1] Pedro é culpado
    [2] Pedro é inocente
    `);
      if (resposta == 1) {
        console.clear();
        console.log(`
    Foi um caso muito dificil, mas você tomou a decisão correta, segundo os vizinhos era possivel
    ouvir Pedro ameaçando ela, que bom que você deixou ele atrás das grades isso podeira ter tomado
    um rumo terrivel `);
        status.aumentarDinheiro(1500);
        continuar("continuar");
        break;
      } else if (resposta == 2) {
        console.clear();
        console.log(`
    Foi um caso dificil, mas você não deveria ter ignorado os relatos dos vizinhos, com Pedro solto
    Marina pode correr um grande risco de vida, isso é muito sério, se algo acontecer com ela você
    carregará isso para o resto da sua vida
    `);
        status.aumentarDinheiro(750);
        status.aumentarEstresse(10);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("casa");
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  falasAnne(`
  Oi querido, Joseph nos chamou para o cassino hoje, nem adianta
  recusar, eu já aceitei por nós dois, vai se arrumar porque já vamos sair.`);
  let dinheiroAgora = status.dinheiro;
  continuar("Ir para o cassino");
  console.clear();
  console.log(`                          
██████╗ ███████╗███╗   ███╗    ██╗   ██╗██╗███╗   ██╗██████╗  ██████╗                                                           
██╔══██╗██╔════╝████╗ ████║    ██║   ██║██║████╗  ██║██╔══██╗██╔═══██╗                                                          
██████╔╝█████╗  ██╔████╔██║    ██║   ██║██║██╔██╗ ██║██║  ██║██║   ██║                                                          
██╔══██╗██╔══╝  ██║╚██╔╝██║    ╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██║   ██║                                                          
██████╔╝███████╗██║ ╚═╝ ██║     ╚████╔╝ ██║██║ ╚████║██████╔╝╚██████╔╝                                                          
╚═════╝ ╚══════╝╚═╝     ╚═╝      ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝                                                           
                                                                                                                                
         █████╗  ██████╗      ██████╗ █████╗ ███████╗███████╗██╗███╗   ██╗ ██████╗     ███████╗██╗  ██╗ ██████╗ ██████╗ ██╗     
        ██╔══██╗██╔═══██╗    ██╔════╝██╔══██╗██╔════╝██╔════╝██║████╗  ██║██╔═══██╗    ██╔════╝██║ ██╔╝██╔═══██╗██╔══██╗██║     
        ███████║██║   ██║    ██║     ███████║███████╗███████╗██║██╔██╗ ██║██║   ██║    ███████╗█████╔╝ ██║   ██║██████╔╝██║     
        ██╔══██║██║   ██║    ██║     ██╔══██║╚════██║╚════██║██║██║╚██╗██║██║   ██║    ╚════██║██╔═██╗ ██║   ██║██╔══██╗██║     
        ██║  ██║╚██████╔╝    ╚██████╗██║  ██║███████║███████║██║██║ ╚████║╚██████╔╝    ███████║██║  ██╗╚██████╔╝██║  ██║███████╗
        ╚═╝  ╚═╝ ╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
                                                                                                                                 `);

  continuar(`continuar`);
  console.clear();
  console.log(`                             
 ██████╗          ██╗ ██████╗  ██████╗  ██████╗          █████╗     ██████╗  ██████╗ ██╗     ███████╗████████╗ █████╗ 
██╔═══██╗         ██║██╔═══██╗██╔════╝ ██╔═══██╗        ██╔══██╗    ██╔══██╗██╔═══██╗██║     ██╔════╝╚══██╔══╝██╔══██╗
██║   ██║         ██║██║   ██║██║  ███╗██║   ██║        ███████║    ██████╔╝██║   ██║██║     █████╗     ██║   ███████║
██║   ██║    ██   ██║██║   ██║██║   ██║██║   ██║        ██╔══██║    ██╔══██╗██║   ██║██║     ██╔══╝     ██║   ██╔══██║
╚██████╔╝    ╚█████╔╝╚██████╔╝╚██████╔╝╚██████╔╝        ██║  ██║    ██║  ██║╚██████╔╝███████╗███████╗   ██║   ██║  ██║
 ╚═════╝      ╚════╝  ╚═════╝  ╚═════╝  ╚═════╝         ╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
                                                                                                                       `);
  continuar("continuar");
  console.clear();
  console.log(`Tutorial
Primeiro você vai escolher o numero de rodadas que deseja jogar.
Após escolher as rodadas você deve escolher a cor, cada cor é uma possibilidade
de vitória, sendo ${red} VERMELHO ${white}E ${green} VERDE ${white} cada um com 45% de chance de vitória
e ${white} BRANCO 10% de chance, por isso paga mais`);
  continuar("continuar");
  console.clear();
  let rodadas = cassinoRodadas(`
Escolha a quantidade de rodadas que deseja jogar(MIN 1 E MAX 10)`);
  for (let i = 1; i <= rodadas; i++) {
    console.clear();
    let rodadaRestante = rodadas - i;
    status.exibirStatus();
    let escolha = cassinoEscolha(`Escolha a cor que irá jogar
    [1] VERMELHO
    [2] VERDE
    [3] BRANCO`);
    let valor = cassinoValor(
      `Escolha o valor que irá jogar em R$ (MIN 10, MAX 100)`
    );
    let mecanicaCassino = Math.floor(Math.random() * 101);
    if (mecanicaCassino <= 10) {
      vencedor = 2;
    } else if (mecanicaCassino > 10 && mecanicaCassino < 45) {
      vencedor = 0;
    } else {
      vencedor = 1;
    }
    let randomChoice = escolhasCassino[vencedor];
    if (mecanicaCassino <= 10) {
      if (escolha != 3) {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(`                        
${randomChoice} VENCE`);
        console.log(`
Você perdeu`);
        status.diminuirDinheiro(valor);
        continuar("Proxima rodada");
      } else {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(`
${randomChoice} VENCE`);
        console.log(`
Você ganhou`);
        let ganhou = valor * 4 - valor;
        status.aumentarDinheiro(ganhou);
        continuar("Proxima rodada");
      }
    } else if (mecanicaCassino > 10 && mecanicaCassino < 45) {
      console.clear();
      if (escolha != 1) {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(
          red +
            `
${randomChoice} ${white} VENCE`
        );
        console.log(`
Você perdeu`);
        status.diminuirDinheiro(valor);
        continuar("Proxima rodada");
      } else {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(
          red +
            `
${randomChoice} ${white} VENCE`
        );
        console.log(`
Você ganhou`);
        ganhou = valor * 2 - valor;
        status.aumentarDinheiro(ganhou);
        continuar("Proxima rodada");
      }
    } else if (mecanicaCassino > 45) {
      console.clear();
      if (escolha != 2) {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(
          green +
            `
${randomChoice}${white} VENCE`
        );
        console.log(`
                
Você perdeu
                
                `);
        status.diminuirDinheiro(valor);
        continuar("Proxima rodada");
      } else if (escolha == 2) {
        console.clear();
        cassinoStatus(rodadas, rodadaRestante);
        console.log(
          green +
            `
${randomChoice}${white} VENCE`
        );
        console.log(`
Você ganhou`);
        ganhou = valor * 2 - valor;
        status.aumentarDinheiro(ganhou);
        continuar("Proxima rodada");
      }
    }
  }
  resultado = status.dinheiro - dinheiroAgora;
  if (dinheiroAgora > status.dinheiro) {
    console.clear();
    status.exibirStatus();

    console.log(`
    você perdeu R$${resultado}
    
    Você saiu perdendo, mas tudo bem viemos para nos divertir, certo? 
    
    `);
  } else if (dinheiroAgora < status.dinheiro) {
    console.clear();
    status.exibirStatus();

    console.log(`
    você ganhou R$${resultado}
    
    Olha só, acabou ganhando uma grana no cassino, eu disse que seria legal! 
    
    `);
  } else {
    console.clear();
    status.exibirStatus();

    console.log(`
    
   Parece que você não ganhou nem perdeu nada, ainda bem que se divertiu. 
    
    `);
  }
  continuar("continuar");
  console.clear();
  indoPara("casa");
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  falasAnne(`
  Chegamos em casa, foi um dia muito bom, vamos dormir.`);
  status.aumentarFamilia(10);
  continuar("dormir");
  status.relatorio();
  status.passarDia();
  while (true) {
    // DIA 7
    console.clear();
    continuar("continuar");
    console.clear();
    status.exibirStatus();
    falasAnne(`
Hoje estão tendo algumas manifestações na avenida principal,
por causa do caso da médica, mas não afetou o trânsito, isso é bom pra você.
Como você vai ao trabalho?`);
    let resposta = validarPergunta(`
                          [1] PEGAR METRÔ
                          [2] PEGAR ONIBUS
                          [3] IR ANDANDO `);
    if (resposta == 1) {
      console.clear();
      console.log(`
    Muitos manifestantes nas estações de metrô, o seu trem estava muito cheio você
    teve que aguardar o próximo e se atrasou.
    `);
      status.diminuirDinheiro(200);
      status.aumentarEstresse(5);
      continuar("continuar");
      break;
    } else if (resposta == 2) {
      console.clear();
      console.log(`
      Os manifestantes abriram um corredor para passagem dos veículos nas ruas, você chegou em cima
      da hora no trabalho mas não se atrasou
      `);
      continuar("continuar");
      break;
    } else if (resposta == 3) {
      console.clear();
      resposta = validarPergunta2(`
    São 15km até o seu trabalho, você tem certeza?

                    [1] SIM
                    [2] NÃO`);
      if (resposta == 1) {
        console.clear();
        console.log(`
As ruas estavam livres mas as calçadas super-lotadas, você não conseguiu chegar
a tempo no trabalho `);
        status.diminuirDinheiro(200);
        status.aumentarEstresse(5);
        continuar("continuar");
        break;
      }
    }
  }
  console.clear();
  indoPara("o tribunal");
  continuar("continuar");
  console.clear();
  while (true) {
    console.clear();
    console.log(
      Amarelo +
        `No Tribunal

    ⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠁⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⡟⢀⣼⣿⣶⣤⣀⠘⠿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣷⣦⣄⠉⠻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣾⣿⣿⣿⠏⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠻⢿⡿⠃⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⢠⣿⣷⣦⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣦⣄⠙⠻⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣈⠙⠻⣶⠄⠉⠛⠿⣿⡿⠁⣼⣿⣿⣿⠟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠛⢿⣿⣿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    
    Caso Kátia Vargas, Kátia está sendo acusada de homicidio culposo, após atropelar
    os irmãos Emanuel e Emanuelle de 21 e 23 anos enquanto dirigiam uma moto, o atropelamento
    aconteceu na avenida ocêanica, após uma discussão de trânsito a médica jogou o seu carro,
    um SUV em cima da moto dos irmãos, que morreram na queda.
    ` +
        white
    );
    resposta = validarPergunta(`
    [1] Ouvir Kátia
    [2] Ouvir acusação
    [3] Dar um veredito `);
    if (resposta == 1) {
      console.clear();
      console.log(`                Defesa de Kátia Vargas     
      ⢸⣿⣿⣿⣿⠃⠄⢀⣴⡾⠃⠄⠄⠄⠄⠄⠈⠺⠟⠛⠛⠛⠛⠻⢿⣿⣿⣿⣿⣶⣤⡀⠄
      ⢸⣿⣿⣿⡟⢀⣴⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣷
      ⢸⣿⣿⠟⣴⣿⡿⡟⡼⢹⣷⢲⡶⣖⣾⣶⢄⠄⠄⠄⠄⠄⢀⣼⣿⢿⣿⣿⣿⣿⣿⣿⣿
      ⢸⣿⢫⣾⣿⡟⣾⡸⢠⡿⢳⡿⠍⣼⣿⢏⣿⣷⢄⡀⠄⢠⣾⢻⣿⣸⣿⣿⣿⣿⣿⣿⣿
      ⡿⣡⣿⣿⡟⡼⡁⠁⣰⠂⡾⠉⢨⣿⠃⣿⡿⠍⣾⣟⢤⣿⢇⣿⢇⣿⣿⢿⣿⣿⣿⣿⣿
      ⣱⣿⣿⡟⡐⣰⣧⡷⣿⣴⣧⣤⣼⣯⢸⡿⠁⣰⠟⢀⣼⠏⣲⠏⢸⣿⡟⣿⣿⣿⣿⣿⣿
      ⣿⣿⡟⠁⠄⠟⣁⠄⢡⣿⣿⣿⣿⣿⣿⣦⣼⢟⢀⡼⠃⡹⠃⡀⢸⡿⢸⣿⣿⣿⣿⣿⡟
      ⣿⣿⠃⠄⢀⣾⠋⠓⢰⣿⣿⣿⣿⣿⣿⠿⣿⣿⣾⣅⢔⣕⡇⡇⡼⢁⣿⣿⣿⣿⣿⣿⢣
      ⣿⡟⠄⠄⣾⣇⠷⣢⣿⣿⣿⣿⣿⣿⣿⣭⣀⡈⠙⢿⣿⣿⡇⡧⢁⣾⣿⣿⣿⣿⣿⢏⣾
      ⣿⡇⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢻⠇⠄⠄⢿⣿⡇⢡⣾⣿⣿⣿⣿⣿⣏⣼⣿
      ⣿⣷⢰⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⢰⣧⣀⡄⢀⠘⡿⣰⣿⣿⣿⣿⣿⣿⠟⣼⣿⣿
      ⢹⣿⢸⣿⣿⠟⠻⢿⣿⣿⣿⣿⣿⣿⣿⣶⣭⣉⣤⣿⢈⣼⣿⣿⣿⣿⣿⣿⠏⣾⣹⣿⣿
      ⢸⠇⡜⣿⡟⠄⠄⠄⠈⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟⣱⣻⣿⣿⣿⣿⣿⠟⠁⢳⠃⣿⣿⣿
      ⠄⣰⡗⠹⣿⣄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⠟⣅⣥⣿⣿⣿⣿⠿⠋⠄⠄⣾⡌⢠⣿⡿⠃
      ⠜⠋⢠⣷⢻⣿⣿⣶⣾⣿⣿⣿⣿⠿⣛⣥⣾⣿⠿⠟⠛⠉⠄⠄
      
        A médica alega ter se sentido coagida pelos irmãos após uma discussão de transito
        onde ela, que estava em alta velocidade acabou perdendo o controle e batendo nos irmãos
        emanuel e emanuelle.
        
        `);
      continuar("voltar");
    } else if (resposta == 2) {
      console.clear();
      console.log(`                         Acusação
    
⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿
⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻
⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣸⣿⡷⡇⠄⣴⣾⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⣿⣿⠃⣦⣄⣿⣿⣿⠇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢸⣿⠗⢈⡶⣷⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    De acordo com as imagens divulgadas, a médica estava em alta velocidade,
    o que provocou uma discussão com Emanuel, que chegou a bater com o capacete
    no capô do carro da médica.
    Em seguida, Kátia teria saído em perseguição à moto, gerando uma colisão entre 
    os dois veículos. Emanuel, então, perdeu o controle e os dois foram arremessados da moto,
    batendo diretamente em um dos postes que ficam em frente ao hotel. Os dois morreram na hora.

  
    `);
      continuar("voltar");
    } else {
      console.clear();
      resposta = validarPergunta2(`Dar um veredito
    [1] Kátia Vargas é culpada
    [2] Kátia Vargas é inocente
    `);
      if (resposta == 1) {
        console.clear();
        console.log(`
    Foi um caso fácil, mas muitas vezes a justiça não trabalha da forma que deveria.`);
        status.aumentarDinheiro(1500);
        continuar("continuar");
        break;
      } else if (resposta == 2) {
        console.clear();
        console.log(`
    Foi um caso muito fácil, mas você optou por não fazer o obvio, será mesmo que jogar uma
    SUV em cima de uma moto, ocasionando na morte de dois jovens não é um crime?
    péssimo trabalho
    `);

        status.aumentarDinheiro(750);
        continuar("continuar");
        break;
      }
    }
  }

  console.clear(); // RETA FINAL DO JOGO
  indoPara("casa");
  continuar("continuar");
  console.clear();
  status.exibirStatus();
  console.log(`   
    DIA 7 - 20:20
           
    Hoje é o dia de pagar os R$10.000 a Lucio
           `);
  continuar("continuar");
  console.log(`
    Você chega em casa e percebe que o carro de Lucio está do lado de fora.
    `);
  continuar("continuar");
  let dinheiroAtual = status.dinheiro;
  let faltaDinheiro = 10000 - status.dinheiro;
  if (dinheiroAtual < 10000) {
    // NÃO TEM O DINHEIRO
    if (consequencia1 == 2 && quest1 == 1) {
      // SE ACEITOU SUBORNO DE HERNAN DIAZ E CONTOU A ANNE
      console.clear();
      console.log(` Você tem R$${status.dinheiro}`);
      console.log(`
    Você pode usar seu telefone para ligar pra alguem e pedir esse dinheiro emprestado,
    escolha bem
    `);
      let telefonema = validarPergunta2(`
    [1] Ligar para Hernan Diaz
    [2] Ligar pra Anne`);
      if (telefonema == 1) {
        console.clear();
        console.log(` Você tem R$${status.dinheiro}`);
        console.log(`Ligando para Hernan Diaz....
        ${green}
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⣾⣷⣿⣿⣿⣷⣄⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⢅⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⢿⣿⠁⣩⣿⣿⣿⠿⣿⡿⢿⣿⣿⣿⠛⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢷⣾⣿⣋⡡⠤⣀⣷⣄⠠⠤⣉⣿⣷⣽⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡻⣾⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣟⢋⣰⣯⠉⠉⣿⢄⠉⢻⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⢿⣷⣶⠤⠔⣶⣶⠿⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡀⠠⠀⠂⠀⠀⣧⡚⢿⣿⡶⢶⡿⠟⣠⣿⣿⠀⠀⠀⠀⠄⣀⡀⠀⠀
⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⢿⣷⣄⡀⠀⠀⠀⣈⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠒⠐⠺⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣋⣀⡄⠠⣢⣀⣩⣛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Hernan Diaz:${white} Olá Juiz, nunca nos falamos, você falou apenas com meu advogado, mas...
        eu posso te ajudar com isso, você me ajudou muito me tirando daquela cela, obrigado.
        estou te enviando R$${faltaDinheiro}
        `);
        status.aumentarDinheiro(faltaDinheiro);
        continuar("Falar com lucio");
        console.clear();
        console.log(`
        ${green}
⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄

        Lucio: ${white} Foi um prazer fazer negócio com você, você tem uma familia muito bonita
        seria realmente uma pena se você não tivesse me pago
        `);
        status.diminuirDinheiro(10000);
        status.diminuirEstresse(100);
        continuar("continuar");
        console.clear();
        console.log(`
        Você conseguiu pagar lucio se livrou da sua dívida, sua familia está bem, você fez um
        bom trabalho.`);
        continuar("continuar");
        console.clear();
        let jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
        if (jogarDnv == 1) {
          status.dinheiro = 250;
          status.familia = 50;
          status.estresse = 50;
          status.dia = 1;
          continue whilePrincipal;
        } else {
          console.log(`
          ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
          ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
          ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
          ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
          ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
           ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
          break whilePrincipal;
        }
      } else if (telefonema == 2) {
        console.clear();
        console.log(`Ligando pra Anne...
        `);

        falasAnne(`
        Olá querido, você sabe eu não tenho tanto dinheiro,
        Tudo que eu posso mandar é R$850.00, vou te fazer a transferência,
        espero que ajude você.`);
        status.aumentarDinheiro(850);
        continuar("continuar");
        if (status.dinheiro < 10000) {
          console.clear();
          console.log(`
        Você tem R$${status.dinheiro}`);
          console.log(`
        Mesmo com a ajuda de Anne você nao conseguiu pagar Lucio
        `);
          continuar("continuar");
          console.log(`
        Felizmente você ainda está aqui para pagar com sua vida, e não a sua familia.
        Lucio cumpriu a sua palavra e executou você na porta de casa, mas antes pegou todo
        o seu dinheiro
        `);
          status.diminuirDinheiro(status.dinheiro);
          continuar("continuar");
          console.clear();
          jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
          if (jogarDnv == 1) {
            status.dinheiro = 250;
            status.familia = 50;
            status.estresse = 50;
            status.dia = 1;
            continue whilePrincipal;
          } else {
            console.log(`
            ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
            ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
            ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
            ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
            ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
             ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
            break whilePrincipal;
          }
        } else if (status.dinheiro > 10000) {
          console.clear();
          console.log(`
        ${green}
⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄
        Lucio: ${white} Foi um prazer fazer negócio com você, você tem uma familia muito bonita
        seria realmente uma pena se você não tivesse me pago
        `);
          status.diminuirDinheiro(10000);
          status.diminuirEstresse(100);
          continuar("continuar");
          console.clear();
          console.log(`
        Você conseguiu pagar lucio se livrou da sua dívida, sua familia está bem, você fez um
        bom trabalho.`);
          continuar("continuar");
          console.clear();
          jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não
        `);
          if (jogarDnv == 1) {
            status.dinheiro = 250;
            status.familia = 50;
            status.estresse = 50;
            status.dia = 1;
            continue whilePrincipal;
          } else {
            console.log(`
            ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
            ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
            ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
            ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
            ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
             ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
            break whilePrincipal;
          }
        }
      }
    } else if (consequencia1 == 1 && quest1 == 1) {
      // SE NAO ACEITA SUBORNO DE HERNAN DIAZ E CONTA A ANNE
      while (true) {
        console.log(`
        Você pode usar seu telefone para ligar pra alguem e pedir esse dinheiro emprestado
        `);
        telefonema = validarPergunta2(`
        ${red}[1] Ligar para Hernan Diaz${white}
        [2] Ligar pra Anne`);
        if (telefonema == 1) {
          console.clear();
          console.log(`
            Hernan Diaz está preso, você condenou ele e não aceitou o suborno`);
          continuar("continuar");
        } else if (telefonema == 2) {
          console.clear();
          console.log(`Ligando pra Anne...`);
          falasAnne(`
        Olá querido, você sabe que eu não tenho tanto dinheiro,
        Tudo que eu posso mandar é R$850.00, vou te fazer a transferência,
        espero que ajude você.`);
          status.aumentarDinheiro(850);
          continuar("falar com Lucio");
          if (status.dinheiro < 10000) {
            console.clear();
            console.log(`
        Você tem R$${status.dinheiro}`);
            console.log(`
        Mesmo com a ajuda de Anne você nao conseguiu pagar Lucio
        `);
            continuar("continuar");
            console.log(`
        Felizmente você ainda está aqui para pagar com sua vida, e não a sua familia.
        Lucio cumpriu a sua palavra e executou você na porta de casa, mas antes pegou todo
        o seu dinheiro
        `);
            status.diminuirDinheiro(status.dinheiro);
            continuar("continuar");
            console.clear();
            jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
            if (jogarDnv == 1) {
              status.dinheiro = 250;
              status.familia = 50;
              status.estresse = 50;
              status.dia = 1;
              continue whilePrincipal;
            } else {
              console.log(`
              ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
              ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
              ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
              ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
              ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
               ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
              break whilePrincipal;
            }
          } else if (status.dinheiro > 10000) {
            console.clear();
            console.log(`
        ${green}
⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄
        Lucio: ${white} Foi um prazer fazer negócio com você, você tem uma familia muito bonita
        seria realmente uma pena se você não tivesse me pago
        `);
            status.diminuirDinheiro(10000);
            status.diminuirEstresse(100);
            continuar("continuar");
            console.clear();
            console.log(`
        Você conseguiu pagar lucio se livrou da sua dívida, sua familia está bem, você fez um
        bom trabalho.`);
            continuar("continuar");
            console.clear();
            jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não
        `);
            if (jogarDnv == 1) {
              status.dinheiro = 250;
              status.familia = 50;
              status.estresse = 50;
              status.dia = 1;
              continue whilePrincipal;
            } else {
              console.log(`
              ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
              ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
              ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
              ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
              ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
               ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
              break whilePrincipal;
            }
          }
        }
      }
    } else if (consequencia1 == 2 && quest1 == 2) {
      // SE ACEITA SUBORNO DE HERNAN DIAZ E nao CONTA  A ANNE
      while (true) {
        console.log(`
        Você pode usar seu telefone para ligar pra alguem e pedir esse dinheiro emprestado
        `);
        telefonema = validarPergunta2(`
        [1] Ligar para Hernan Diaz
        ${red}[2] Ligar pra Anne${white}
        `);
        if (telefonema == 1) {
          console.clear();
          console.log(`você tem ${status.dinheiro}`);
          console.log(`Ligando para Hernan Diaz....
        ${green}
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⣾⣷⣿⣿⣿⣷⣄⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⢅⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⢿⣿⠁⣩⣿⣿⣿⠿⣿⡿⢿⣿⣿⣿⠛⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢷⣾⣿⣋⡡⠤⣀⣷⣄⠠⠤⣉⣿⣷⣽⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡻⣾⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣟⢋⣰⣯⠉⠉⣿⢄⠉⢻⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⢿⣷⣶⠤⠔⣶⣶⠿⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡀⠠⠀⠂⠀⠀⣧⡚⢿⣿⡶⢶⡿⠟⣠⣿⣿⠀⠀⠀⠀⠄⣀⡀⠀⠀
⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⢿⣷⣄⡀⠀⠀⠀⣈⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠒⠐⠺⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣋⣀⡄⠠⣢⣀⣩⣛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Hernan Diaz:${white} Olá Juiz, nunca nos falamos, você falou apenas com meu advogado, mas...
        eu posso te ajudar com isso, você me ajudou muito me tirando daquela cela, obrigado.
        estou te enviando R$${faltaDinheiro}
        `);
          status.aumentarDinheiro(faltaDinheiro);
          continuar("Falar com lucio");
          console.clear();
          console.log(`
        ${green}
 ⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄
        Lucio: ${white} Foi um prazer fazer negócio com você, você tem uma familia muito bonita
        seria realmente uma pena se você não tivesse me pago
        `);
          status.diminuirDinheiro(10000);
          status.diminuirEstresse(100);
          continuar("continuar");
          console.clear();
          console.log(`
        Você conseguiu pagar lucio se livrou da sua dívida, sua familia está bem, você fez um
        bom trabalho.`);
          continuar("continuar");
          console.clear();
          let jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
          if (jogarDnv == 1) {
            status.dinheiro = 250;
            status.familia = 50;
            status.estresse = 50;
            status.dia = 1;
            continue whilePrincipal;
          } else {
            console.log(`
            ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
            ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
            ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
            ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
            ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
             ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
            break whilePrincipal;
          }
        } else if (telefonema == 2) {
          console.clear();
          console.log(`você tem R$${status.dinheiro}`);
          console.log(`
            Você optou por omitir de Anne o dinheiro que você pegou emprestado,
            ela não se atentou a guardar esse dinheiro`);
          continuar("continuar");
        }
      }
    } else if (consequencia1 == 1 && quest1 == 2) {
      // SE NAO ACEITA SUBORNO NEM CONTA A ANNE
      console.clear();
      console.log(`
        Você não contou a Anne da sua divida e não aceitou o suborno de Hernan Diaz por um
        pequeno delito, portanto não tem pra quem ligar e pedir esse dinheiro.\
        `);
      continuar("falar com Lucio");
      console.clear();
      console.log(`
        Você tem R$${status.dinheiro}`);
      console.log(`
        Você não tem dinheiro para pagar Lucio
        `);
      continuar("continuar");
      console.log(`
        Felizmente você ainda está aqui para pagar com sua vida, e não a sua familia.
        Lucio cumpriu a sua palavra e executou você na porta de casa, mas antes pegou todo
        o seu dinheiro
        `);
      status.diminuirDinheiro(status.dinheiro);
      continuar("continuar");
      console.clear();
      jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
      if (jogarDnv == 1) {
        status.dinheiro = 250;
        status.familia = 50;
        status.estresse = 50;
        status.dia = 1;
        continue whilePrincipal;
      } else {
        console.log(`
        ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
        ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
        ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
        ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
        ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
         ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝`);
        break whilePrincipal;
      }
    }
  } else if (dinheiroAtual >= 10000) {
    console.clear();
    console.log(`
        ${green}
⠄⠄⠄⠄⠄⠄⠄⠄⣠⣴⠶⠿⠛⠛⠛⠛⠛⠛⠷⠶⢶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⣤⣶⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣠⣾⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣿⣿⣦⡀⠄⠄⠄⠄⠄
⠄⠄⣼⣿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣿⣆⠄⠄⠄⠄
⠄⣸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣧⡀⠄⠄
⢰⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣇⠄⠄
⢸⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⡀⠄
⢸⣿⣿⢠⣤⣤⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣀⣠⣤⡀⠄⢸⣿⣿⡟⣿⣿⡇⠄
⢸⣿⣿⣿⠏⠛⠛⠿⣷⣶⣄⠄⠄⠄⠄⣠⣴⣾⣿⡿⠟⠛⠛⠛⠛⢦⣼⣿⣿⡔⣾⣿⡇⠄
⠄⢿⣿⡟⢀⣤⣶⣶⠾⢿⣿⣷⠄⠄⢠⣿⣿⢛⡿⢿⣷⡶⠦⣤⣄⡈⢿⣿⣿⣿⣾⣿⠃⠄
⣶⢾⣿⠄⠉⠁⠉⠉⠄⠤⠞⣿⠄⠄⢸⣿⡿⠄⠈⠄⠄⠁⠉⣽⠟⠄⠈⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⢸⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣇⡏⣧
⣿⣿⣿⡇⠄⠄⠄⠄⠄⡴⠄⠣⡀⢀⣸⣿⠿⣷⠄⠄⠄⠄⠄⠄⠄⠄⣠⣿⣿⣿⣿⣿⣿⢸
⢹⣿⣿⣧⠄⠄⠄⠄⠄⠙⠚⣛⡊⣻⣿⡛⠗⠋⠄⠄⠄⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⠏⡜
⠈⢻⣿⣿⡆⠄⠄⢀⣴⣴⣿⣿⠿⢾⡻⠿⢿⣶⣶⣦⡀⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡜⠁
⠄⠄⣿⣿⣿⠄⠄⣾⣿⣿⠿⠛⠛⠛⠛⠿⠶⣿⣿⣿⣿⡆⠄⠄⢀⣿⣿⣿⣿⣿⡿⠟⠄⠄
⠄⠄⠄⢹⣿⣄⠄⠉⠁⠄⠳⢶⣶⣶⣶⣶⣾⣿⡟⠃⠄⠁⠄⠄⣼⣿⣿⣿⣿⣏⠄⠄⠄⠄
⠄⠄⠄⠘⣿⣿⣆⣀⣀⡀⡀⡖⣸⣶⣶⣿⣿⣿⣷⣦⡀⠄⢀⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⣿⣿⣿⣿⣿⠟⠁⠁⢿⣿⡿⠍⠻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⣼⣿⣿⡿⣿⣿⣴⠄⠰⣿⣿⣇⢀⠄⠸⣿⣿⣿⣿⣿⣿⠟⣿⣿⣿⣿⣿⡀⠄⠄⠄
⠄⠄⠘⠿⣿⣿⣿⣀⠙⠿⣷⣤⣼⣿⣿⣾⣷⣾⣿⡿⠟⠋⠉⠄⠄⣿⣿⣿⣿⣿⠇⠄⠄⠄
⠄⠄⠄⠄⠈⠛⠿⣿⣶⣤⡈⠛⢿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠈⠛⠿⣿⣿⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⢘⣿⣿⣿⣿⡿⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠛⠻⠿⠿⢶⣦⣄⣀⣀⣀⣀⣼⡿⠿⠿⠛⠁⠄⠄⠄⠄
        Lucio: ${white} Foi um prazer fazer negócio com você, você tem uma familia muito bonita
        seria realmente uma pena se você não tivesse me pago
        `);
    status.diminuirDinheiro(10000);
    status.diminuirEstresse(100);
    continuar("continuar");
    console.clear();
    console.log(`
        Você conseguiu pagar lucio se livrou da sua dívida, sua familia está bem, você fez um
        bom trabalho.`);
    continuar("continuar");
    console.clear();
    jogarDnv = validarPergunta2(`Deseja jogar novamente ?
        [1] Sim
        [2] Não`);
    if (jogarDnv == 1) {
      status.dinheiro = 250;
      status.familia = 50;
      status.estresse = 50;
      status.dia = 1;
      continue whilePrincipal;
    } else {
      console.log(`
 ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝
                                                                          `);
      break whilePrincipal;
    }
  }
}
