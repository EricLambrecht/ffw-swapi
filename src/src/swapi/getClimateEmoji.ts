const emojiMap: { [key: string]: string } = {
  frozen: "❄️",
  frigid: "❄️",
  murky: "🪐",
  arid: "🏜️",
  hot: "🌋",
  tropical: "🏝️",
  "temperate, tropical": "🌎",
  "hot, humid": "🏝",
  temperate: "🏕️",
  "temperate, moist": "🏕",
};

export const getClimateEmoji = (climate: string) => {
  const emoji = emojiMap[climate];

  if (!emoji) {
    return "🌐";
  }

  return emoji;
};
