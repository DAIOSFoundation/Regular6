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
import {Platform, StyleSheet, Text, View, TouchableHighlight, AppRegistry, Alert, NativeModules,} from 'react-native';
import RNKakaoLogins from 'react-native-kakao-logins';
import NativeButton from 'apsl-react-native-button';

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
      accessToken: "",
      isKakaoLogging: false,
      token: 'token has not fetched',
    };
    if (!RNKakaoLogins) {
      console.log('Not Linked');
    }
  }

  // 카카오 로그인 시작.
  kakaoLogin() {
    console.log('   kakaoLogin   ');
    RNKakaoLogins.login((err, result) => {
      if (err){
        console.log("result->", err)
        // Alert.alert('error', err);
        return;
      }
      console.log("result->", result)
      // Alert.alert('result', result);
    });
  }

  kakaoLogout() {
    console.log('   kakaoLogout   ');
    RNKakaoLogins.logout((err, result) => {
      if (err){
        console.log("err->", err)
        // Alert.alert('error', err);
        return;
      }
      console.log("result->", result)
    });
  }

  // 로그인 후 내 프로필 가져오기.
  getProfile() {
    console.log('getKakaoProfile');
    RNKakaoLogins.getProfile((err, result) => {
      if (err){
        console.log("result->", err)
        // Alert.alert('error', err);
        return;
      }
      console.log("result->", result)
    });
  }

  render() {
    return (
      <View style={styles.container}>

        {/*kakaotalk login*/}
        <View style={ styles.header }>
          <Text>LOGIN</Text>
        </View>
        <View style={ styles.content }>
          <NativeButton
            isLoading={this.state.isNaverLoggingin}
            onPress={() => this.kakaoLogin()}
            activeOpacity={0.5}
            style={styles.btnKakaoLogin}
            textStyle={styles.txtNaverLogin}
          >LOGIN</NativeButton>
          <Text>{this.state.token}</Text>
          <NativeButton
            onPress={() => this.kakaoLogout()}
            activeOpacity={0.5}
            style={styles.btnKakaoLogin}
            textStyle={styles.txtNaverLogin}
          >Logout</NativeButton>
          <NativeButton
            isLoading={this.state.isKakaoLogging}
            onPress={() => this.getProfile()}
            activeOpacity={0.5}
            style={styles.btnKakaoLogin}
            textStyle={styles.txtNaverLogin}
          >getProfile</NativeButton>
        </View>

        {/*facebook login*/}
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
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    backgroundColor: 'white',
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

  // kakao
  header: {
    flex: 8.8,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 87.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 0,
    borderWidth: 0,
  },
  txtNaverLogin: {
    fontSize: 16,
    color: '#3d3d3d',
  },
});

export default LoginPage;