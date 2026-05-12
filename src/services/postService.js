import { postRepository } from "../repositories/postRepository";
import { API_CONSTANTS, UI_STRINGS } from "../constants/constants";

// In-memory cache for the service layer
const cache = new Map();

/**
 * Service Layer:
 * Contains business logic, validation, and orchestrates repository calls.
 */
export const postService = {
  /**
   * Retrieves all posts with caching logic.
   */
  getPosts: async (signal) => {
    const cacheKey = API_CONSTANTS.CACHE_KEYS.ALL_POSTS;
    
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    try {
      const data = await postRepository.fetchAll(signal);
      
      // Business Logic: Only cache if we have data
      if (Array.isArray(data) && data.length > 0) {
        cache.set(cacheKey, data);
      }
      
      return data;
    } catch (error) {
      if (error.name === 'AbortError') throw error;
      
      // Error Logic: Map technical errors to user-friendly messages
      console.error("[PostService] getPosts error:", error);
      throw new Error(UI_STRINGS.ERRORS.GENERIC);
    }
  },

  /**
   * Retrieves a single post with validation and caching.
   */
  getPostById: async (id, signal) => {
    if (!id) throw new Error("ID is required.");

    const cacheKey = `${API_CONSTANTS.CACHE_KEYS.SINGLE_POST}${id}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    try {
      const data = await postRepository.fetchById(id, signal);
      cache.set(cacheKey, data);
      return data;
    } catch (error) {
      if (error.name === 'AbortError') throw error;
      throw new Error(UI_STRINGS.ERRORS.NOT_FOUND);
    }
  }
};
