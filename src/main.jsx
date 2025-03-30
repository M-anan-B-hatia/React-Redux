import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Example from './component/example.jsx'
import FlowDiagram from './component/FlowDiagram.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/example",
    element: <Example />, 
  },
  {
    path: "/flowDiagram",
    element: <FlowDiagram />, 
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
