export {};

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    fly: () => console.log("fly"),
    swim: () => console.log("swim"),
    layEggs: () => console.log("layEggs")
  };
}

const pet = getSmallPet();

if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

if ((pet as Fish).swim) {
  (pet as Fish).swim();
}

// Read more here:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
