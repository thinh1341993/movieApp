import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {ScrollView, View, Text, Image} from 'react-native';
import {color, distance, font, spacing} from '../../theme';
import styles from './style';
import {Input, Button} from '../../components';

const forgotPassword = (props) => {
  const [email, setEmail] = useState('');

  const sendEmail = () => {
    console.log('send Email');
  };

  return (
    <ScrollView style={{backgroundColor: color.black}}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/play_button_3x.png')}
          style={{
            width: 100,
            height: 100,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}></Image>
        <Text style={{fontSize: 34, color: 'rgb(255 ,187, 59)'}}>
          Movie Play
        </Text>
      </View>
      <Text
        style={[
          styles.title,
          {color: 'white', fontWeight: 'bold', marginBottom: spacing.h13},
        ]}>
        FORGOT PASSWORD?
      </Text>
      <View style={styles.input}>
        <Text
          style={[
            styles.title,
            {color: color.textGray, marginBottom: spacing.h33},
          ]}>
          Enter the email address you used to create your account and we will
          email you a link to reset your password
        </Text>
        <Input
          placeholder="email here"
          title="Email"
          isPassword={false}
          inputValue={email}
          setInputValue={setEmail}
        />
        <Button title="SEND EMAIL" onPress={sendEmail} />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const ForgotPasswordScreen = connect(
  mapStateToProps,
  null,
)(forgotPassword);
