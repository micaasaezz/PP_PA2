
export function getPokes(url) {
  return fetch(url)
    .then(response => response.json());
}
export function getAbility(url) {
  return fetch(url)
    .then(response => response.json());
}