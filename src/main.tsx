import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Theme>
      <App />
    </Theme>
  // </StrictMode>,
)
