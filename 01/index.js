const jogada1 = "pedra"
const jogada2 = "tesoura"


//Pedra ganha de tesoura.
//Tesoura ganha de papel.
//Papel ganha de pedra.
//Se forem iguais = empate.


if (jogada1 === jogada2) {
    console.log("empate")
}

else if ((jogada1 === "pedra" && jogada2 === "tesoura") ||
        (jogada1 === "papel" && jogada2 === "pedra") ||
        (jogada1 === "tesoura" && jogada2 === "papel"))
 {
    console.log(jogada1)
}
else {
    console.log(jogada2)
}
