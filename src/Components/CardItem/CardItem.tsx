import React, { useEffect } from "react"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
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
  currentItemId: string,
  basePath: string,
  dispatch: any,
  className: string,
}

const CardItem: React.FunctionComponent<CardItemProps> = ({
  item,
  currentItemId,
  basePath,
  dispatch,
  className,
}) => {
  useEffect(() => {
    if (currentItemId === item.id) dispatch(setCurrentItemInStore(item))
  }, [currentItemId, dispatch, item])

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
    <>
      <ListItem className={`cardItemContainer`}>
        <Button
          variant={(className === "chosen_item" && "contained") || "text"}
          color="primary"
          className={"cardItemContainer_info"}
          disabled={item.removed && true}
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
              (item.removed && `removed data: ${item.removedData}`) ||
              (item.removed === undefined && `haven't taken action yet`)}
          </p>
        </Button>
        <div className={"cardItemContainer_remove"}>
          <input
            type="checkbox"
            onChange={() => handleToggle(item.removed || false)}
            checked={item.removed || false}
          />
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CardItem
