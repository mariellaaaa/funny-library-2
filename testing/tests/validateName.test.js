const validateName = require('../validateName');

test('Valid name with single word starting with uppercase', () => {
  expect(validateName('John')).toBe(true);
});

test('Valid name with multiple words starting with uppercase', () => {
  expect(validateName('John Doe')).toBe(true);
});

test('Invalid name with single word starting with lowercase', () => {
  expect(validateName('john')).toBe(false);
});

test('Invalid name with special characters', () => {
  expect(validateName('John@Doe')).toBe(false);
});

test('Invalid name with numbers', () => {
  expect(validateName('John123')).toBe(false);
});

test('Invalid name with consecutive spaces', () => {
  expect(validateName('John  Doe')).toBe(false);
});

test('Invalid name with empty string', () => {
  expect(validateName('')).toBe(false);
});

