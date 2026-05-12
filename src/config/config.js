import { API_CONSTANTS } from "../constants/constants";

/**
 * Config Wrapper:
 * Validates and exports all application configurations centrally.
 */
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || API_CONSTANTS.BASE_URL,
    timeout: 5000,
  },
  isDev: import.meta.env.MODE === "development",
};

// Validation
if (!config.api.baseUrl) {
  console.warn("Warning: API Base URL is not defined.");
}
