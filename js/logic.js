class MemoryGame {
    constructor() {
        this.deck = [
            "/img/harmonia.svg",
            "/img/poder.svg",
            "/img/projetar.svg",
            "/img/refletir.svg",
            "/img/harmonia.svg",
            "/img/poder.svg",
            "/img/projetar.svg",
            "/img/refletir.svg"
        ];
        this.cardSelected = [];
    }

    renderDeck(){
        //embaralhamento das cartas
        let sortDeck = this.deck.sort(() => {
            return Math.random() - 0.5;
        });

        let boardGame = document.getElementById("board");

        //criação das cartas
        sortDeck.forEach((img) => {
            let frontImg = document.createElement("img"); //cria um elemento img no html
            frontImg.src = img; //diz que o valor do src(source = fonte) é o conteúdo do item do array
            frontImg.classList.add("hide"); // adiciona uma classe para usar o item hide do css
            frontImg.classList.add("frontCard"); //adiciona uma classe frontCard <img src="img" class="hide frontCard"/>

            let backImg = document.createElement("img");
            backImg.src = "/img/fe.svg";
            backImg.classList.add("show");
            backImg.classList.add("backCard");

            boardGame.appendChild(frontImg);
            boardGame.appendChild(backImg);



        });
        
    }

    //virar as cartas do jogo
    flip(card) {
        this.cardSelected.push(card);

        if(this.cardSelected.length === 2){
            console.log("Duas cartas selecionadas");
            this.checkPair();
        }

    }

    // checar se os pares são iguais ou diferentes
    checkPair() {
        if(this.cardSelected[0].src === this.cardSelected[1].src){
            console.log("As cartas são iguais");
        } else{
            console.log("As cartas são diferentes");
        }
    }

}

