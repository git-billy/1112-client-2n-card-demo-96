import React from 'react';
import ReactDOM from 'react-dom/client';
import App_96 from './App_96';

import { DemoProvider_96 } from "./context/DemoContext_96";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_96>
    <App_96 />
    </DemoProvider_96>
  </React.StrictMode>
);
