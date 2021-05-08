
function logConstructorFactory(inEnabled: boolean) {
  if (inEnabled) {
    return function(inConstructor: Function) {
      console.log(inConstructor);
    }
  } else {
    return function() {};
  }
}

@logConstructorFactory(true)
class Spaceship {
  constructor() { console.log("constructor"); }
}

@logConstructorFactory(false)
class Spacestation {
  constructor() { console.log("Spacestation constructor"); }

const s = new Spaceship();
const t = new Spacestation();
