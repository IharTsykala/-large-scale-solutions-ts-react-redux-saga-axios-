import { put, takeEvery } from "redux-saga/effects"
import ServiceItem from "../../../services/service-Item"
import { LoadingState } from "../../../shared/constants/loadingStates.enum"
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
    const responce = yield ServiceItem.getListItemsFromDB()
    if (responce.data.length) {
      yield put(setListItemsInStore(responce.data))
      yield put(setBasePathInStore(responce.basepath))
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
