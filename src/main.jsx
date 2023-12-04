import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./services/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Texttospech from "./pages/Text-to-spech.jsx";
import DailyKnowlge from "./pages/daily.knowlge.jsx";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/text-to-speech",
        element:<Texttospech/>
      },
      {
        path:"/daily-knowlege",
        element:<DailyKnowlge />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
