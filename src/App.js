import './App.css';
import { Layout } from './components/styled-components/Layout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Home />
    </Layout>
  );
}

export default App;
