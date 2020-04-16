import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./Redux/index"
import itemSaga from "./Redux/store/Item/Item.sagas"
import ListItems from "./Components/ListItems/ListItems"
import DescriptionItem from "./Components/DescriptionItem/DescriptionItem"
import Box from "@material-ui/core/Box"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(itemSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <Box component="div" className={"wrapper"}>
      <ListItems />
      <DescriptionItem />
    </Box>
  </Provider>
)

export default App
