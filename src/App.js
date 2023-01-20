import React from 'react'
import './App.css';
import SideBar from './components/SideBar';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="grid md:grid-cols-10 overflow-x-hidden">
      <div className="hidden md:col-span-2 md:block">
        <SideBar />
      </div>
      <div className="sm:col-span-10 md:col-span-8">
        <Settings />
      </div>
    </div>
  );
}
export default App;
