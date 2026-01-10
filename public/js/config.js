/**
 * CloudDrop - Unified Configuration
 * All application constants and settings in one place
 */

// =============================================================================
// Application Info
// =============================================================================
export const APP = {
  NAME: 'CloudDrop',
  VERSION: '1.0.0',
  GITHUB_URL: 'https://github.com/DeH40/cloudDrop',
};

// =============================================================================
// LocalStorage Keys
// =============================================================================
export const STORAGE_KEYS = {
  DEVICE_NAME: 'clouddrop_device_name',
  TRUSTED_DEVICES: 'clouddrop_trusted_devices',
};

// =============================================================================
// WebRTC Connection Configuration
// =============================================================================
export const WEBRTC = {
  // File transfer chunk size
  CHUNK_SIZE: 64 * 1024, // 64KB chunks

  // Connection timeouts
  CONNECTION_TIMEOUT: 10000,        // 10 seconds max - give NAT traversal enough time
  FAST_FALLBACK_TIMEOUT: 5000,      // 5 seconds - allow time for srflx/prflx candidates
  CANDIDATE_GATHERING_TIMEOUT: 3000, // 3 seconds to gather initial candidates
  SLOW_CONNECTION_THRESHOLD: 3000,  // Show "slow connection" hint after 3 seconds
  DISCONNECTED_TIMEOUT: 3000,       // 3 seconds before switching to relay

  // ICE restart configuration
  ICE_RESTART_DELAY: 500,           // Fast restart delay in ms
  MAX_ICE_RESTARTS: 2,              // Allow 2 ICE restarts before switching to relay

  // ICE servers cache
  ICE_SERVERS_CACHE_TTL: 5 * 60 * 1000, // 5 minutes

  // Fallback STUN servers (only used if server is unreachable)
  FALLBACK_ICE_SERVERS: [
    { urls: 'stun:stun.l.google.com:19302' }
  ],
};

// =============================================================================
// P2P Background Retry Configuration
// =============================================================================
export const P2P_RETRY = {
  INITIAL_DELAY: 10000,   // 10 seconds before first retry
  INTERVAL: 30000,        // Retry every 30 seconds
  MAX_ATTEMPTS: 10,       // Max retry attempts before giving up
};

// =============================================================================
// File Transfer Configuration
// =============================================================================
export const TRANSFER = {
  // File request timeout (waiting for recipient to accept)
  REQUEST_TIMEOUT: 60000, // 60 seconds

  // Progress update throttle
  PROGRESS_THROTTLE: 100, // Update progress every 100ms max
};

// =============================================================================
// UI Configuration
// =============================================================================
export const UI = {
  // Toast notification duration
  TOAST_DURATION: 3000,           // 3 seconds default
  TOAST_DURATION_LONG: 5000,      // 5 seconds for important messages

  // Animation durations (should match CSS variables)
  TRANSITION_FAST: 150,
  TRANSITION_NORMAL: 250,
  TRANSITION_SLOW: 400,

  // Mobile breakpoints
  BREAKPOINT_MOBILE: 640,
  BREAKPOINT_TABLET: 768,
};

// =============================================================================
// Room Configuration
// =============================================================================
export const ROOM = {
  // Room code format
  CODE_MIN_LENGTH: 4,
  CODE_MAX_LENGTH: 16,
  CODE_PATTERN: /^[a-zA-Z0-9]{4,16}$/,
  CODE_CHARS: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', // Exclude ambiguous chars (0,O,1,I)

  // Password requirements
  PASSWORD_MIN_LENGTH: 6,
};

// =============================================================================
// Crypto Configuration
// =============================================================================
export const CRYPTO = {
  // ECDH curve for key exchange
  ECDH_CURVE: 'P-256',

  // AES configuration
  AES_KEY_LENGTH: 256,
  AES_MODE: 'AES-GCM',

  // PBKDF2 configuration for password derivation
  PBKDF2_ITERATIONS: 100000,
  PBKDF2_HASH: 'SHA-256',
};
