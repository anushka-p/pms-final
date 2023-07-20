// formValidations.js

export const emailRules = [
    (v) => !!v || 'Email is required',
    (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
  ];
  
  export const passwordRules = [
    (v) => !!v || 'Password is required',
    (v) => v.length >= 6 || 'Password must be at least 6 characters',
  ];
  
  export const confirmPasswordRules = (password) => [
    (v) => !!v || 'Confirm Password is required',
    (v) => v === password || 'Passwords must match',
  ];
  
  export const roleOptions = ['student', 'college'];
  