export let bear = {
    foodLevel: 20,

    setHunger: function () {
        const hungerInterval = setInterval(() => {
            this.foodLevel -= 1;
            if (this.didYouGetEaten() == true) {
                clearInterval(hungerInterval);
                return "You got eaten!";
            }
        }, 500);
    },
    didYouGetEaten: function () {
        if (this.foodLevel > 0) {
            return false;
        } else {
            return true;
        }
    },
    feed: function (amount) {
        let that = this;
        return function (food) {
            this.foodLevel += 5
            return `The bear ate the ${food}! Food level goes up 5!`
        }

    },

    getHunger: function () {

        return this.foodLevel;

    }

};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));


