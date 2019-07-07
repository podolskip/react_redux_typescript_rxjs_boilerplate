export const assignApiUrlBasenOnEnv = process.env.NODE_ENV === 'production'
  ? window.location.origin + '/api/'
  : 'your custom api for general class';