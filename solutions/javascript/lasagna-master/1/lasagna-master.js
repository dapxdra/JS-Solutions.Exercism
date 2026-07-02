/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 **/
export function cookingStatus(timeRemaining) {
    if (timeRemaining === 0) {
        return "Lasagna is done.";
    } if (timeRemaining > 0) {
        return 'Not done, please wait.';
    } 
    return 'You forgot to set the timer.';
  }
export function preparationTime(layers, apt = 2){
  let c = layers.length;
  return c * apt;
  }

export function quantities(layers, g = 50, l= 0.2){
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
        noodles ++;
      }
    if (layers[i] === 'sauce') {
      sauce ++;
    }
  }
  return {
    noodles: noodles * g,
    sauce: sauce * l
  }
}

export function addSecretIngredient(friendList, myList) {
    const lastIngredient = friendList[friendList.length - 1];
    myList.push(lastIngredient);
  }
export function scaleRecipe(recipe, portions) {
  const scaled = { ...recipe }
  const factor = portions / 2

  for (let ingredient in scaled) {
    scaled[ingredient] *= factor
  }

  return scaled
}
  


 
