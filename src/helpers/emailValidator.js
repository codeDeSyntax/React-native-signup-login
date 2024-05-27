export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Fill in the email."
  if (!re.test(email)) return 'Please enter a valid email address!'
  return ''
}