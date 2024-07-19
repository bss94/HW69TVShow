import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

const App = () => (
  <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows/:id/" element={<Home/>}/>
        <Route path="*" element={<h1>Not found!</h1>}/>
      </Routes>
    </Layout>
  </>
);

export default App;
