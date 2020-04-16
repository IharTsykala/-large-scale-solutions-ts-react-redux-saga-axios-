import React, {useEffect, useState} from "react"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import {getDescriptionCurrentItemFromDB, setStateRemovedItemInStore} from "../../Redux/store/Item/Item.actions";
import {Box} from "@material-ui/core";

type CardItemProps = {
  item: ItemInterface,
	basePath:string
	dispatch: any
}

const CardItem: React.FunctionComponent<CardItemProps> = ({ item, basePath, dispatch }) => {

  useEffect(()=>{}, [item.removed])

  const handleToggle = (itemId: string) => () => {
    console.log(Date.now().getFullYear())
    dispatch(setStateRemovedItemInStore(itemId))

  }
  return (
    <li
      onClick={() =>
        dispatch(getDescriptionCurrentItemFromDB(basePath, item.more))
      }
      className={'cardItemContainer'}
    >
      <Box component="div" className={'cardItemContainer_info'}>
        <div> {`name: ${item.name}`} </div>
        <div> {`info: ${item.shortInfo}`} </div>
      </Box>
      <Box component="div" className={'cardItemContainer_remove'}>
        <input type="checkbox" onChange={handleToggle(item.id)}
							 checked={item.removed || false}/>
        <p>'change data'</p>
      </Box>
    </li>
  )
}

export default CardItem
