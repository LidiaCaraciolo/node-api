export default class HttpError extends Error {
  constructor(message, statusCode, data) {
    super(message)
    this.statusCode = statusCode
    this.data = data
  }
}
