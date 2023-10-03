import { AboutController } from "./controllers/AboutController.js";
import { BackpackController } from "./controllers/BackpackController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

// YOU WILL REGISTER ALL OF YOUR CONTROLLERS THROUGH THE ROUTER


export const router = [
  {
    path: '',
    controller: BackpackController,
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]