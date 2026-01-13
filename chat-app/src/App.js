
import { useEffect ,useContext} from 'react';
import RefComponent from './components/ref-component';
import context from './context/context';

function App() {


  const ctx = useContext(context);

  console.log(ctx);
  return (
   <div>
    <RefComponent></RefComponent>
   </div>
  );
}

export default App;
