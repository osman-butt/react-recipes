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

const users: Array<User> = [
  { username: "user1", password: "test12", roles: ["USER"] },
  { username: "admin1", password: "test12", roles: ["ADMIN"] },
];

const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(user_: LoginRequest): Promise<LoginResponse> {
    const user: User | undefined = users.find(
      (u) => u.username === user_.username && u.password === user_.password
    );
    if (user) {
      this.isAuthenticated = true;
    }
    return new Promise((resolve, reject) => {
      if (user && this.isAuthenticated) {
        const response = {
          username: user.username,
          token: "DUMMY_TOKEN",
          roles: user.roles || [],
        };
        setTimeout(() => resolve(response), 500); // fake async
      } else {
        setTimeout(() => reject("Wrong username or password"), 500); // fake async
      }
    });
  },
};

export type { LoginResponse, LoginRequest };
export { fakeAuthProvider };
