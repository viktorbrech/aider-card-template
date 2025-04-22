exports.main = async (context = {}) => {
  const { parameters } = context;

  if (!parameters || !('switch' in parameters) || typeof parameters.switch !== 'string') {
    return null;
  }

  switch (parameters.switch) {
    case 'handler1':
      return 'Handler 1 executed!';
    case 'handler2':
      return 'Handler 2 executed!';
    case 'handler3':
      return 'Handler 3 executed!';
    default:
      return `Unknown handler: ${parameters.switch}`;
  }
};
