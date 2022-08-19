import Sidebar from './Sidebar';
import Feed from './Feed'
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
    </div>
  );
}

export default App;
