import { Analytics } from '@vercel/analytics/react';
import './App.css';
import App2 from './Dashboard';

function App() {
  return (
    <>
      <App2 />
      <Analytics />
    </>
  );
}

export default App;
