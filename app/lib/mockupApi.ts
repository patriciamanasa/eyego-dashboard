export const fetchTableData = async () => {
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28 },
  ];
};

export const fetchChartData = async () => {
  return [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 200 },
  ];
};

export const loginApi = async ({ email, password }: { email: string; password: string }) => {
  // Fake login check
  if (email === 'test@example.com' && password === 'password') {
    return {
      name: 'Test User',
      email: 'test@example.com',
    };
  } else {
    throw new Error('Invalid credentials');
  }
};
