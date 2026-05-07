const result = document.querySelector('.result')
const humanScore = document.querySelector('#h')
const IAScore = document.querySelector('#m')

const IA = document.querySelector('.IA')
const you = document.querySelector('.you')
const winner = document.querySelector('.winner')
const humanScoreBox = document.querySelector('.p1')
const IAScoreBox = document.querySelector('.p2')


let humanScoreNumber = 0
let IAScoreNumber = 0

const pularPontuacao = (elemento) =>{
    elemento.classList.remove('pular')

    setTimeout(() =>{
        elemento.classList.add('pular')
    }, 10)
}

const playHuman = (humanChoice) =>{

    playTheGame(humanChoice, playMachine())
}

const playMachine = () =>{
    const choices = ['PEDRA', 'PAPEL', 'TESOURA']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) =>{

    console.log('Humano: ' + human, 'IA: ' + machine)

    winner.classList.add('show')
    you.innerHTML = `${human}`
    IA.innerHTML = `${machine}`

    if (human === machine) {
        result.innerHTML = "Empate Técnico,<br>mais sorte na próxima."
    } else if(human === 'PAPEL' && machine === 'PEDRA' || 
        human === 'PEDRA' && machine === 'TESOURA' ||
        human === 'TESOURA' && machine === 'PAPEL'){
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            pularPontuacao(humanScoreBox)
            
            result.innerHTML = "Quem é o fodão??<br> YEAHH! O fodão é você!!"
    } else{
            IAScoreNumber++
            IAScore.innerHTML = IAScoreNumber
            pularPontuacao(IAScoreBox)

            result.innerHTML = "Você perdeu a rodada para a IA,<br> e ela vai roubar seu Emprego!"
    }

}
