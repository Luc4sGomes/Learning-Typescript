type VerifyUserfn = (user: User, sentValue: User) => boolean;

type User = { userName: string; password: string };

const VerifyUser: VerifyUserfn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = { userName: 'joao', password: '123456' };
const sentUser = { userName: 'joao1', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);
