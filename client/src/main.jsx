import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client';
import './locales/i18n';
import App from './App';
import './style.css';
import './mobile.css';
import { ApiErrorBoundaryProvider } from './hooks/ApiErrorBoundaryContext';
import 'katex/dist/katex.min.css';
import 'katex/dist/contrib/copy-tex.js';

const container = document.getElementById('root');
const root = createRoot(container);
const useMockFlag = import.meta.env.VITE_USE_MOCK === 'true';

root.render(
  <ApiErrorBoundaryProvider>
    <App useMock={useMockFlag} />
  </ApiErrorBoundaryProvider>,
);
