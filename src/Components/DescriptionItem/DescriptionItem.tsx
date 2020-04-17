import React, { useEffect } from "react"
import { connect } from "react-redux"
import { DescriptionItemInterface } from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import Box from "@material-ui/core/Box"
// import List from "@material-ui/core/List";
// import {ItemInterface} from "../../Redux/InterfacesEntity/Item.interface";
// import ListItem from "@material-ui/core/ListItem";
// import {getDescriptionCurrentItemFromDB} from "../../Redux/store/Item/Item.actions";
// import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Avatar from "@material-ui/core/Avatar"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"

const stateLoading: string = "loaded"

type DescriptionItemProps = {
  listItems: ItemInterface,
  descriptionItem: DescriptionItemInterface,
  currentItem: ItemInterface,
  basePath: string,
  dispatch: any,
}

const DescriptionItem: React.FunctionComponent<DescriptionItemProps> = ({
  listItems,
  descriptionItem,
  currentItem,
  basePath,
  dispatch,
}) => {
  useEffect(() => {}, [currentItem.removed, listItems])

  return (
    <>
      {stateLoading === "loading" && <h1>loading</h1>}
      {stateLoading === "loaded" &&
        ((!descriptionItem.id && <h3>Choose item!</h3>) ||
          (descriptionItem && currentItem.removed && (
            <h3>This item had removed, choose another!</h3>
          )) ||
          (descriptionItem && !currentItem.removed && (
            <Box
              component="div"
              display="grid"
              className={"descriptionItemContainer"}
            >
              <Box
                component="div"
                display="grid"
                className={"descriptionItemContainer_name_and_avatar"}
              >
                <Avatar
                  alt="Cat"
                  src={`${basePath}${descriptionItem.pic}`}
                  className={"descriptionItemContainer_avatar"}
                />
                <h4>{currentItem.name}</h4>
                <p>{currentItem.shortInfo}</p>
              </Box>
              <Box
                component="div"
                display="grid"
                className={"descriptionItemContainer_bio"}
              >
                {" "}
                {descriptionItem.bio}
              </Box>
            </Box>
          )))}
      {stateLoading === "notFound" && <h1>not found</h1>}
      {stateLoading === "error" && <h1>error</h1>}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  listItems: state.item.listItems,
  descriptionItem: state.item.descriptionItem,
  currentItem: state.item.currentItem,
  basePath: state.item.basePath,
})

export default connect(mapStateToProps)(DescriptionItem)
