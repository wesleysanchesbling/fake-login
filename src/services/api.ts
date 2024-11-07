export const fetchUsers = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_EXAMPLE_BASE_URL}/users`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
