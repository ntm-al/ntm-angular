import { ValidateEmail } from './email.validator';

describe('ValidateEmail', () => {
  it('shoud validate email with simple domain', () => {
    const arr = {
      input: 'leonardovff@gmail.com'
    };
    expect(ValidateEmail.valid_email(arr.input)).toBe(true);
  });

  it('shoud validate email with complex domain', () => {
    const arr = {
      input: 'leonardovff@gmail.com.br'
    };
    expect(ValidateEmail.valid_email(arr.input)).toBe(true);
  });
  it('shoud validate complex email with complex domain', () => {
    const arr = {
      input: 'leonardo.ferreira.teste922@gmail.com.br'
    };
    expect(ValidateEmail.valid_email(arr.input)).toBe(true);
  });

  it('shoud not validate invalid domain email', () => {
    const arr = {
      input: 'leonardo.ferreira.teste922@gmail'
    };
    expect(ValidateEmail.valid_email(arr.input)).toBe(false);
  });

  it('shoud not validate invalid name email', () => {
    const arr = {
      input: 'leona@rdd@gmail.com'
    };
    expect(ValidateEmail.valid_email(arr.input)).toBe(false);
  });
});
