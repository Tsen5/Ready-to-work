import { createRoot } from 'react-dom/client';

import { Counter, Header } from '@repo/ui';

import './style.css';

const App = () => (
  <div>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
