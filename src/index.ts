
export class MissingEnvironmentVariableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MissingEnvironmentVariableError';
  }
}

export class MissingInputVariableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MissingInputVariableError';
  }
}

export class InvalidEnvironmentVariableFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidEnvironmentVariableFormatError';
  }
}

export class InvalidInputVariableFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInputVariableFormatError';
  }
}
