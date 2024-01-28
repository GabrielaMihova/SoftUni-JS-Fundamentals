function solve (input) {
   class Cat {
    constructor (name ,age) {
        this.name = name,
        this.age = age
    }
    meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
   }

   for (let catInfo of input) {
        let [key, value] = catInfo.split(" ");
        let newCat = new Cat(key, value)
        newCat.meow();
   }
}
solve (['Mellow 2', 'Tom 5']);