import { AppState } from "../AppState.js";
import { backpackService } from "../services/BackpackService.js";
import { setText } from "../utils/Writer.js";

function _drawItems() {
  // Used to clear the element or page
  let contentToDraw = ''
  AppState.backpack.forEach(item => {
    contentToDraw += item
  })
  
  setText('current-items', contentToDraw)
}

export class BackpackController {
  constructor() {
    console.log('does this work?');
  }

  /**
   * 
   * @param {string} item 
   */
  addItemToBackpack(item) {
    // I need to manipulate data... But I am not allowed to do it
    console.log('this is the item you selected', item)
    backpackService.addItemToBackpack(item)
    _drawItems()
  }

}


















function box() {
  console.log('hello')
}



//                       V Parameter
/**
 * 
 * @param {string} dinosaurSound 
 */
function saySomething(dinosaurSound) {
  console.log('the dino says ', dinosaurSound)
}


box()

//            v argument AKA (actual value)
saySomething('rawr')
saySomething('grrrrr')





















