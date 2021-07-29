class Kindergarden {
    constructor(kindergardenName) {
        this.kindergarden = kindergardenName;
        this.kidsList = [];
        this.kidsLimit = 3;

    }
    intro() {
        console.log(`"${this.kindergarden}" can accept ${this.kidsLimit} kids.`);
    }
    updateKidsLimit(newLimit) {
        if (this.kidsList.length > newLimit) {

            console.log(`"${this.kindergarden}" can not update kids limit right now.`);
        } else {
            this.kidsLimit = newLimit;
            console.log(`"${this.kindergarden}" can accept ${this.kidsLimit} kids now.`);
        }
    }
    addKid(kidsName) {
        if (this.kidsLimit === this.kidsList.length) {
            console.log(`${kidsName} can not enter "${this.kindergarden}" kindergarden - it's at a full capacity of ${this.kidsLimit} kids.`);
            return
        } else {

            this.kidsList.push(kidsName);
            console.log(`${kidsName} has entered "${this.kindergarden}" kindergarden.`);
        }
    }
    sayHi() {
        let sayHi = ``;
        for (let kid of this.kidsList) {

            if (kid === this.kidsList[this.kidsList.length - 2] &&
                this.kidsList.length >= 2) {
                sayHi += `${this.kidsList[this.kidsList.length - 2]} and ${this.kidsList[this.kidsList.length - 1]}`
                break
            }
            sayHi += this.kidsList.length > 1 ? `${kid}, ` : `${kid}`;
        }
        console.log(`"${this.kindergarden}" is visited by: ${sayHi}.`);
    }
    removeKid(name) {
        let tempKidsList = [];
        for (const kid of this.kidsList) {
            if (name !== kid) {
                tempKidsList.push(kid);
            } else {

                console.log(`${kid} has left "${this.kindergarden}" kindergarden.`);
            }

        }
        this.kidsList = tempKidsList;
    }

}

module.exports = Kindergarden;