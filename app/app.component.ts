import {Component} from 'angular2/core';
import {LoginFormComponent} from './login-form.component'

@Component({
    selector: 'my-app',
    directives: [LoginFormComponent],
    template: `<login-form></login-form>`

})

export class AppComponent { }
