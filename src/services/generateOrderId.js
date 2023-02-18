const NUMBERS = '0123456789';
const PASS_LENGTH = 7;

export const generateId = () => {
  let password = ['M'];

  for (let i = 0; i < PASS_LENGTH; i += 1) {
    const idx = Math.round(Math.random() * (NUMBERS.length - 2) + 1);
    password.push(NUMBERS[idx]);
  }

  return password.join('');
};
