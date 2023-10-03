import { AppState } from "../AppState.js"

class BackpackService {

  addItemToBackpack(item) {
    console.log('you passed the ', item, 'to the service')

    // BL
    if(AppState.backpack.includes('🛏️') && item == '🛏️'){
      throw new Error('You already have a 🛏️')
    }


    AppState.backpack.push(item)
    console.log('the backpack now has', AppState.backpack)
  }

  removeItemToBackpack(item) {

  }

}


export const backpackService = new BackpackService()