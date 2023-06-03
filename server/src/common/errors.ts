export class NotFoundError extends Error {
  name = 'Not found';
  message: string;

  /**
   *
   */
  constructor(entity: string) {
    super();
    this.message = `The ${entity} with the given ID was not found`;
  }
}
