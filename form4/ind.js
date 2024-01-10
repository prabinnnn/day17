const getformdata = () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  console.log({ email });
};
console.log(getformdata());
