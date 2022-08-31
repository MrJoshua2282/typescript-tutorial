let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Josh'
if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number): never { // clear that this never turns everything
  throw { message, errorCode: code }
}

// generateError('An error occurred', 500)