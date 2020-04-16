const axios = require("axios")

export default class ServiceItem {
  // static interceptor = axios.interceptors.request.use(
  //   function (config: any) {
  //     const token = localStorage.getItem("token")
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`
  //     }
  //     return config
  //   },
  //   function (error: string) {
  //     return Promise.reject(error)
  //   }
  // )

  static getListItemsFromDB = async () => {
    try {
      const response = await axios.get(`https://mrsoft.by/tz20/list.json`)
      return response
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
