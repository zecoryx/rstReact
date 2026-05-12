export const API_CONSTANTS = {
  BASE_URL: "https://jsonplaceholder.typicode.com",
  ENDPOINTS: {
    POSTS: "/posts",
    USERS: "/users",
  },
  CACHE_KEYS: {
    ALL_POSTS: "all_posts",
    SINGLE_POST: "post_",
    ALL_USERS: "all_users",
  }
};

export const UI_STRINGS = {
  ERRORS: {
    GENERIC: "Tizimda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.",
    FETCH_POSTS: "Ma'lumotlarni yuklashda xatolik yuz berdi.",
    NOT_FOUND: "Ma'lumot topilmadi.",
    ABORT: "So'rov bekor qilindi.",
  },
  LOADERS: {
    DEFAULT: "Yuklanmoqda... Kuting",
  }
};

export const APP_CONFIG = {
  MAX_RETRY_ATTEMPTS: 3,
  DEFAULT_DEBOUNCE_DELAY: 300,
};
