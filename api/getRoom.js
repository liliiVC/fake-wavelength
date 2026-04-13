import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { gameCode } = req.query;

  try {
    const { data, error } = await supabase
      .from('games')
      .select('*')      
      .eq('code', gameCode)
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Send the created game room back to the React frontend
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
