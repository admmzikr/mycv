const updateCursor = (e) => {
    console.log(`Mouse X: ${e.pageX}, Mouse Y: ${e.pageY}`); // Add this line
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  };