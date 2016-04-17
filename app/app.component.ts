import {Component} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'
import {SignupFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    directives: [LoginFormComponent,SignupFormComponent],
    template: `<login-form></login-form><signup-form></signup-form>`

})

export class AppComponent { }
