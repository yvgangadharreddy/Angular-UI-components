import {Component, OnInit} from '@angular/core';
import {CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-web-design';

  constructor() {}

  ngOnInit(): void {
    // this.signUp();
    // this.verifyUserOtp();
    // this.loginUser();
  }

  private loginUser() {
    let authenticationData = {
      Username : 'gangadhar',
      Password : '111111',
    };
    let authenticationDetails = new AuthenticationDetails(authenticationData);
    let poolData = {
      UserPoolId : 'ap-south-1_MzpNc1CSf', // Your user pool id here
      ClientId : '3riegd17uvojc37if5nvlv19po' // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    let userData = {
      Username : 'gangadhar',
      Pool : userPool
    };
    let cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        let accessToken = result.getAccessToken().getJwtToken();

        console.log(accessToken);

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        /*AWS.config.region = 'ap-south-1';

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId : '...', // your identity pool id here
          Logins : {
            // Change the key below according to the specific region your user pool is in.
            'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>' : result.getIdToken().getJwtToken()
          }
        });*/

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        /*(AWS.config.credentials as AWS.CognitoIdentityCredentials ).refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: let s3 = new AWS.S3();
            console.log('Successfully logged!');
          }
        });*/
      },

      onFailure: function(err) {
        alert(err.message || JSON.stringify(err));
      },

    });
  }

  private signUp() {
    let poolData = {
      UserPoolId : 'ap-south-1_MzpNc1CSf', // Your user pool id here
      ClientId : '3riegd17uvojc37if5nvlv19po' // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    let attributeList = [];

    let dataEmail = {
      Name : 'email',
      Value : 'isx43424@bcaoo.com'
    };

    let attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp('gangadharReddy', '111111', attributeList, null, function(err, result){
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      let cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
    });
  }
  
  private verifyUserOtp() {
    let poolData = {
      UserPoolId : 'ap-south-1_MzpNc1CSf', // Your user pool id here
      ClientId : '3riegd17uvojc37if5nvlv19po' // Your client id here
    };

    let userPool = new CognitoUserPool(poolData);
    let userData = {
      Username : 'gangadharReddy',
      Pool : userPool
    };

    let cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration('091347', true, function(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    });
  }
}
