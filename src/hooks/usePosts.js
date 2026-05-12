import { useState, useEffect } from "react";
import { postService } from "../services/postService";

/**
 * Controller (Hook):
 * Handles UI-related request logic and state orchestration.
 */
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        setLoading(true);
        const data = await postService.getPosts(controller.signal);
        setPosts(data);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, []);

  return { posts, loading, error };
};
