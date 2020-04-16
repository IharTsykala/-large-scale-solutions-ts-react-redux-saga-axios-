import { put, takeEvery } from "redux-saga/effects"
import ServiceItem from "../../../services/service-Item"
import { LoadingState } from "../../../shared/constants/loadingStates.enum"
import { ItemInterface } from "../../InterfacesEntity/Item.interface"
import {
  ActionTypes,
  setListItemsInStore,
  setDescriptionCurrentItemInStore,
  setBasePathInStore,
  getFailureAction,
} from "./Item.actions"

import {
  setListItemsLoadingState,
  setDescriptionItemLoadingState,
} from "../loading/loading.actions"

function* setListItemsInStoreSaga(actions: any) {
  try {
    yield put(setListItemsLoadingState(LoadingState.loading))
    const response = yield ServiceItem.getListItemsFromDB()
    if (response.data.length && response.data[0].id) {
      yield response.data.sort((a: ItemInterface, b: ItemInterface) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
      yield put(setListItemsInStore(response.data))
      yield put(setBasePathInStore(response.basepath))
      yield put(setListItemsLoadingState(LoadingState.loaded))
    } else {
      yield put(setListItemsLoadingState(LoadingState.notFound))
    }
  } catch (e) {
    yield put(setListItemsLoadingState(LoadingState.error))
    yield put(getFailureAction(e))
  }
}

function* setDescriptionCurrentItemInStoreSaga(actions: any) {
  try {
    yield put(setDescriptionItemLoadingState(LoadingState.loading))
    const response = yield ServiceItem.getDescriptionCurrentItemFromDB(
      actions.payload.basePath,
      actions.payload.userLink
    )
    if (response.id) {
      yield put(setDescriptionCurrentItemInStore(response))
      yield put(setDescriptionItemLoadingState(LoadingState.loaded))
    } else {
      yield put(setDescriptionItemLoadingState(LoadingState.notFound))
    }
  } catch (e) {
    yield put(setDescriptionItemLoadingState(LoadingState.error))
    yield put(getFailureAction(e))
  }
}

export default function* itemSaga() {
  yield takeEvery(ActionTypes.GET_LIST_ITEMS_FROM_DB, setListItemsInStoreSaga)
  yield takeEvery(
    ActionTypes.GET_DESCRIPTION_CURRENT_ITEM_FROM_DB,
    setDescriptionCurrentItemInStoreSaga
  )
}
