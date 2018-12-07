export const getNewActive = (active, arrLength) => {
  active = active + 1
  return active % arrLength
}
