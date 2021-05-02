const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {
    return this._coures.appetizers;
  },

  get mains() {
    return this._coures.mains;
  },

  get desserts() {
    return this._coures.desserts;
  },

  set appetizers(appetizers) {
    this._coures.appetizers = appetizers;
  },

  set mains(mains) {
    this._coures.mains = mains;
  },

  set desserts(desserts) {
    this._coures.mains = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Tomato Salad', 4.00);
menu.addDishToCourse('appetizers', 'Chicken Wings', 4.50);
menu.addDishToCourse('appetizers', 'Meatballs ', 5.00);

menu.addDishToCourse('mains', 'Steak', 10.25);
menu.addDishToCourse('mains', 'Pork Chops', 11.20);
menu.addDishToCourse('mains', 'Chicken', 7.75);

menu.addDishToCourse('desserts', 'Blueberry cheese cake', 4.00);
menu.addDishToCourse('desserts', 'Rhubarb Crisp', 4.50);
menu.addDishToCourse('desserts', 'Quince  Sorbet', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal)