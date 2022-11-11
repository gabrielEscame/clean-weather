export class UnexpectedError extends Error {
  constructor() {
    super('Somthing went wrong, please try again.')
    this.name = 'UnexpectedError'
  }
}
