export class Pass {
  code: string;
  email: string;
  newPassword: string;
  constructor( email: string = '', code: string = '', newPassword: string = '') {
    this.code = code;
    this.email = email;
    this.newPassword = newPassword;
  }
}
