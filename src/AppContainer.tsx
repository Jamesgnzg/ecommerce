import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const AppContainer: React.FC = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

export default AppContainer;
