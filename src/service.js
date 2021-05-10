export const apiCall = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await result.json()

  return data.title
}