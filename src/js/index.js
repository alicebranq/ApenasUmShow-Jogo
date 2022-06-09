
// PÁGINA INICIAL - redirecionamento p/ rotas escolhidas;

function BotaoMord() {
    alert(`Cara! O Benson vai demitir a gente! 
    Você escolheu Mordecai`);
    location.href= "http://127.0.0.1:5500/M%C3%B3dulo1/JogoApenasUmShow/src/html%20routes/RotaMordecai.html";
    } 
function BotaoRigb() {
    alert(`"Cala a boca!" 
    Você escolheu Rigby`);
    location.href= "http://127.0.0.1:5500/M%C3%B3dulo1/JogoApenasUmShow/src/html%20routes/RotaRigby.html";
    } 
function BotaoPair() {
    alert(`Muito bom show! 
    Você escolheu Pairulito`);
    location.href= "http://127.0.0.1:5500/M%C3%B3dulo1/JogoApenasUmShow/src/html%20routes/RotaPairulito.html."
}

// Rotas

    // ROTA MORDECAI: 
    function chooseFoodMord() {
        let foodMord =prompt('Qual comida você quer levar?')
            if (foodMord == 1) {
                location.href="..."
            } else if (foodMord==2) {
                alert(' Você escolheu Ravioli! em busca da massa de ravioli perfeita você acidentalmente abre um buraco no espaço tempo. o mundo talvez acabe, mas não tendo competição não tem como você perder!')
                location.href= "..."
            } else if (foodMord==3) {
                alert(`Você anda 30 km pra comprar no melhor restaurante de canjica e… 
                ele estava fechado!`)
                location.href= "..."
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }
    function chooseBuyOrBakeMord(){
    let comprarOuFazer=prompt("O que você vai fazer?")
        if (comprarOuFazer ==1){
        location.href="..."
        } else if (comprarOuFazer ==2) {
        alert('a festa foi um sucesso… dentro da UPA! todos passaram mal')
        location.href="..."
        } else {
            alert('Hmm, parece que essa não é uma opção!')
        }
    } function goToBeggining(){
        location.href="..."
    }

    // ROTA RIGBY 
    function chooseFoodRigb() {
        let foodRigb =prompt('Qual comida você quer levar?')
            if (foodRigb == 1) {
                alert('Você escolheu Mac & Cheese!')
                location.href="http://127.0.0.1:5500/M%C3%B3dulo1/JogoApenasUmShow/src/html%20routes/RotaRigby1.html"
            } else if (foodRigb==2) {
                alert('Você escolheu escolheu Chimichuri! Vamos lá')
                location.href= "http://127.0.0.1:5500/M%C3%B3dulo1/JogoApenasUmShow/src/html%20routes/RotaRigby2.html";
            } else if (foodRigb==3) {
                alert(`Hmm, parece que o Mordecai já ia levar isso. Você é desclassificado da competição!
                e leva uma baita bronca...`)
                location.href= "http://127.0.0.1:5500/ProjFinalModulo1/projfinalMOD1.html"
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }

    
    // ROTA PAIRULITO
    function chooseFoodPair() {
        let foodPair =prompt('Qual comida você quer levar?')
            if (foodPair==1) {
                location.href= "http://127.0.0.1:5500/ProjFinalModulo1/Rotas/PairR1.html"
            } else if (foodPair==2) {
                location.href= "http://127.0.0.1:5500/ProjFinalModulo1/Rotas/PairR2.html"
            } else if (foodPair==3) {
                alert('Err, parece que Pairulito confundiu chimichuri com chico balanceado. A comida sai boa, pelo menos.')
                location.href= "http://127.0.0.1:5500/ProjFinalModulo1/projfinalMOD1.html"
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }