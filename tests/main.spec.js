import { isEven, weekFn, ageClassification } from '../main.js';

describe('function isEven', () => {

  it('should return true if the number is even', () => {
    expect(isEven(2)).toBe(true);
  });

  it('should return false if the number is odd', () => {
    expect(isEven(3)).toBe(false);
  });

  it('should return error if number is string', () => {
    expect(() => isEven('string')).toThrow('Invalid input, pls enter a number');
  });

  it('should return error if number is NaN', () => {
    expect(() => isEven(NaN)).toThrow('Invalid input, pls enter a number');
  });

  it('should return error if number is undefined', () => {
    expect(() => isEven(undefined)).toThrow('Invalid input, pls enter a number');
  });

  it('should return error if number is boolean', () => {
    expect(() => isEven(true)).toThrow('Invalid input, pls enter a number');
  });

  it('should return error if number is boolean', () => {
    expect(() => isEven()).toThrow('Invalid input, pls enter a number');
  });
});


describe('function weekFn', () => {
  it('should return Monday if the number is 1', () => {
    expect(weekFn(1)).toBe('Понеділок');
  });

  it('should return Tuesday if the number is 2', () => {
    expect(weekFn(2)).toBe('Вівторок');
  });

  it('should return Wednesday if the number is 3', () => {
    expect(weekFn(3)).toBe('Середа');
  });

  it('should return Thursday if the number is 4', () => {
    expect(weekFn(4)).toBe('Четвер');
  });

  it('should return Friday if the number is 5', () => {
    expect(weekFn(5)).toBe('П\'ятниця');
  });

  it('should return Saturday if the number is 6', () => {
    expect(weekFn(6)).toBe('Субота');
  });

  it('should return Sunday if the number is 7', () => {
    expect(weekFn(7)).toBe('Неділя');
  });

  it('should return null if the number is 9', () => {
    expect(weekFn(9)).toBe(null);
  });

  it('should return null if the number is 1.5', () => {
    expect(weekFn(1.5)).toBe(null);
  });

  it('should return null if the number is string', () => {
    expect(weekFn('2')).toBe('Вівторок');
  });

  it('should return null if the number is undefined', () => {
    expect(weekFn(undefined)).toBe(null);
  });

  it('should return null if the number is boolean', () => {
    expect(weekFn(NaN)).toBe(null);
  });

  it('should return null in number is array or object', () => {
    expect(weekFn([])).toBe(null);
  });
});



describe('ageClassification', () => {
  it('should return null for negative values', () => {
    expect(ageClassification(-1)).toBeNull();
  });

  it('should return null for 0', () => {
    expect(ageClassification(0)).toBeNull();
  });

  it('should return "Дитинство" for ages between 1 and 24 (inclusive)', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
  });

  it('should return "Молодість" for ages greater than 24 and up to 44', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  it('should return "Зрілість" for ages greater than 44 and up to 65', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  it('should return "Старість" for ages greater than 65 and up to 75', () => {
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  it('should return "Довголіття" for ages greater than 75 and up to 90', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  it('should return "Рекорд" for ages greater than 90 and up to 122', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });

  it('should return null for ages above 122', () => {
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
  });

  it('should return null for non-number input', () => {
    expect(ageClassification("30")).toBeNull();
    expect(ageClassification(null)).toBeNull();
    expect(ageClassification(undefined)).toBeNull();
    expect(ageClassification(true)).toBeNull();
    expect(ageClassification({})).toBeNull();
  });
});