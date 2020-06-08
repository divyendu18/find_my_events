export const filterEvents = (event, place) => {
  const l = event.place.toLowerCase();
  const r = place.toLowerCase();
  if (l === r) return true;
  else return false;
};
