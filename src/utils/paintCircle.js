const calculatePercentage = (perc, color) => {
  if (perc <= 50) {
    // between 0 to 50 percent
    return `linear-gradient(${Math.round(90 + 360 * 0.01 * perc)}deg, transparent 50%, #262626 50%), linear-gradient(90deg, #262626 50%, transparent 50%)`;
  }
  // between 50 percent to 100
  else {
    if (perc > 100) {
      perc = 100;
    }
    return `linear-gradient(90deg, transparent 50%, ${color} 50%), linear-gradient(${Math.round(-90 + 360 * 0.01 * (perc - 50))}deg, transparent 50%, #262626 50%)`;
  }
};

export { calculatePercentage };
