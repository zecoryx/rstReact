import { config } from "../config/config";
import { UI_STRINGS } from "../constants/constants";

/**
 * Repository Pattern:
 * Strictly for raw data-access queries.
 */
export const postRepository = {
  /**
   * Fetches all posts from the remote source.
   * @param {AbortSignal} signal 
   */
  fetchAll: async (signal) => {
    const response = await fetch(`${config.api.baseUrl}/posts`, { signal });
    if (!response.ok) throw new Error(UI_STRINGS.ERRORS.FETCH_POSTS);
    return await response.json();
  },

  /**
   * Fetches a single post by ID.
   * @param {string|number} id 
   * @param {AbortSignal} signal 
   */
  fetchById: async (id, signal) => {
    const response = await fetch(`${config.api.baseUrl}/posts/${id}`, { signal });
    if (!response.ok) throw new Error(UI_STRINGS.ERRORS.NOT_FOUND);
    return await response.json();
  }
};
