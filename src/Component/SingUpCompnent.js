import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'

export default class SingUpCompnent extends Component {
  
  __singUp = (values) => {
    const email = values.email
    const sifre = values.sifre
    const sifre2 = values.sifre2

    if (sifre != sifre2 && sifre.length > 6) {
      alert("sifreleri farklı kontrol ediniz veya şifreniz 6 haneden kısa")
    }
    else {
      try {
        let response =  auth().createUserWithEmailAndPassword(email, sifre)
        if (response) {
          console.log(response)
          alert('Welcome Message', 'Welcome the App profile yönlenecek');
          
        }
      } catch (e) {
        console.error(e.message)
      }
    }
  }
  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: "", sifre: "" }}
          onSubmit={values => this.__singUp(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="mailinizi girinizi"
                clearTextOnFocus={false}
              ></TextInput>
              <TextInput
                
                onChangeText={handleChange('sifre')}
                onBlur={handleBlur('sifre')}
                value={values.sifre}
                placeholder="sifrenizi  giriniz"
                clearTextOnFocus={false}
              ></TextInput>
              <TextInput

                onChangeText={handleChange('sifre2')}
                onBlur={handleBlur('sifre2')}
                value={values.sifre2}
                placeholder="sifrenizi tekrar giriniz"
                clearTextOnFocus={false}
              ></TextInput>
              <TouchableOpacity onPress={handleSubmit}>
                <Text>Kayıt ol</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    )
  }
}