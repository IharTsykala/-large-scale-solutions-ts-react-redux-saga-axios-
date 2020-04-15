import { Action } from "../../interfacesAction/action.interface"
import { DescriptionItem } from "../../InterfacesEntity/DescriptionItem.interface"


export const ActionTypes = {
  GET_LIST_ALBUMS_WITH_PHOTOS: "[Album] Get list albums with photos by userId",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getListAlbumsWithPhotosByUserIDAction = (
  userId: string
): Action<string> => ({
  type: ActionTypes.GET_LIST_ALBUMS_WITH_PHOTOS,
  payload: userId,
})


export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
