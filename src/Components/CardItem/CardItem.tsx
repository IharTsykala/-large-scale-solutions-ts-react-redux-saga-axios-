import React, {useEffect} from "react"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import {
  concatItemToListItems, concatItemToRemovedListItems,
  getDescriptionCurrentItemFromDB,
  removeItemFromListItem,
  removeItemFromRemovedListItem,
  setRecoverDataForItem,
  setRemoveDataForItem, setStatusForItemInListItems, setStatusForItemInRemovedListItems,
} from "../../Redux/store/Item/Item.actions";
import {Box} from "@material-ui/core";

type CardItemProps = {
  item: ItemInterface,
	basePath:string
	dispatch: any
	className: string
}

const CardItem: React.FunctionComponent<CardItemProps> = ({ item, basePath, dispatch, className }) => {

  useEffect(()=>{console.log('hi')}, [item])

  const handleToggle = (e:any, removed:boolean) => {
  	// e.stopPropagation()
    if(!removed) {
      dispatch(setStatusForItemInListItems(item.id))
      dispatch(setRemoveDataForItem(item.id, new Date().toString().slice(0,24)))
      dispatch(removeItemFromListItem(item.id))
      dispatch(concatItemToRemovedListItems(item))
    } else {
      dispatch(setStatusForItemInRemovedListItems(item.id))
      dispatch(setRecoverDataForItem(item.id, new Date().toString().slice(0,24)))
      dispatch(removeItemFromRemovedListItem(item.id))
      dispatch( concatItemToListItems(item))
    }
  }
  return (
    <li
      onClick={() =>
        !item.removed && dispatch(getDescriptionCurrentItemFromDB(basePath, item.more))
      }
      className={`${className} cardItemContainer`}
    >
      <Box component="div" className={'cardItemContainer_info'}>
        <div> {`name: ${item.name}`} </div>
        <div> {`info: ${item.shortInfo}`} </div>
      </Box>
      <Box component="div" className={'cardItemContainer_remove'}>
        <input type="checkbox" onChange={(e)=>handleToggle(e, item.removed || false)}
							 checked={item.removed || false}/>
        <p>
          {(item.removed !== undefined && !item.removed && `recover data: ${item.recoveredData}`) ||
					(item.removed && `remove data: ${item.removedData}`)}
        </p>
      </Box>
    </li>
  )
}

export default CardItem
