/* eslint-disable no-new */
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../charcter';

test('determine belonging to the prototype', () => {
  expect(new Bowman('name', 'Bowman')).toBeInstanceOf(Character);
  expect(new Swordsman('name', 'Swordsman')).toBeInstanceOf(Character);
  expect(new Magician('name', 'Magician')).toBeInstanceOf(Character);
  expect(new Daemon('name', 'Daemon')).toBeInstanceOf(Character);
  expect(new Undead('name', 'Undead')).toBeInstanceOf(Character);
  expect(new Zombie('name', 'Zombie')).toBeInstanceOf(Character);
});

test('checking the value setting', () => {
  const coreObj = new Character('bowman', 'Bowman');
  coreObj.health = 100;
  coreObj.level = 2;
  coreObj.attack = 200;
  coreObj.defence = 200;
  coreObj.levelUp();

  const healthInstall = coreObj.health;
  const levelInrease = coreObj.level - 2;
  const attackIncrease = (coreObj.attack - 200) / (200 / 100);
  const defenceIncrease = (coreObj.defence - 200) / (200 / 100);

  expect(healthInstall).toBe(100);
  expect(levelInrease).toBe(1);
  expect(attackIncrease).toBe(20);
  expect(defenceIncrease).toBe(20);
});

test.each([
  [45, 34, 6, 13.04],
  [100, 99, 67, 67.33],
  [0, 49, 12, -43.12],
])('nternal state of an object', (health, points, defence, expected) => {
  const coreObj = new Character('bawman', 'Bowman');
  coreObj.health = health;
  coreObj.defence = defence;
  coreObj.damage(points);

  expect(coreObj.health).toBeCloseTo(expected);
});

test.each([
  ['bowmanbowman', 'Bowman'],
  ['b', 'Bowman'],
  ['bowman', 'bowman'],
])('checking for an exception', (name, type) => {
  function wrapper() {
    new Character(name, type);
  }

  expect(wrapper).toThrowError(/^Ошибка$/);
});

test.each([
  [-1],
  [0],
])('checking for an exception for levelUp', (number) => {
  const levelup = new Character('bowman', 'Bowman');
  levelup.health = number;

  function wrapper() {
    levelup.levelUp();
  }

  expect(wrapper).toThrowError(/^Нельзя повысить уровень умершего персонажа$/);
});
