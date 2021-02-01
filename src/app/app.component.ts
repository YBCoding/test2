import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {AuthStateHandler} from '@aws-amplify/ui-components/dist/types/common/types/auth-types';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState?: AuthState;
  formFields: FormFieldTypes;

  constructor(private ref: ChangeDetectorRef) {
    this.formFields = [
      {
        type: 'email',
        label: 'Custom email Label',
        placeholder: 'custom email placeholder',
        required: true,
      },
      {
        type: 'password',
        label: 'Custom Password Label',
        placeholder: 'custom password placeholder',
        required: true,
      },
      {
        type: 'phone_number',
        label: 'Custom Phone Label',
        placeholder: 'custom Phone placeholder',
        required: false,
      },
      {
        type: 'birthdate',
        label: 'Custom Birthdate Label',
        placeholder: 'custom Birthdate placeholder',
        required: true,
      },
      {
        type: 'family_name',
        label: 'Custom family_name Label',
        placeholder: 'custom family_name placeholder',
        required: true,
      },
      {
        type: 'name',
        label: 'Custom name Label',
        placeholder: 'custom name placeholder',
        required: true,
      },
    ];
  }

  ngOnInit(): any {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): (authStateHandler: AuthStateHandler) => () => void {
    return onAuthUIStateChange;
  }
}
