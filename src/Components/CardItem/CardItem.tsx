import React, { useEffect } from "react"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import {
  concatItemToListItems,
  concatItemToRemovedListItems,
  getDescriptionCurrentItemFromDB,
  removeItemFromListItem,
  removeItemFromRemovedListItem,
  setRecoverDataForItem,
  setRemoveDataForItem,
  setStatusForItemInListItems,
  setStatusForItemInRemovedListItems,
  setCurrentItemInStore,
} from "../../Redux/store/Item/Item.actions"

type CardItemProps = {
  item: ItemInterface,
  basePath: string,
  dispatch: any,
  className: string,
}

const CardItem: React.FunctionComponent<CardItemProps> = ({
  item,
  basePath,
  dispatch,
  className,
}) => {
  useEffect(() => {
    console.log("hi")
  }, [item])

  const handleToggle = (removed: boolean) => {
    if (!removed) {
      dispatch(setStatusForItemInListItems(item.id))
      dispatch(
        setRemoveDataForItem(item.id, new Date().toString().slice(0, 24))
      )
      dispatch(removeItemFromListItem(item.id))
      dispatch(concatItemToRemovedListItems(item))
    } else {
      dispatch(setStatusForItemInRemovedListItems(item.id))
      dispatch(
        setRecoverDataForItem(item.id, new Date().toString().slice(0, 24))
      )
      dispatch(removeItemFromRemovedListItem(item.id))
      dispatch(concatItemToListItems(item))
    }
  }
  return (
    <li className={`${className} cardItemContainer`}>
      <div
        className={"cardItemContainer_info"}
        onClick={() =>
          !item.removed &&
          dispatch(getDescriptionCurrentItemFromDB(basePath, item.more)) &&
          dispatch(setCurrentItemInStore(item))
        }
      >
        <p> {`name: ${item.name}`} </p>
        <p> {`info: ${item.shortInfo}`} </p>
        <p>
          {(item.removed !== undefined &&
            !item.removed &&
            `recover data: ${item.recoveredData}`) ||
            (item.removed && `remove data: ${item.removedData}`) ||
            (item.removed === undefined && `haven't taken action yet`)}
        </p>
      </div>
      <div className={"cardItemContainer_remove"}>
        <input
          type="checkbox"
          onChange={() => handleToggle(item.removed || false)}
          checked={item.removed || false}
        />
      </div>
    </li>
  )
}

export default CardItem
