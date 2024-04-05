function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate x: ${point.x}; y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};

printPoint(obj1);

const obj2 = {
  x: "1",
  y: "2",
  z: 3,
};

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(`Hello, ${user.firstName.toUpperCase()}`);

  if (user.lastName) {
    console.log(`Nice to meet you Mr.${user.lastName.toUpperCase()}`);
  }
}

printName({ firstName: "Evgeniy" });
printName({ firstName: "Evgeniy", lastName: "Petrov" });

// Домашнее задание

interface IUser {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

const user1: IUser = {
  login: "user",
  email: "usermail",
  password: "123qwerty",
  isOnline: false,
  lastVisited: new Date(),
};

interface IAdmin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const admin1: IAdmin = {
  login: "admin",
  email: "adminmail",
  password: "123admin",
  isOnline: true,
  lastVisited: new Date(),
  role: "superAdmin",
};

function login(user: { login: string; password: string }) {
  if ((user.login.length > 0, user.password.length > 0)) {
    console.log(`Ligin: ${user.login} - ${user.password}`);
  }
}

login(user1);
login(admin1);
