import MyPageReservationConfirm from "../myPage/MyPageReservationConfirm";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

const FBSDK = require('react-native-fbsdk');


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, AppRegistry} from 'react-native';

const {LoginButton, ShareDialog, AccessToken, GraphRequest, GraphRequestManager} = FBSDK;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

// const initialState = {
//   facebookId: ""
// }

type Props = {};
class LoginPage extends Component<Props> {

  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent: shareLinkContent,
      facebookId: "",
      accessToken: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          logInWithReadPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                console.log('result=>', result)
                AccessToken.getCurrentAccessToken().then(
                  (data) => {

                    let accessToken = data.accessToken
                    console.log('accessToken=> ', accessToken.toString())

                    const responseInfoCallback = (error, result) => {
                      if (error) {
                        console.log(error)
                        alert('Error fetching data: ' + error.toString());
                      } else {
                        console.log(result)
                        console.log(result.user_photos)
                        this.setState({
                          facebookId: result.id,
                          accessToken: accessToken.toString()
                        })

                        console.log('update state => ', this.state.facebookId)
                        // alert('Success fetching data: ' + result.toString());


                      }
                    }

                    const infoRequest = new GraphRequest(
                      '/me',
                      {
                        accessToken: accessToken,
                        parameters: {
                          fields: {
                            string: 'email,name,first_name,middle_name,last_name, cover,picture.type(large)'
                          }
                        }
                      },
                      responseInfoCallback
                    );

                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start()


                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LoginPage;