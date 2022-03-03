import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler'


export class Login extends Component {

  __singIn = (values) => {
    const email = values.email
    const sifre = values.sifre
    console.log(email)

    try {
      let response = auth().signInWithEmailAndPassword(email, sifre)
      if (response) {
        console.log(response)
        alert('Successful Login', 'Welcome the React Native')
        
      }
    } catch (e) {
      console.error(e.message)
    }


  }

  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: "", sifre: "" }}
          onSubmit={values => this.__singIn(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="login mail"
              ></TextInput>
              <TextInput
                onChangeText={handleChange('sifre')}
                onBlur={handleBlur('sifre')}
                value={values.sifre}
                placeholder="login sifre"
              ></TextInput>
              <TouchableOpacity onPress={handleSubmit}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    )
  }
}

export default Login