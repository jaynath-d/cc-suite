import CCSuite from '../src/index';

describe('CCSuite', () => {

  // Tests that validateCard returns true for a valid card number
  it('should return true when a valid card number is provided', () => {
    const validCardNumber = '4242424242424242';
    const result = CCSuite.validateCard(validCardNumber);
    expect(result).toBe(true);
  });

  // Tests that validateCard returns false for an invalid card number
  it('should return false when an invalid card number is provided', () => {
    const invalidCardNumber = '4111111111111112';
    const result = CCSuite.validateCard(invalidCardNumber);
    expect(result).toBe(false);
  });

  // Tests that validateCard returns false for an empty string
  it('should return false when an empty string is provided', () => {
    const cardNumber = '';
    const result = CCSuite.validateCard(cardNumber);
    expect(result).toBe(false);
  });

   // Tests that validateCard handles card numbers with spaces or dashes
   it('should return true when a valid card number with spaces or dashes is passed', () => {
    const result = CCSuite.validateCard('4111-1111-1111-1111');
    expect(result).toBe(true);
  });

  // Tests that generateRandomCard generates a card number with a specific prefix and length
  it('should generate a card number with a specific prefix and length', () => {
    const result = CCSuite.generateRandomCard('4111', 16);
    expect(result).toMatch(/^4111[0-9]{12}$/);
  });

  it('should generate a valid card number with the given bin and length', () => {
    const bin = '4242';
    const length = 16;
    const result = CCSuite.generateRandomCard(bin, length);
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(true);
  });

  it('should generate a valid card number with the default bin and length', () => {
    const result = CCSuite.generateRandomCard('', 16);
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(true);
  });

  it('should generate a valid card number with the default bin and default length', () => {
    const result = CCSuite.generateRandomCard();
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(true);
  });

  it('should not generate a card number with an invalid bin', () => {
    const bin = 'abc';
    const length = 16;
    const result = CCSuite.generateRandomCard(bin, length);
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(false);
  });

  it('should not generate a card number with an invalid length', () => {
    const bin = '123456';
    const length = 10;
    const result = CCSuite.generateRandomCard(bin, length);
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(false);
  });

});
