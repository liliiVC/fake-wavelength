/**
 * A shared helper for POST requests to our Vercel API
 * @param {string} endpoint - The API path (e.g., '/api/createUser')
 * @param {object} body - The data to send
 */
export async function apiPost(endpoint, body) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  // If the server returned an error (400, 500, etc.), throw it
  if (!response.ok) {
    throw new Error(data.error || `HTTP error! status: ${response.status}`);
  }

  return data;
}

/**
 * A shared helper for GET requests to our Vercel API
 * @param {string} endpoint - The API path (e.g., '/api/getRoom')
 * @param {object} params - The query parameters to append to the URL
 */
export async function apiGet(endpoint, params = {}) {
  // 1. Convert the params object into a query string
  const queryString = new URLSearchParams(params).toString();
  
  // 2. Append query string to endpoint if params exist
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || `HTTP error! status: ${response.status}`);
  }

  return data;
}
