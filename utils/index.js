
/*
    ------------------------------------------


    Utils finctions


    ------------------------------------------
*/ 

const RockPaperScissorsApp = {
    
    /*
        Functions for adding circles to the winner
    */ 
    addCirclesWin: () => {

        setTimeout( () => {

            document.getElementById("concentric-circle-one-you-picked").classList.remove("not-visible")
            document.getElementById("concentric-circle-two-you-picked").classList.remove("not-visible")
            document.getElementById("concentric-circle-three-you-picked").classList.remove("not-visible")
        }, 2000)   
    },

    addCirclesLose: () => {

        setTimeout(() => {
            
            document.getElementById("concentric-circle-one-house-picked").classList.remove("not-visible")
            document.getElementById("concentric-circle-two-house-picked").classList.remove("not-visible")
            document.getElementById("concentric-circle-three-house-picked").classList.remove("not-visible")
        }, 2000)
    },

    /*
        Function removes main container one and add main container two/three/four
    */ 
    addStepTwo: () => {

        document.getElementById("main-container-step-1").classList.add("not-visible")
        document.getElementById("main-container-step-2").classList.remove("not-visible")
        document.getElementById("rules-container").classList.remove("rules-container-step-1")
        document.getElementById("rules-container").classList.add("rules-container-step-2")
    },


    randomNumber: (Math.floor(Math.random() * 3) + 1),

    addStepThree: () => {

        setTimeout( () => {

            document.getElementById("main-container-step-2").classList.add("not-visible")
            document.getElementById("main-container-step-3").classList.remove("not-visible")

            if(RockPaperScissorsApp.randomNumber == 1) {

                document.getElementById("paper-wrapper-step-3-house-picked").classList.remove("not-visible")
            } else if (RockPaperScissorsApp.randomNumber == 2) {
            
                document.getElementById("scissors-wrapper-step-3-house-picked").classList.remove("not-visible")
            } else {
            
                document.getElementById("rock-wrapper-step-3-house-picked").classList.remove("not-visible")
            }
        }, 1000)
    },

    addStepFour: () => {

        setTimeout(() => {

            document.getElementById("main-container-step-3").classList.add("not-visible")
            document.getElementById("main-container-step-4").classList.remove("not-visible")
            document.getElementById("rules-container").classList.remove("rules-container-step-2")
            document.getElementById("rules-container").classList.add("rules-container-step-4")
            console.log(RockPaperScissorsApp.randomNumber);
            if(RockPaperScissorsApp.randomNumber == 1) {

                document.getElementById("paper-wrapper-step-4-house-picked").classList.remove("not-visible")
            } else if (RockPaperScissorsApp.randomNumber == 2) {
            
                document.getElementById("scissors-wrapper-step-4-house-picked").classList.remove("not-visible")
            } else {
            
                document.getElementById("rock-wrapper-step-4-house-picked").classList.remove("not-visible")
            }
        }, 2000)
        
    },
  
    
    /*
        ------------------------------------------


        Event Listeners

        
        ------------------------------------------
    */ 

    /*
        Show/hide rules modal on click on "rules" button
    */ 

    addEventListeners: () => {

        document.getElementById("rules").addEventListener("click", () => {

            document.getElementById("rules-modal-container").classList.remove("not-visible")
        })

        document.getElementById("close-icon").addEventListener("click", () => {

            document.getElementById("rules-modal-container").classList.add("not-visible")
        })

        

        /*
            Adding eventlistener for clicking on paper/scissors/rock
            and adding/substracting final score
        */ 
        let userChoice = 0;
        document.getElementById("paper-wrapper").addEventListener("click", () => {

            RockPaperScissorsApp.addStepTwo()
            document.getElementById("paper-wrapper-step-2").classList.remove("not-visible")
            document.getElementById("paper-wrapper-step-3-you-picked").classList.remove("not-visible")
            document.getElementById("paper-wrapper-step-4-you-picked").classList.remove("not-visible")
            RockPaperScissorsApp.addStepThree()
            RockPaperScissorsApp.addStepFour()
            userChoice = 1

            if(RockPaperScissorsApp.randomNumber === 1) {

                document.getElementById("lost-win-text").innerText = "NO ONE WON"
            }

            if(RockPaperScissorsApp.randomNumber === 2) {

                let score = parseInt(window.localStorage.getItem("score"))
                if(score > 0) {

                    score -= 1
                    window.localStorage.setItem("score", score)    
                }
                document.getElementById("lost-win-text").innerText = "YOU LOSE"
                RockPaperScissorsApp.addCirclesLose()
            }

            if(RockPaperScissorsApp.randomNumber === 3) {

                let score = parseInt(window.localStorage.getItem("score")) + 1
                window.localStorage.setItem("score", score)
                document.getElementById("lost-win-text").innerText = "YOU WIN"
                RockPaperScissorsApp.addCirclesWin()
            }
        })

        document.getElementById("scissors-wrapper").addEventListener("click", () => {

            RockPaperScissorsApp.addStepTwo()
            document.getElementById("scissors-wrapper-step-2").classList.remove("not-visible")
            document.getElementById("scissors-wrapper-step-3-you-picked").classList.remove("not-visible")
            document.getElementById("scissors-wrapper-step-4-you-picked").classList.remove("not-visible")
            RockPaperScissorsApp.addStepThree()
            RockPaperScissorsApp.addStepFour()
            userChoice = 2

            if(RockPaperScissorsApp.randomNumber === 1) {

                let score = parseInt(window.localStorage.getItem("score")) + 1
                window.localStorage.setItem("score", score)
                document.getElementById("lost-win-text").innerText = "YOU WIN"
                RockPaperScissorsApp.addCirclesWin()
            }

            if(RockPaperScissorsApp.randomNumber === 2) {

                
                document.getElementById("lost-win-text").innerText = "NO ONE WON"
            }

            if(RockPaperScissorsApp.randomNumber === 3) {

                let score = parseInt(window.localStorage.getItem("score"))
                if(score > 0) {

                    score -= 1
                    window.localStorage.setItem("score", score)
                }
                document.getElementById("lost-win-text").innerText = "YOU LOSE"
                RockPaperScissorsApp.addCirclesLose()
            }
        })

        document.getElementById("rock-wrapper").addEventListener("click", () => {

            RockPaperScissorsApp.addStepTwo()
            document.getElementById("rock-wrapper-step-2").classList.remove("not-visible")
            document.getElementById("rock-wrapper-step-3-you-picked").classList.remove("not-visible")
            document.getElementById("rock-wrapper-step-4-you-picked").classList.remove("not-visible")
            RockPaperScissorsApp.addStepThree()
            RockPaperScissorsApp.addStepFour()
            userChoice = 3

            if(RockPaperScissorsApp.randomNumber === 1) {

                let score = parseInt(window.localStorage.getItem("score"))
                if(score > 0) {
                    score -= 1
                    window.localStorage.setItem("score", score)
                }
                document.getElementById("lost-win-text").innerText = "YOU LOSE"
                RockPaperScissorsApp.addCirclesLose()
            }

            if(RockPaperScissorsApp.randomNumber === 2) {

                let score = parseInt(window.localStorage.getItem("score")) + 1
                window.localStorage.setItem("score", score)
                document.getElementById("lost-win-text").innerText = "YOU WIN"
                RockPaperScissorsApp.addCirclesWin()
            }

            if(RockPaperScissorsApp.randomNumber === 3) {

                document.getElementById("lost-win-text").innerText = "NO ONE WON"
            }
        })

        /*
            Adding event listener on "Play again" button
        */ 

        document.getElementById("play-again").addEventListener("click", () => {

            location.reload()
        })

    },

    start: () => {

        if(window.localStorage.getItem("score")) {
            let score = window.localStorage.getItem("score")
            document.getElementById("score").innerText = score
        }
        else {
            window.localStorage.setItem("score", 0)
            let score = window.localStorage.getItem("score")
            document.getElementById("score").innerText = score
        }
    }
}

window.onload = RockPaperScissorsApp.start()
RockPaperScissorsApp.addEventListeners()