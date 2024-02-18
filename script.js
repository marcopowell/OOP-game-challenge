function Player (name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

//Adding a method to the prototype 
Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if (this.points >= 10){
        this.lvl++;
        this.points -= 10;
    }

    console.log(this.describe());
};


Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} XP`;
}

const player1 = new Player ('Marco');
const player2 = new Player ('Antonio');

player1.gainXp(8);
player2.gainXp(3);
player1.gainXp(9);
player2.gainXp(2);
player1.gainXp(6);
player2.gainXp(4);
player1.gainXp(6);
player2.gainXp(3);

console.log(player1);
console.log(player2);

console.log(player1.describe());
console.log(player2.describe());