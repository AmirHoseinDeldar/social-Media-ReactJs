import Login from './components/login';
import chats from './components/chats';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvier from './contexts/AuchcontextProvider';
function App() {
  return (
    <div>
      <AuthContextProvier>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/chats' Component={chats} />
        </Routes>
      </AuthContextProvier>
    </div>
  );
}

export default App;
