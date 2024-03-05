const BASE_URL = 'http://127.0.0.1:8000/dpred/predict/'; // Update with your Django server URL

export async function predictDisease(symptoms) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptoms }),
    });

    if (!response.ok) {
      throw new Error('Failed to predict disease');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
