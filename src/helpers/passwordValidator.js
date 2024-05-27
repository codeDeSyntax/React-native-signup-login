export function passwordValidator(password) {
  if (!password) return "Add a password for security."
  if (password.length < 8) return 'Password should contain at least 8 characters.'
  return ''
}
