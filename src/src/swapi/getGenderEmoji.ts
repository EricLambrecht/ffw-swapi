export const getGenderEmoji = (genderString: string) => {
  if (genderString === "male") {
    return "👨";
  }
  if (genderString === "female") {
    return "👩";
  }

  // Star wars' only non-binary characters seem to be robots, so:
  return "🤖";
};