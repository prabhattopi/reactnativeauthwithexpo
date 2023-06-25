import { Button, StyleSheet, Text, View, TextInput,KeyboardAvoidingView} from "react-native"
import React, { useState } from 'react'


const LoginScreens = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleLogin = () => {
    // Perform login logic
    console.log("Logging in...")
  }

  const handleRegister = () => {
    // Perform register logic
    console.log("Registering...")
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer} >
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.password}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>
      <View style={styles.buttonContainer}>
    <Button style={styles.button} title="Login" onPress={handleLogin} />
      <Button style={styles.button} title="Register" onPress={handleRegister} />
      </View>
  
    </KeyboardAvoidingView>
  )
}


export default LoginScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  buttonContainer: {
    dispaly: "flex",
    flexDirection:"column",
    gap: "20px",
    marginTop:"30px"
    
  },
  button:{
      width:"70%"
  },

})