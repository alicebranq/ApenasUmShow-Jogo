
// PÁGINA INICIAL - redirecionamento p/ rotas escolhidas;

function BotaoMord() {
    alert(`Cara! O Benson vai demitir a gente! 
    Você escolheu Mordecai`);
    location.replace('./src/html-routes/RotaMordecai.html');
    } 
function BotaoRigb() {
    alert(`"Cala a boca!" 
    Você escolheu Rigby`);
    location.replace('./src/html-routes/RotaRigby.html');
    } 
function BotaoPair() {
    alert(`Muito bom show! 
    Você escolheu Pairulito`);
    location.replace('./src/html-routes/RotaPairulito.html');
}

// Rotas

    // ROTA MORDECAI: 
    function chooseFoodMord() {
        let foodMord =prompt('Qual comida você quer levar?')
            if (foodMord == 1) {
                location.replace('.//RotaMordecai1.html');
            } else if (foodMord==2) {
                alert(' Você escolheu Ravioli! em busca da massa de ravioli perfeita você acidentalmente abre um buraco no espaço tempo. o mundo talvez acabe, mas não tendo competição não tem como você perder!')
                location.replace('../../index.html');
            } else if (foodMord==3) {
                alert(`Você anda 30 km pra comprar no melhor restaurante de canjica e… 
                ele estava fechado!`)
                location.replace('../../index.html');
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }
    function chooseBuyOrBakeMord(){
    let comprarOuFazer=prompt("O que você vai fazer?")
        if (comprarOuFazer ==1){
            location.replace('./RotaMordecai2.html');
        } else if (comprarOuFazer ==2) {
            alert('a festa foi um sucesso… dentro da UPA! todos passaram mal')
            location.href="../../index.html"
        } else {
            alert('Hmm, parece que essa não é uma opção!')
        }
    } 
    
    function goToBeggining(){
        location.replace('../../index.html');
    }

    // ROTA RIGBY 
    function chooseFoodRigb() {
        let foodRigb =prompt('Qual comida você quer levar?')
            if (foodRigb == 1) {
                alert('Você escolheu Mac & Cheese!')
                location.replace("./RotaRigby1.html")
            } else if (foodRigb==2) {
                alert('Você escolheu escolheu Chimichuri! Vamos lá')
                location.replace("./RotasRigby2.html");
            } else if (foodRigb==3) {
                alert(`Hmm, parece que o Mordecai já ia levar isso. Você é desclassificado da competição!
                e leva uma baita bronca...`)
                location.replace('../../index.html');
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }
    function chooseBuyWhereRigbR1(){
        var comprarAonde=prompt("Aonde você quer comprar?")
        if (comprarAonde ==1){
            alert(`A comida tem um cheiro diferenciado… mas é bem gostosa! não ganha
            melhor comida, mas pelo menos não sobrou.`)
            location.replace('../../index.html')
        } else if (comprarAonde ==2) {
            alert(`Você pede ketchup pra levar e os donos do restaurante se sentem ofendidos!
            Eles fazem parte da máfia das massas. Você é atacado com pedaços de macarrão`)
            location.replace('../../index.html');
        } else {
           alert('Hmm, parece que essa não é uma opção!')}
        }
    function chooseChimichuri(){
        var chimichuriItens=prompt('Os itens que faltam são...')
        if (chimichuriItens==1){
        alert(`sua comida é um sucesso! todos na festa estão animados… excessivamente animados – você acorda 400 km de distância, com terninho e sapatos, sem lembrar de nada`)
        location.replace('')
        } else if (chimichuriItens ==2){
        alert(`Você acabou confundindo e fez chili de carne… a comida ficou boa, mas todos os seus amigos te humilham`)
        location.replace('')
        }
    }

    
    // ROTA PAIRULITO
    function chooseFoodPair() {
        let foodPair =prompt('Qual comida você quer levar?')
            if (foodPair==1) {
                location.href= "..."
            } else if (foodPair==2) {
                location.href= "..."
            } else if (foodPair==3) {
                alert('Err, parece que Pairulito confundiu chimichuri com chico balanceado. A comida sai boa, pelo menos.')
                location.replace('../../index.html');
            } else {
                alert('Hmm, parece que essa não é uma opção!')
            }
        }
        