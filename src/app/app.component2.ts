import {Component} from '@angular/core';
import {Auth, CognitoUser} from '@aws-amplify/auth';
import {AuthOptions, UsernamePasswordOpts} from '@aws-amplify/auth/lib/types';
import {AwsCognitoOAuthOpts, OAuthOpts} from '@aws-amplify/auth/src/types/Auth';
import {SignUpParams} from '@aws-amplify/auth/src/types/Auth';
import {ICognitoUserData, ICognitoUserPoolData, CognitoUserPool} from 'amazon-cognito-identity-js';


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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';

  constructor() {
    Auth.configure(authConfig);
    const params: SignUpParams = {
      username: 'yunus@patrivia.net',
      password: 'Yunus123*',
      attributes: {
        family_name: 'bula',
        name: 'yunus',
        email: 'yunus@patrivia.net',
        birthdate: '1991-07-26',
        phone_number: '+33678120014'
      }
    };
    // Auth.signUp(params).then(data => console.log(data));
    const signInOpts: UsernamePasswordOpts = {
      username: params.username,
      password: params.password,
    };
    Auth.signIn(signInOpts);
    // const cognitoUserPoolData: ICognitoUserPoolData = {
    //   UserPoolId: authConfig.userPoolId,
    //   ClientId: authConfig.userPoolWebClientId,
    // };
    // const cognitoUserPool = new CognitoUserPool(cognitoUserPoolData);
    // const cognitoUserData: ICognitoUserData = {
    //   Pool: cognitoUserPool,
    //   Username: params.username,
    // };
    // const user = new CognitoUser(cognitoUserData);
    // Auth.confirmSignIn(user, '707463');
  }
}
