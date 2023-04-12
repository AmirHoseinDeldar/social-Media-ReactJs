import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
