const getformdata = () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const college = document.getElementById("college").value;
  console.log({ email, password, name, college });
};
console.log(getformdata());
