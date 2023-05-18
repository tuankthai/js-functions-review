const {
    multiplyByTwo,
    squareNumbers,
    filterEvenNumbers,
    sortNumbers,
    calculateSum,
  } = require('./functions.js');
  
  describe('multiplyByTwo', () => {
    it('should multiply each number in the array by 2', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(multiplyByTwo(numbers)).toEqual([2, 4, 6, 8, 10]);
    });
  });
  
  describe('squareNumbers', () => {
    it('should square each number in the array', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(squareNumbers(numbers)).toEqual([1, 4, 9, 16, 25]);
    });
  });
  
  describe('filterEvenNumbers', () => {
    it('should filter out the even numbers from the array', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(filterEvenNumbers(numbers)).toEqual([2, 4]);
    });
  });
  
  describe('sortNumbers', () => {
    it('should sort the numbers in ascending order', () => {
      const numbers = [5, 3, 1, 4, 2];
      expect(sortNumbers(numbers)).toEqual([1, 2, 3, 4, 5]);
    });
  });
  
  describe('calculateSum', () => {
    it('should calculate the sum of all the numbers in the array', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(calculateSum(numbers)).toEqual(15);
    });
  });
  