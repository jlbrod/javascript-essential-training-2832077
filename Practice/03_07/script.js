/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const bottle = {
  name: "water bottle",
  volume: "500mls",
  colour: "silver",
  lidOpen: false,
  toggleLid: function (LidStatus) {
    this.lidOpen = LidStatus;
  },
  insulated: true,
};

const refrigerator = {
  name: "car fridge",
  volume: "40 litres",
  colour: "white",
  can: {
    volume: "500mls",
    material: "aluminum",
    height: "200mm",
    empty: false,
    drinkContents: function (CanContents) {
      this.empty = CanContents;
    },

    sugarfree: false,
  },
};
