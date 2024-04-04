
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Routing from './components/layout/Routing';

function App() {
  return (
  <div>
<BrowserRouter>
<Layout>
  <Routing/>
</Layout>
</BrowserRouter>
  </div>
  
  );
}

export default App;
