import React from "react"
import { connect } from "react-redux"
import { DescriptionItemInterface} from "../../Redux/InterfacesEntity/DescriptionItem.interface"
import Box from "@material-ui/core/Box";
// import List from "@material-ui/core/List";
// import {ItemInterface} from "../../Redux/InterfacesEntity/Item.interface";
// import ListItem from "@material-ui/core/ListItem";
// import {getDescriptionCurrentItemFromDB} from "../../Redux/store/Item/Item.actions";
// import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const stateLoading:string = 'loaded'

type DescriptionItemProps = {
	descriptionItem: DescriptionItemInterface
	basePath: string
	dispatch: any
}

const DescriptionItem: React.FunctionComponent<DescriptionItemProps> = ({
  descriptionItem,
  basePath,
  dispatch
}) => {
  return (
    <>
      {stateLoading === "loading" && <h1>Ожидайте ответа</h1>}
      {stateLoading === "loaded" && (
        <Box
          component="div"
          display="grid"
          className={'descriptionItemContainer'}
        >
          {descriptionItem&&descriptionItem.bio && `${descriptionItem.bio}`}
          {descriptionItem&&descriptionItem.pic && <img src={`${basePath}${descriptionItem.pic}`}/>}
        </Box>
      )}
      {stateLoading === "notFound" && <h1>not found</h1>}
      {stateLoading === "error" && <h1>ошибка</h1>}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  descriptionItem: state.item.descriptionItem,
  basePath: state.item.basePath,
})

export default connect(mapStateToProps)(DescriptionItem)
