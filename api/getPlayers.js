import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { gameCode } = req.query;

  if (!gameCode) {
    return res.status(400).json({ error: 'gameCode is required' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')      
      .eq('game_id', gameCode);

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
