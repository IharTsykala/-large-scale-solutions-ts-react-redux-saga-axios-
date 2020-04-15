const axios = require("axios")

export default class ServiceMessage {
  static getAllMessagesByIdDialog = async (idDialog: string) => {
    try {
      const request = await axios.get(
        `http://localhost:8080/messages/${idDialog}`
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }
}
