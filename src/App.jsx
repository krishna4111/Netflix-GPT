import Body from "./components/body/Body";
import appStore from "./utils/store/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
