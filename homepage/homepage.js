function openForm(formType) {
  if (formType === "SignUp") {
    document.getElementById("signup").classList.add("active");
    document.getElementById("signin").classList.remove("active");
  } else {
    document.getElementById("signin").classList.add("active");
    document.getElementById("signup").classList.remove("active");
  }
}
function closeForm(formType) {
    if (formType === "SignUp") {
        document.getElementById("signup").classList.remove("active");
      } else {
       
        document.getElementById("signin").classList.remove("active");
      }
}
