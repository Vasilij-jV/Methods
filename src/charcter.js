export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (name.length < 2 || name.length > 10 || typeof (name) !== 'string') {
      throw new Error('Переменная name не может иметь такого значения');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('Переменная type не может иметь такого значения');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    this.level += 1;
    this.health = 100;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
