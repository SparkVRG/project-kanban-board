import React from 'react';
import KanbanBoard from './KanbanBoard/KanbanBoard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <KanbanBoard />
    </BrowserRouter>
  );
}

export default App;