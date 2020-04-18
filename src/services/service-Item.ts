const axios = require("axios")

export default class ServiceItem {
  static getListItemsFromDB = async () => {
    try {
      const response = await axios.get(
        `${"https://cors-anywhere.herokuapp.com/"}https://mrsoft.by/tz20/list.json`
      )
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  static getDescriptionCurrentItemFromDB = async (
    basePath: string,
    userLink: string
  ) => {
    try {
      const response = await axios.get(
        `${"https://cors-anywhere.herokuapp.com/"}${basePath}${userLink}`
      )
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}
