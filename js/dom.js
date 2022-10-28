const match = new MemoryGame();

const startScreen = document.getElementById("startScreen");
const inputName = document.querySelector("#inputName")
const btnStart = document.getElementById("btnStart");
const gameScreen = document.querySelector("#gameScreen");
const gameName = document.getElementById("name");

btnStart.addEventListener("click", (event) => {
    event.preventDefault();

    if(inputName.value === "") {
        alert("Digite um nome para iniciar o jogo.")
        return;
    }

    match.renderDeck();

    startScreen.style.display = "none"
    gameScreen.style.display = "flex"

    gameName.innerText = inputName.value;

    settingUpGame();

});

//vai organizar de modo que o verso da carta esteja vinculada a frente;
function settingUpGame() {
    const allBackCards = document.querySelectorAll(".show");
    
    allBackCards.forEach((backCard) => {
        backCard.addEventListener("click", () => {
            let frontCard = backCard.previousElementSibling; //diz que a frontCard é o elemento anterior a backCard
        
            backCard.className = "hide backCard";
            frontCard.className = "show frontCard";

            match.flip(frontCard);

        });

    });
        

}