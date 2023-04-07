import { MissingEnvironmentVariableError, MissingInputVariableError, InvalidEnvironmentVariableFormatError, InvalidInputVariableFormatError } from '../src';

describe('Errors', () => {

  it('Should error cause Missing Environment Variable Error', () => {
    const func = () => {
      throw new MissingEnvironmentVariableError('missing environment variable XXX.');
    };
    expect(func).toThrowError(MissingEnvironmentVariableError);
  });

  it('Should error cause Missing Input Variable Error', () => {
    const func = () => {
      throw new MissingInputVariableError('missing input variable XXX.');
    };
    expect(func).toThrowError(MissingInputVariableError);
  });

  it('Should error cause Invalid Environment Variable Format Error', () => {
    const func = () => {
      throw new InvalidEnvironmentVariableFormatError('input environment variable format XXX.');
    };
    expect(func).toThrowError(InvalidEnvironmentVariableFormatError);
  });

  it('Should error cause Invalid Input Variable Format Error', () => {
    const func = () => {
      throw new InvalidInputVariableFormatError('invalid input variable format XXX.');
    };
    expect(func).toThrowError(InvalidInputVariableFormatError);
  });
});