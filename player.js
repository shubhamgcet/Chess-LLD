class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    getPlayerDetails() {
        return {
            name: this.name,
            color: this.color
        }
    }
}
module.exports = Player;