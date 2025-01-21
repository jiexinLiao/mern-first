import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";  // 默认导入 Chakra UI

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>  {/* ChakraProvider 不需要传递 value */}
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
