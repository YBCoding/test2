import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';

import { AppComponent } from './app.component';
import {AwsCognitoOAuthOpts} from '@aws-amplify/auth/src/types/Auth';
import {AuthOptions} from '@aws-amplify/auth/lib/types';

const oauth: AwsCognitoOAuthOpts = {
  domain: '',
  scope: [
    'aws.cognito.signin.user.admin',
    'email',
    'openid',
    'phone',
    'profile'
  ],
  redirectSignIn: 'https://localhost:3000/signin',
  redirectSignOut: 'https://localhost:3000/signout',
  responseType: 'code'
};

const authConfig: AuthOptions = {
  userPoolId: 'eu-west-1_ISkAXz2Sk',
  userPoolWebClientId: '60ivpd5gedfaoeb81gko0la5mq',
  region: 'eu-west-1',
  oauth,
};

const awsconfig = {
  Auth: authConfig
};


Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
