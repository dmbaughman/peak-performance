export const getNewActive = (active, arrLength) => {
  active = active + 1
  console.log('new active', active % arrLength)
  return active % arrLength
}
