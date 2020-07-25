const genSurfingMsg = (windDirection) => {
    if (windDirection > 270) {
      return "Great day to surf 🌊";
    } else if (windDirection > 180 && windDirection < 270) {
      return "Not the best, but should still be fun 🙌";
    } else if (windDirection > 90 && windDirection < 180) {
      return "Could be better 😒";
    }
      else if (windDirection > 0 && windDirection < 90) {
        return "Better stay home 🏘️";
    } else {
      return "Better chill on the beach🌴";
    }
  };
  module.exports = genSurfingMsg;