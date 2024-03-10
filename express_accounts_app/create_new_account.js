import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, InputBox } from 'react-native';
import logo from './assets/images/logo.png';
import { logoStyles, boxStyle } from './styles'
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={logoStyles.container}>
      {/* <ImageBackground source={require('./assets/images/office_space.png')} style={logoStyles.backgroundImage} blurRadius={5}> */}

        {/* The Logo at the top of the page */}
        <Image source={require('./assets/images/logo.png')} style={logoStyles.logo}/>

        {/* The log in message */}
        <View style={logoStyles.signInMessage}>

          <Text style={boxStyle.create_account}>Create New Account</Text>

          <View style={logoStyles.alreadyRegistered}>

            <Text>Already Registered? Log in </Text>
            <Text style={logoStyles.here}>here</Text>

          </View>


        </View>

        {/* Enter Values */}
        <View style={boxStyle.boxEnterAttrs}>

            <View>
                <Text style={boxStyle.signUpTextAttr}>Name (COMPANY OR PERSONAL)</Text>
                <TextInput placeholder="Enter text here"/>
            </View>



        </View>

      {/* </ImageBackground> */}

    </View>
  );
}