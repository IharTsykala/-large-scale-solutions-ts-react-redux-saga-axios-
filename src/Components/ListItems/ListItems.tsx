import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { getListItemsFromDB } from "../../Redux/store/Item/Item.actions"
import { Item } from "../../Redux/InterfacesEntity/Item.interface"
import { DescriptionItem } from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Box from "@material-ui/core/Box"

const stateLoading:string = 'loaded'

type ListItemsProps = {
	listItems: [Item]
	descriptionItem: DescriptionItem
	dispatch: any
}

const ListItems: React.FunctionComponent<ListItemsProps> = ({
  listItems,
  descriptionItem,
  dispatch
}) => {

  useEffect(()=>{
    dispatch(getListItemsFromDB())
  },[dispatch])

  return (
    <>
      {stateLoading === "loading" && <h1>Ожидайте ответа</h1>}
      {stateLoading === "loaded" && (
        <Box
          component="div"
          display="grid"
          className={'listItemsContainer'}
        >
          <List
            className={
              'listItemsContainer_list'
            }
          >
            {(listItems.length > 0 &&
							listItems[0].id &&
							listItems.map((item: Item) => (
							  <ListItem
							    key={item.id}
							    button
							    // onClick={() => dispatch(setCurrentDialogInStore(dialog))}
							  >
							    <ListItemText
							      id={item.id}
							      primary={`${item.name}`}
							    />
							    <ListItemText
							      id={item.id}
							      primary={`${item.shortInfo}`}
							    />
							  </ListItem>
							)))}

          </List>
        </Box>
      )}
      {stateLoading === "notFound" && <h1>not found</h1>}
      {stateLoading === "error" && <h1>ошибка</h1>}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  listItems: state.item.listItems,
  descriptionItem: state.item.descriptionItem,
})

export default connect(mapStateToProps)(ListItems)
