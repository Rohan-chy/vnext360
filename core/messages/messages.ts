export const MESSAGES = {
  // Authentication
  AUTH: {
    LOGIN_SUCCESS: 'Login successful',
    LOGIN_FAILED: 'Invalid credentials',
    LOGOUT_SUCCESS: 'Logged out successfully',
    PASSWORD_CHANGED: 'Password changed successfully',
    PASSWORD_RESET: 'Check your email for a link to reset your password.',
    UNAUTHORIZED: 'You are not authorized',
    SESSION_EXPIRED: 'Session expired. Please login again',
  },

  // User
  USER: {
    CREATE_SUCCESS: 'User created successfully',
    UPDATE_SUCCESS: 'User updated successfully',
    DELETE_SUCCESS: 'User deleted successfully',
    NOT_FOUND: 'User not found',
  },

  // CRUD Generic
  CRUD: {
    CREATE_SUCCESS: 'Added successfully',
    UPDATE_SUCCESS: 'Updated successfully',
    DELETE_SUCCESS: 'Deleted successfully',
    FETCH_SUCCESS: 'Fetched successfully',
    FETCH_ERROR: 'Failed to fetch data',
  },

  // API / Server
  API: {
    NETWORK_ERROR: 'Network error. Check your connection',
    SERVER_ERROR: 'Server error. Please try later',
    TIMEOUT: 'Request timed out',
    BAD_REQUEST: 'Invalid request',
  },

  // Form Validation
  VALIDATION: {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Invalid email address',
    PASSWORD_MIN: 'Password must be at least 6 characters',
    PASSWORD_MISMATCH: 'Passwords do not match',
  },
};
