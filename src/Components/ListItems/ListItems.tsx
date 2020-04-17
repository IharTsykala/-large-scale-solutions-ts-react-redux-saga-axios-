import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  getListItemsFromDB,
  setStateFromLocalStorage,
} from "../../Redux/store/Item/Item.actions"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import { DescriptionItemInterface } from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import List from "@material-ui/core/List"
import Box from "@material-ui/core/Box"
import CardItem from "../CardItem/CardItem"

const stateLoading: string = "loaded"

type ListItemsProps = {
  state: {},
  listItems: [ItemInterface],
  removedListItems: [ItemInterface],
  descriptionItem: DescriptionItemInterface,
  basePath: string,
  dispatch: any,
}

const ListItems: React.FunctionComponent<ListItemsProps> = ({
  state,
  listItems,
  removedListItems,
  descriptionItem,
  basePath,
  dispatch,
}) => {
  useEffect(() => {
    const state = JSON.parse(
      localStorage.getItem("state") || '{"empty": "state"}'
    )
    if (!state.empty) dispatch(setStateFromLocalStorage(state))
    else dispatch(getListItemsFromDB())
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state))
  }, [state])

  return (
    <>
      {stateLoading === "loading" && <h1>loading</h1>}
      {stateLoading === "loaded" && (
        <Box component="div" display="grid" className={"listItemsContainer"}>
          <List className={"listItemsContainer_list"}>
            {listItems &&
              listItems.length > 0 &&
              listItems[0].id &&
              listItems
                .concat(removedListItems)
                .map(
                  (item: ItemInterface) =>
                    (!item.removed && (
                      <CardItem
                        item={item}
                        basePath={basePath}
                        dispatch={dispatch}
                        key={item.id}
                        className={"active_cart_item"}
                      />
                    )) ||
                    (item.removed && (
                      <CardItem
                        item={item}
                        basePath={basePath}
                        dispatch={dispatch}
                        key={item.id}
                        className={"remove_cart_item"}
                      />
                    ))
                )}
          </List>
        </Box>
      )}
      {stateLoading === "notFound" && <h1>not found</h1>}
      {stateLoading === "error" && <h1>error</h1>}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  state: state.item,
  listItems: state.item.listItems,
  removedListItems: state.item.removedListItems,
  descriptionItem: state.item.descriptionItem,
  basePath: state.item.basePath,
})

export default connect(mapStateToProps)(ListItems)
