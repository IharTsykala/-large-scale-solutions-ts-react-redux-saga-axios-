import { Action } from "../../interfacesAction/action.interface"
import { ItemInterface } from "../../InterfacesEntity/Item.interface"
import { DescriptionItemInterface } from "../../InterfacesEntity/DescriptionItem.interface"

export const ActionTypes = {
  SET_STATE_FROM_LOCAL_STORAGE: "[state] set state from localStorage",
  GET_LIST_ITEMS_FROM_DB: "[item] get list items from DB ",
  SET_LIST_ITEMS_IN_STORE: "[item] set list items in store ",
  SET_STATUS_FOR_ITEM_IN_LIST_ITEMS: "[item] set status for item in list items",
  SET_STATUS_FOR_ITEM_IN_REMOVED_LIST_ITEMS:
    "[item] set status for item in removed list items",
  SET_REMOVE_DATA_FOR_ITEM: "[item] set remove data for item",
  SET_RECOVER_DATA_FOR_ITEM: "[item] set recover data for item",
  REMOVE_ITEM_FROM_LIST_ITEMS: "[item] remove item from list items",
  REMOVE_ITEM_FROM_REMOVED_LIST_ITEMS:
    "[item] remove item from removed list items",
  CONCAT_ITEM_TO_LIST_ITEMS: "[item] concat item to list items",
  CONCAT_ITEM_TO_REMOVED_LIST_ITEMS: "[item] concat item to removed list items",
  SORT_LIST_ITEMS_IN_STORE: "[item] sort list items in store",
  SORT_REMOVED_LIST_ITEMS_IN_STORE: "[item] sort removed list items in store",
  SET_BASE_PATH_IN_STORE: "[path] set base path in store",
  GET_DESCRIPTION_CURRENT_ITEM_FROM_DB:
    "[description] get description current item from DB",
  SET_DESCRIPTION_CURRENT_ITEM_IN_STORE:
    "[description] set description current item in store",

  GET_FAILURE: "[getFailure] Get failure",
}

export const setStateFromLocalStorage = (state: {}): Action<{}> => ({
  type: ActionTypes.SET_STATE_FROM_LOCAL_STORAGE,
  payload: state,
})

export const getListItemsFromDB = (): Action<{}> => ({
  type: ActionTypes.GET_LIST_ITEMS_FROM_DB,
})

export const setListItemsInStore = (
  listItems: [ItemInterface]
): Action<[ItemInterface]> => ({
  type: ActionTypes.SET_LIST_ITEMS_IN_STORE,
  payload: listItems,
})

export const setStatusForItemInListItems = (
  itemId: string
): Action<string> => ({
  type: ActionTypes.SET_STATUS_FOR_ITEM_IN_LIST_ITEMS,
  payload: itemId,
})

export const setStatusForItemInRemovedListItems = (
  itemId: string
): Action<string> => ({
  type: ActionTypes.SET_STATUS_FOR_ITEM_IN_REMOVED_LIST_ITEMS,
  payload: itemId,
})

export const setRemoveDataForItem = (
  itemId: string,
  data: string
): Action<any> => ({
  type: ActionTypes.SET_REMOVE_DATA_FOR_ITEM,
  payload: { itemId, data },
})

export const setRecoverDataForItem = (
  itemId: string,
  data: string
): Action<any> => ({
  type: ActionTypes.SET_RECOVER_DATA_FOR_ITEM,
  payload: { itemId, data },
})

export const removeItemFromListItem = (itemId: string): Action<any> => ({
  type: ActionTypes.REMOVE_ITEM_FROM_LIST_ITEMS,
  payload: itemId,
})

export const removeItemFromRemovedListItem = (itemId: string): Action<any> => ({
  type: ActionTypes.REMOVE_ITEM_FROM_REMOVED_LIST_ITEMS,
  payload: itemId,
})

export const concatItemToListItems = (
  item: ItemInterface
): Action<ItemInterface> => ({
  type: ActionTypes.CONCAT_ITEM_TO_LIST_ITEMS,
  payload: item,
})

export const concatItemToRemovedListItems = (
  item: ItemInterface
): Action<ItemInterface> => ({
  type: ActionTypes.CONCAT_ITEM_TO_REMOVED_LIST_ITEMS,
  payload: item,
})

export const setBasePathInStore = (basePath: string): Action<string> => ({
  type: ActionTypes.SET_BASE_PATH_IN_STORE,
  payload: basePath,
})

export const getDescriptionCurrentItemFromDB = (
  basePath: string,
  userLink: string
): Action<any> => ({
  type: ActionTypes.GET_DESCRIPTION_CURRENT_ITEM_FROM_DB,
  payload: { basePath, userLink },
})

export const setDescriptionCurrentItemInStore = (
  descriptionItem: DescriptionItemInterface
): Action<DescriptionItemInterface> => ({
  type: ActionTypes.SET_DESCRIPTION_CURRENT_ITEM_IN_STORE,
  payload: descriptionItem,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
