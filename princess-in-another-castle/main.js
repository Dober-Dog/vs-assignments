class Player {
    constructor(name){
        this.name = name
        this.totalCoins = 0
        this.status = "big"
        this.hasStar = false
        this.interval = null
    }

    print(){
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nCoins: ${this.totalCoins} \n`)
    }
    
    gotHit(){
        if (this.hasStar === true){
            this.hasStar = false
            console.log("You were saved by a Star!")
        } else if (this.status === "Powered Up"){
            this.status = "big"
        } else if(this.status === "big"){
            this.status = "small"
        } else if(this.status === "small"){
            this.status = "dead"
        }
    }

    gotPowerup(){
        if(this.status === "small"){
            this.status = "big"
        } else if(this.status === "big"){
            this.status = "Powered Up"
        } else if (this.status === "Powered Up"){
            this.hasStar = true
            console.log(`Congrats! You found a Star!`)
        }
    }

    addCoin(){
        this.totalCoins += 1
    }

    gameOver(){
        clearInterval(this.interval)
    }

    random(){
        if(this.status === "dead"){
            this.gameOver
        } else {
            const event = Math.floor(Math.random() * 3)
            if(event === 0){
                this.gotHit()
            } else if (event === 1){
                this.gotPowerup()
            } else if (event === 2){
                this.addCoin()
            }
        this.print()
        }
    }
}

const player = new Player("Mario")
const interval = setInterval(() => player.random(), 1000)
player.interval = interval