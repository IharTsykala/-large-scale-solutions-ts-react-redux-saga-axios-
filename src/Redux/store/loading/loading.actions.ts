import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  SET_LIST_ITEMS_LOADING_STATE: "[loading] set list items loading state",
  SET_DESCRIPTION_ITEM_LOADING_STATE:
    "[loading] set description item loading state",
}

export const setListItemsLoadingState = (
  loadingState: string
): Action<string> => ({
  type: ActionTypes.SET_LIST_ITEMS_LOADING_STATE,
  payload: loadingState,
})

export const setDescriptionItemLoadingState = (
  loadingState: string
): Action<string> => ({
  type: ActionTypes.SET_DESCRIPTION_ITEM_LOADING_STATE,
  payload: loadingState,
})
