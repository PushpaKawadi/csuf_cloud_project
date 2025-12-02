    var elementVal = document.getElementById('navbarSupportedContent');
    var nameElement = elementVal.querySelector('.profile-text strong');
    var userIdElement = elementVal.querySelector('.profile-text.cls-current-user-id');
    var nameVal = nameElement ? nameElement.textContent.trim() : null;
    var userIdVal = userIdElement ? userIdElement.textContent.trim() : null;

function getUserDetails() {
    const userDetails = {
  name: nameVal,
  email: "",
  userId: userIdVal,
};
  return userDetails;
}