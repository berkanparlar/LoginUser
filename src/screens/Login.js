import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import LoginComponent from '../Component/LoginComponent'

const loginScreen = ({navigation}) => {
  return (
    <View>
      <LoginComponent/>
      <TouchableOpacity
      onPress={()=>navigation.navigate("SingUp")}
      >
        <Text>Kayıt ol</Text>
      </TouchableOpacity>
    </View>
  )
}

export default loginScreen