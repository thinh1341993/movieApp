import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color, distance, font, spacing} from '../../theme';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {Input, Button} from '../../components/index';

const login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('login');
  };
  const forgot = () => {
    console.log('forgot');
  };
  const register = () => {
    console.log('register');
  };
  const facebookLogin = () => {
    console.log('facebookLogin');
  };
  const googleLogin = () => {
    console.log('googleLogin');
  };

  return (
    <ScrollView>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/Image1_3x.png')}
        style={styles.top}>
        <LinearGradient
          colors={[
            'transparent',
            'rgba(0,0,0,0.2)',
            'rgba(0,0,0,0.9)',
            'black',
          ]}
          style={styles.linearGradient}>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require('../../assets/play_button_3x.png')}
            />
            <Text style={styles.textLogo}>Movie Play</Text>
          </View>
          <View style={{paddingHorizontal: spacing.w45}}>
            <Input
              placeholder="email here"
              title="Email"
              isPassword={false}
              inputValue={email}
              setInputValue={setEmail}
            />
            <Input
              placeholder="password here"
              title="Password"
              isPassword={true}
              inputValue={password}
              setInputValue={setPassword}
            />
            <Button title="LOGIN" onPress={login} />
            <TouchableOpacity onPress={forgot} style={{marginTop: 5}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: font.s12,
                  alignSelf: 'flex-end',
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
            <View style={styles.social}>
              <View style={styles.line}></View>
              <Text style={{fontSize: font.s14, color: color.white}}>
                Social Logins
              </Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.icon}>
              <Icon
                onPress={facebookLogin}
                name="facebook-with-circle"
                type="entypo"
                size={40}
                color={color.yellowMain}
              />

              <Icon
                iconStyle={{marginLeft: 20}}
                name="google--with-circle"
                type="entypo"
                size={40}
                color={color.yellowMain}
                onPress={googleLogin}
              />
            </View>
            <Text
              style={{
                color: color.textGray,
                alignSelf: 'center',
              }}>
              Don’t have an account?
            </Text>
            <TouchableOpacity onPress={register} style={{marginTop: 8}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: font.s14,
                  alignSelf: 'center',
                }}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const LoginScreen = connect(mapStateToProps, null)(login);
