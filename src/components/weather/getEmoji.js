const Emoji = (icon) => {

  if (icon == 'Clear') {
    return "☀️";
  } else if (icon == 'Clouds') {
    return "☁️";
  } else if (icon == 'Rain') {
    return "🌧️";
  }
 else {
    return "Meh 😒";
  }
};
  
  module.exports = Emoji;