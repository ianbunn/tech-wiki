new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        specialAttack() {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= this.calculateDamage(10, 20);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal() {
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttacks();
        },
        giveUp() {
            this.turns.unshift({
                isPlayer: true,
                text: 'Player is a wheenie!'
            });
            this.gameIsRunning = false;
        },
        monsterAttacks() {
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        calculateDamage(minValue, maxValue) {
            return Math.max(Math.floor(Math.random() * maxValue) + 1, minValue);
        },
        checkWin() {
            if(this.monsterHealth <= 0){
                if(confirm("You've won! New Game?")){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0){
                if(confirm("You've lost! New Game?")){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },

    }
});