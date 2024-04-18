// Unknown type
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Anh';
if (typeof userInput === 'string') userName = userInput;

// Never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true){}
}

generateError('An error occurred', 500);
