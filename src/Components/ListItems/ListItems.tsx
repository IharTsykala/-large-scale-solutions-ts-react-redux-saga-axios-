import React, {useEffect} from "react"
import { connect } from "react-redux"
import { getListItemsFromDB } from "../../Redux/store/Item/Item.actions"
import {ItemInterface} from "../../Redux/InterfacesEntity/Item.interface"
import {DescriptionItemInterface} from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import List from "@material-ui/core/List"
import Box from "@material-ui/core/Box"
import CardItem from "../CardItem/CardItem";

const stateLoading:string = 'loaded'

type ListItemsProps = {
	listItems: [ItemInterface]
	descriptionItem: DescriptionItemInterface
	basePath: string
	dispatch: any
}

const ListItems: React.FunctionComponent<ListItemsProps> = ({
  listItems,
  descriptionItem,
  basePath,
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
							listItems.map((item: ItemInterface) => (
							  <CardItem item={item} basePath={basePath} dispatch={dispatch} key={item.id}/>
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
  basePath: state.item.basePath
})

export default connect(mapStateToProps)(ListItems)
