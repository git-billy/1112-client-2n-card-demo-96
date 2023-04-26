import React from 'react';
import ReactDOM from 'react-dom/client';
import App_96 from './App_96';

// import { DemoProvider_96 } from "./context/DemoContext_96";
import { DemoProvider_xx } from './context/DemoContext_xx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_xx>
    <App_96 />
    </DemoProvider_xx>
  </React.StrictMode>
);
