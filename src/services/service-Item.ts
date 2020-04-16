const axios = require("axios")

export default class ServiceItem {
  static getListItemsFromDB = async () => {
    try {
      const response = await axios(`https://mrsoft.by/tz20/list.json`)
      console.log(response)
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
      const response = await axios.get(`${basePath}${userLink}`)
      return response
    } catch (e) {
      console.log(e)
    }
  }
}
