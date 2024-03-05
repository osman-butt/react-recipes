// export type User = { username: string; password: string; roles?: string[] };

// interface LoginResponse {
//   username: string;
//   token: string;
//   roles: Array<string>;
// }

// interface LoginRequest {
//   username: string;
//   password: string;
// }

// const users: Array<User> = [
//   { username: "user1", password: "test12", roles: ["USER"] },
//   { username: "admin1", password: "test12", roles: ["ADMIN"] },
// ];

// const fakeAuthProvider = {
//   isAuthenticated: false,
//   signIn(user_: LoginRequest): Promise<LoginResponse> {
//     const user: User | undefined = users.find(
//       (u) => u.username === user_.username && u.password === user_.password
//     );
//     if (user) {
//       this.isAuthenticated = true;
//     }
//     return new Promise((resolve, reject) => {
//       if (user && this.isAuthenticated) {
//         const response = {
//           username: user.username,
//           token: "DUMMY_TOKEN",
//           roles: user.roles || [],
//         };
//         setTimeout(() => resolve(response), 500); // fake async
//       } else {
//         setTimeout(() => reject("Wrong username or password"), 500); // fake async
//       }
//     });
//   },
// };

// export type { LoginResponse, LoginRequest };
// export { fakeAuthProvider };

import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtils";
const LOGIN_URL = API_URL + "/api/auth/login";

export type User = { username: string; password: string; roles?: string[] };

interface LoginResponse {
  username: string;
  token: string;
  roles: Array<string>;
}

interface LoginRequest {
  username: string;
  password: string;
}

const authProvider = {
  isAuthenticated: false,
  signIn(user_: LoginRequest): Promise<LoginResponse> {
    const options = makeOptions("POST", user_);
    return fetch(LOGIN_URL, options).then(handleHttpErrors);
  },
};

export type { LoginResponse, LoginRequest };
export { authProvider };
