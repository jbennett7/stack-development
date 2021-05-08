interface IPerson {
  firstName: string;
}

interface INinja extends IPerson {
  numberOfSwords: number;
}

let ninja = {} as INinja;
ninja.firstName = "Ryuki";
ninja.numberOfSwords = 2;
