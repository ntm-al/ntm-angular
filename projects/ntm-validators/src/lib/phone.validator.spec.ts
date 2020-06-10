import { ValidatePhone } from './phone.validator'

describe('ValidatePhone', () => {
  it('shoud validate phone with 8 digits - homecell', () => {
    const arr = {
      input: "11 3232-9998"
    }
    expect(ValidatePhone.valid_cell_phone(arr.input)).toBe(null);
  });

  it('shoud validate phone with 9 digits - cell', () => {
    const arr = {
      input: "82 99999-9998",
    }
    expect(ValidatePhone.valid_cell_phone(arr.input)).toBe(null);
  });

  it('shoud not validate invalid phone with 9 digits - cell', () => {
    const arr = {
      input: "82 33999-9998",
      input2: "82 92999-9998",
    }
    expect(ValidatePhone.valid_cell_phone(arr.input)).not.toBe(null);
    expect(ValidatePhone.valid_cell_phone(arr.input2)).not.toBe(null);
  });


  it('shoud not validate invalid phone with 8 digits - homecell', () => {
    const arr = {
      input: "82 8899-9998",
      input2: "82 9899-9998",
      input3: "82 7096-9998",
    }
    expect(ValidatePhone.valid_cell_phone(arr.input)).not.toBe(null);
    expect(ValidatePhone.valid_cell_phone(arr.input2)).not.toBe(null);
    expect(ValidatePhone.valid_cell_phone(arr.input3)).not.toBe(null);
  });


  it('shoud not validate invalid ddd phone', () => {
    const arr = {
      input: "10 98899-9998",
      input2: "07 3655-9998",
      input3: "09 3396-9998",
    }
    expect(ValidatePhone.valid_cell_phone(arr.input)).not.toBe(null);
    expect(ValidatePhone.valid_cell_phone(arr.input2)).not.toBe(null);
    expect(ValidatePhone.valid_cell_phone(arr.input3)).not.toBe(null);
  });
});
