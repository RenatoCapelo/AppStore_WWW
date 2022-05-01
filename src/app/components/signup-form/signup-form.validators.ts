import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SignupFormValidators
{
  static matchesPassword(control: AbstractControl) : ValidationErrors | null{
    let newPassword = control.get('password');
    let confirmPassword = control.get('confirmPassword');

    if(newPassword?.value === confirmPassword?.value){
      return null;
    }
    return {passwordsShouldMatch: true}
  }
}
