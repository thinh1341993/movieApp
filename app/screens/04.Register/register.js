import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {color, distance, font, spacing} from '../../theme';
import styles from './style';
import {Icon} from 'react-native-elements';

import {Input, Button} from '../../components/index';

const register = (props) => {
  const [avatar, setAvatar] = useState(require('../../assets/user.png'));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setConfirmPassword] = useState('');

  const changeAvatar = () => {
    console.log('changeAvatar');
  };

  const register = () => {
    console.log('register');
  };

  return (
    <ScrollView style={{backgroundColor: color.black}}>
      <TouchableOpacity onPress={changeAvatar}>
        <Image source={avatar} style={styles.avatar} />
      </TouchableOpacity>
      <Text style={styles.tittle}>Add profile picture</Text>
      <View style={styles.input}>
        <Input
          title="FIRST NAME"
          placeholder="first name here"
          isPassword={false}
          inputValue={firstName}
          setInputValue={setFirstName}
        />
        <Input
          title="LAST NAME"
          placeholder="last name here"
          isPassword={false}
          inputValue={lastName}
          setInputValue={setLastName}
        />
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
        <Input
          placeholder="confirm password here"
          title="CONFIRM PASSWORD"
          isPassword={true}
          inputValue={comfirmPassword}
          setInputValue={setConfirmPassword}
        />
        <Button title="REGISTER" onPress={register} />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const RegisterScreen = connect(mapStateToProps, null)(register);
