
import './App.css';
import Head from './component/Dashboard Components/Head';
import ListContainer from './component/Dashboard Components/ListContainer';
import './index.css'
import Routing from './Routing/Routing';

function App() {
    return (
     <div>
      {/* <Routing /> */}
      <div className='w-screen p-6'>
      <Head />
      <ListContainer />
      </div>
    
     </div>
    );
  }

export default App;



