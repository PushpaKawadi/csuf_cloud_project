const getDenialReasonText = (reason) => {
  const reasonMap = {
    1: "should be re-submitted as medical issue",
    2: "missing or inadequate documentation",
    3: "documentation does not indicate sufficient hardship",
    4: "Other",
  };
  return reasonMap[reason] || "Unknown reason";
};

const errorMessages = [
  "I'm having trouble processing your request right now. Please try again in a moment! 🤖",
  "Oops! My circuits got a bit tangled. Could you please try asking again? ⚡",
  "I seem to be experiencing a temporary hiccup. Please give it another shot! 🔄",
  "My AI brain needs a quick refresh. Please try your question again! 🧠",
  "Something's not quite right on my end. Would you mind trying once more? 🛠️",
  "I'm having a momentary glitch. Please retry your request! ⚙️",
  "My processing power took a little break there. Please try again! 💭",
  "Looks like I hit a small snag. Could you please resend your message? 🤖",
  "I'm experiencing some technical difficulties. Please give it another go! 🔧",
  "My digital gears are spinning a bit slowly. Please try again! ⚡",
  "Sorry, I'm having trouble connecting the dots right now. Please retry! 🔗",
  "My AI assistant mode needs a quick reboot. Please try your request again! 🔄",
];

// Function to get a random error message
const getRandomErrorMessage = () => {
  const randomIndex = Math.floor(Math.random() * errorMessages.length);
  return errorMessages[randomIndex];
};