export const fetchTableData = async () => {
  return [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Keyboard', price: 100 },
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
