import { DateTime } from 'luxon';
import axios from 'axios';
import Game from '../model/Game';
import { API_BASE_PATH } from '../config/apiConfig';

export default {
  async fetchGames(): Promise<Game[]> {
    const response = await axios.get(`${API_BASE_PATH}/game`);
    if (response.data) {
      return response.data.map((game: any) => ({
        ...game,
        year: DateTime.fromISO(game.year),
        completionDate: DateTime.fromISO(game.completionDate),
      }));
    }
    return [];
  },

  async addGame(game: any): Promise<Game> {
    const response = await axios.post(`${API_BASE_PATH}/game`, game);
    return response.data;
  },
};
