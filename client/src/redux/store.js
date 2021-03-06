import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Auth from "./reducers/auth.reducer";
import Snackbar from "./reducers/snackbar.reducer";
import ApplicationData from "./reducers/applicationData.reducer";
import Constants from "./reducers/constants.reducer";
import Slider from "./reducers/slider.reducer";

const rootReducer = combineReducers({
  authorisation: Auth,
  snackbar: Snackbar,
  applicationData: ApplicationData,
  constants: Constants,
  slider: Slider,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
