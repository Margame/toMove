export class AuthService {

  private isAutheticated = false;

  login() {
    this.isAutheticated = true;
  }

  logout() {
    this.isAutheticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAutheticated;
  }
}
