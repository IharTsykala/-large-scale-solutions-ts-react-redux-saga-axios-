import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes } from "./DescriptionItem.actions"

function* setListAlbumsWithPhotosInStore(actions: any) {
  try {
    // const listAlbums = yield Service.getListAlbumsWithPhotosByUserID(
    //   actions.payload
    // )
    // yield put(setListAlbumsWithPhotosInStoreAction(listAlbums))
  } catch (e) {
    // yield put(getFailureAction(e))
  }
}

export default function* descriptionItemSaga() {
  yield takeEvery(
    ActionTypes.GET_LIST_ALBUMS_WITH_PHOTOS,
    setListAlbumsWithPhotosInStore
  )
}
