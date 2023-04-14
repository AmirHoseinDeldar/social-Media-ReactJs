import Login from './components/Login';
import Chats from './components/Chats';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvier from './contexts/AuchcontextProvider';

function App() {
  return (
    <div>
      <AuthContextProvier>
        <Routes>
          <Route path='/Chats' Component={Chats} />
          <Route path='/' Component={Login} />
        </Routes>
      </AuthContextProvier>
    </div>
  );
}

export default App;
