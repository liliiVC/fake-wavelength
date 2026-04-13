import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  console.log("API hit: createUser");

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, gameId } = req.body;
  console.log("Attempting to create user with name:", name);

  const finalGameId = gameId && gameId !== "" ? gameId : null;

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name: name, game_id: finalGameId }])
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error.message);
      return res.status(400).json({ error: error.message });
    }
    console.log("User created successfully:", data.id);

    // Send the created user back to the React frontend
    return res.status(200).json(data);
  } catch (error) {
    console.error("Server Crash:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
