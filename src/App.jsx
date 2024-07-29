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

export default App;
