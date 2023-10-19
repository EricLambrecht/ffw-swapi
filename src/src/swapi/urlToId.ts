export const urlToId = (url: string) => {
  const match = url.match(/\d+/)
  if (match) {
    return match[0]
  }
  return null
}