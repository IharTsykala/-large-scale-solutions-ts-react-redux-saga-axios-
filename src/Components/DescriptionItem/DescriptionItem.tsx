import React from "react"
import { connect } from "react-redux"
import { DescriptionItemInterface } from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import { ItemInterface } from "../../Redux/InterfacesEntity/Item.interface"
import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const stateLoading: string = "loaded"

type DescriptionItemProps = {
  listItems: ItemInterface,
  descriptionItem: DescriptionItemInterface,
  currentItem: ItemInterface,
  basePath: string,
  dispatch: any,
}

const DescriptionItem: React.FunctionComponent<DescriptionItemProps> = ({
  listItems, // make re-render
  descriptionItem,
  currentItem,
  basePath,
}) => {
  return (
    <>
      {stateLoading === "loading" && <h1>loading</h1>}
      {stateLoading === "loaded" &&
        ((!descriptionItem.id && (
          <Typography
            variant="h3"
            gutterBottom
            className={"descriptionItemContainer_choose_item"}
          >
            Choose item!
          </Typography>
        )) ||
          (currentItem.removed && (
            <Typography
              variant="h3"
              gutterBottom
              className={"descriptionItemContainer_choose_another_item"}
            >
              This item had removed, choose another!
            </Typography>
          )) ||
          (!currentItem.removed && (
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
                <Typography variant="h5" gutterBottom>
                  {currentItem.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {currentItem.shortInfo}
                </Typography>
              </Box>
              <Box
                component="div"
                display="grid"
                className={"descriptionItemContainer_bio"}
              >
                <Typography variant="body1" gutterBottom>
                  {descriptionItem.bio}
                </Typography>
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
