function generateUniqueId(array: any[]): number {
  // Get the current length of the array
  const length = array.length;

  // Generate a new ID by adding 1 to the length
  const newId = length + 1;

  // Check if the new ID already exists in the array
  const existingId = array.find((id) => id === newId);

  if (existingId) {
    // If the new ID already exists in the array, find the first available ID that is not in the array
    for (let i = 1; i <= length + 1; i++) {
      if (!array.includes(i)) {
        return i;
      }
    }
  }

  // If the new ID does not exist in the array, return it
  return newId;
}

export default generateUniqueId;
