const preventNonAlphabeticInput = require('../preventNonAlphInput');
  
  test('Allows spaces', () => {
    const event = { key: ' ', preventDefault: jest.fn() };
    preventNonAlphabeticInput(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
  
  test('Prevents non-alphabetic characters', () => {
    const event = { key: '1', preventDefault: jest.fn() };
    preventNonAlphabeticInput(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
  
  test('Prevents non-alphabetic characters including spaces', () => {
    const event = { key: '@', preventDefault: jest.fn() };
    preventNonAlphabeticInput(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });