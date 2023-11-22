const REG_EXP = {
  idAndPwd: /^[\w]+$/,
  email: /^(?![-_.])[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
  pwd: /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/
};

export default REG_EXP;
