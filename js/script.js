// Base class for all DBD characters
class Character {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.perks = [];
        this.isInjured = false;
        this.isDowned = false;
    }

    equipPerk(perkName) {
        if (this.perks.length < 4) {
            this.perks.push(perkName);
        }
    }
}
// https://codesignal.com/learn/courses/javascript-classes-and-objects-basics/lessons/javascript-classes-in-object-oriented-programming

class Survivor extends Character {
    constructor(name) {
        super(name, "Survivor");
        this.hasFlashlight = false;
    }

    repairGenerator() {
        return `${this.name} is repairing a generator.`;
    }

    heal() {
        this.isInjured = false;
        return `${this.name} is healing.`;
    }

    vault() {
        return `${this.name} vaulted a pallet or window.`;
    }
    healSurvivor(survivor) {
        if (survivor.isInjured) {
            survivor.isInjured = false;
            return `${this.name} healed ${survivor.name}. They are now healthy!`;
        }
        return `${survivor.name} does not need healing.`;
    }
}

class Killer extends Character {
    constructor(name, power) {
        super(name, "Killer");
        this.power = power;
    }

    hitSurvivor(survivor) {
        if (!survivor.isInjured) {
            survivor.isInjured = true;
            return `${this.name} hit ${survivor.name}. They are now injured!`;
        } else {
            survivor.isDowned = true;
            return `${this.name} hit ${survivor.name}. They are now downed!`;
        }
    }

    usePower() {
        return `${this.name} used their special power: ${this.power}`;
    }
}


class Nea extends Survivor {
    constructor() {
        super("Nea Karlsson");
        this.equipPerk("Balanced Landing");
        this.equipPerk("Urban Evasion");
        this.equipPerk("Streetwise");
    }
}

class Jake extends Survivor {
    constructor() {
        super("Jake Park");
        this.equipPerk("Iron Will");
        this.equipPerk("Calm Spirit");
        this.equipPerk("Saboteur");
    }
}

// New Survivor: Kate Denson
class Kate extends Survivor {
    constructor() {
        super("Kate Denson");
        this.equipPerk("Dance With Me");
        this.equipPerk("Windows of Opportunity");
        this.equipPerk("Boil Over");
    }
}


class Bill extends Survivor {
    constructor() {
        super("William 'Bill' Overbeck");
        this.equipPerk("Unbreakable");
        this.equipPerk("Borrowed Time");
        this.equipPerk("Left Behind");
    }
}

class Trapper extends Killer {
    constructor() {
        super("Trapper", "Bear Trap");
    }

    placeBearTrap() {
        return "The Trapper placed a Bear Trap.";
    }
}

class Huntress extends Killer {
    constructor() {
        super("Huntress", "Hunting Hatchets");
    }

    throwHatchets() {
        return "The Huntress is throwing a hatchet!";
    }
}
