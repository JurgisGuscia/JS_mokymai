import Landing from "./views/landing/Landing";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import "./variables.scss";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "http:",
});

function App() {
  return (
    <>
      <AuthProvider store={store}>
        <BrowserRouter>
          <Landing />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
