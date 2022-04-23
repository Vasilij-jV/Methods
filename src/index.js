import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('bowman', 'Bowman');
const swordsman = new Swordsman('swordsman', 'Swordsman');
const magician = new Magician('magician', 'Magician');
const daemon = new Daemon('daemon', 'Daemon');
const undead = new Undead('undead', 'Undead');
const zombie = new Zombie('zombie', 'Zombie');

bowman.damage(23);
swordsman.damage(8);
magician.damage(98);
daemon.damage(76);
undead.damage(1);
zombie.damage(23);
