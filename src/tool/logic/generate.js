import { UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS } from '../constants.js';

export function generatePasswords(options) {
    const { length = 16, upper = true, lower = true, numbers = true, symbols = true, excludeChars = '', count = 1 } = options;
    let charset = '';
    if (upper) charset += UPPERCASE;
    if (lower) charset += LOWERCASE;
    if (numbers) charset += NUMBERS;
    if (symbols) charset += SYMBOLS;
    
    if (excludeChars) {
        charset = charset.split('').filter(c => !excludeChars.includes(c)).join('');
    }
    
    if (!charset) return [];
    
    const results = [];
    for (let i = 0; i < count; i++) {
        let password = '';
        for (let j = 0; j < length; j++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }
        results.push(password);
    }
    return results;
}
