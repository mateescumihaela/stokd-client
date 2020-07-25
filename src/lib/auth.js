import jwt from 'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    return !!this.getToken()
  }
}

export default Auth