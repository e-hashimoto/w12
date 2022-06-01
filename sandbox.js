// const bcrypt = require('bcryptjs');

// const saltRounds = 10;
// const hash = await bcrypt.hash(password, saltRounds); // auto generates salt based on # of saltRounds

/*
Manually generates salt before generating password digest:

const saltRounds = 10;
const salt = await bcrypt.genSalt(saltRounds);
const hash = await bcrypt.hash(password, salt);

*/

// Logging in a user with their credentials
// const isPassword = await bcrypt.compare(password, hash);

const bcrypt = require('bcryptjs');

async function getHash(password, saltRounds) {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log(hash);
  return hash;
}

async function isPassword(password, hash) {
  const isPassword = await bcrypt.compare(password, hash);
  console.log(isPassword);
  return isPassword;
};

(async () => {
  const hashedPassword = await getHash('P@ssw0rd', 10);
  const passwordIsMatch = await isPassword('P@ssw0rd', hashedPassword);
})();
