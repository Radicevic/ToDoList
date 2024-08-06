import { useTransition } from "react";
import {Page} from "./components/Page/Page";
import { TaskList } from './components/TaskList/TaskList.jsx';


const todoTitle = 'MY TODO LIST';

function App() {

  return (
   <>
       <Page pageTitle={todoTitle} pageNumber={1} >
          
           <TaskList />
       </Page>
   </>
  );
}

// const car = {
//    printThis () {
//     console.log("THIS ", this)
//   }
// };

// car.printThis();



// function Car (name, model, color, productionYear ) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
//   this.productionYear = productionYear;
//   this.calculateCarAge = function () {
//     return (2024 - this.productionYear);
//   }
// }

// const car1 = new Car ("Honda", "Civic", "Red", 2000);
// const car2 = new Car ("Opel", "Kadet", "White", 1989);
// const car3 = new Car ("Volkswagen", "Passat", "Grey", 2021);


// console.log("Car1: ", car1, car1.calculateCarAge());
// console.log("Car2: ", car2, car2.calculateCarAge());
// console.log("Car3: ", car3, car3.calculateCarAge());




export default App;