import { createStore } from "redux";
import RootReducer from "./components/Redux/reducers";

const Store = createStore(RootReducer)

export default Store