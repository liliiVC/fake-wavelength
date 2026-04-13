import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { hostId } = req.body;

  try {
    const { data: game, error: gameError } = await supabase
      .from('games')
      .insert([{ host_id: hostId, rounds: 0 }])
      .select()
      .single();

    if (gameError) throw gameError;

    const { error: userError } = await supabase
      .from('users')
      .update({ game_id: game.code })
      .eq('id', hostId);

    if (userError) throw userError;

    // Send the created game room back to the React frontend
    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
