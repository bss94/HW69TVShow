import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<div>aaaa</div>}/>
          <Route path="/shows/:id/" element={<div/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </Layout>
    </>
);

export default App
