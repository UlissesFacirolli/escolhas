let suaidade;
let corpo;
let gênero;
let titulo;
let Ação;
let Drama;
let Terror;
let filmes = {
  menor10:{ 
    Ação: "Os Vinagdores",
    Drama: "Rei Leão",
    Terror: "Casa Monstro"
  },
  Entre10e14:{
    Ação: "O Cavaleiro das Trevas",
    Drama: "Sociedade dos Poetas Mortos",
    Terror: "Annabelle"
  },
  Entre14e16:{
    Ação: "John Wick",
    Drama: "Forrest Gump",
    Terror: "O Exorcista de Emily Rose"
  },
  Entre16e18:{
    Ação: "Kill Bill Vol.1",
    Drama: "Titanic",
    Terror: "Evil Dead"
  },
  Maior18:{
    Ação: "OldBoy",
    Drama: "Precisamos Falar Sobre Kevin",
    Terror: "O Exorcista"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo = "Yesteryear"; 
createSpan("Qual a sua idade?)🐣").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  Ação = createCheckbox("Você gosta de jogos de Ação? 🐱‍👤").position(100,600).addClass("esconde");
    Drama = createCheckbox("Você gosta de jogos de Drama? 🎀").position(100,650).addClass("esconde");
  Terror = createCheckbox("Você gosta de jogos de Terror? 🐛").position(100,700).addClass("esconde");

botao = createButton("COMEÇAR").position(width/2, 520);
 botao.mousePressed(bota);
 botao.addClass("botao");
} 
function bota(){
  selectAll('.esconde').forEach((el) =>
el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkação = Ação.checked();
  let checkdrama = Drama.checked();
  let checkterror = Terror.checked();
  let filme = "Insira suas preferências";
  if (suaidade.value() !== ""){
  filme = mostrafilme(idade, checkação, checkdrama, checkterror)
}
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("SUGESTADOR DE FILMES", width/2, 30);
   textFont(titulo);
  
  fill("black");
  stroke("pink");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(filme, width/2, height/2);
   textFont(titulo);
}
  function mostrafilme(idade, checkação, checkdrama, checkterror)
{
 if (isNaN(idade)){
   return "Idade Inválida"
   }
  if (idade < 5){
    return "Sai daqui, você é uma criança"
  } else
    if ( idade > 120){
      return "Vamos sacar um emprestimo"
    }
  if (idade >= 5 && idade < 10){
    if (checkação){
      return filmes["menor10"]["Ação"];
    }
     if (checkDrama){
      return filmes["menor10"]["Drama"];
    }
     if (checkTerror){
      return filmes["menor10"]["Terror"];
    }
  }
  if (idade >= 10 && idade < 14){
    if (checkação){
      return filmes["entre10e14"]["Ação"];
    }
     if (checkDrama){
      return filmes["entre10e14"]["Drama"];
    }
     if (checkTerror){
      return filmes["entre10e14"]["Terror"];
    }
}
  else if (idade >= 14 && idade < 16){
    if (checkação){
      return filmes["entre14e16"]["Ação"];
    }
     if (checkDrama){
      return filmes["entre14e16"]["Drama"];
    }
     if (checkTerror){
      return filmes["entre14e16"]["Terror"];
     }
  }
  
else if (idade >= 16 && idade < 18){
    if (checkação){
      return filmes["entre16e18"]["Ação"];
    }
     if (checkDrama){
      return filmes["entre16e18"]["Drama"];
    }
     if (checkTerror){
      return filmes["entre16e18"]["Terror"];
     }
  }
 else if (idade >= 18){
    if (checkação){
      return filmes["maior18"]["Ação"];
    }
     if (checkDrama){
      return filmes["maior18"]["Drama"];
    }
     if (checkTerror){
      return filmes["maior18"]["Terror"];
     }
  } return "Coloca alguma coisa";
} 
  
  

