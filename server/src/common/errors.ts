export class NotFoundError extends Error {
  constructor(entity: string) {
    super();
    this.message = `The ${entity} with the given ID was not found`;
  }
}

export class InvalidParameterError extends Error {
  constructor(public parameterName: string) {
    super();
    this.message = `Incorrect value for the ${parameterName} parameter`;
  }
}
