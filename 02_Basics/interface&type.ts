/********************** Interface and Type ******************************/

// INTERFACE

interface Animal {
    name: string;
}
  
interface Bear extends Animal {
   honey: boolean;
}
  
const bear = getBear();
bear.name;
bear.honey;

// TYPE

type anotherAnimal = {
    name: string;
}
  
type anotherBear = Animal & { 
    honey: boolean;
}
  
const anotherbear = getBear();
anotherbear.name;
anotherbear.honey;

