import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../services/signupService';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleSignup = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      const response = await signup({ username, email, password });

      if (response.success) {
        Alert.alert('Success', 'Account created successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred during signup. Please try again.');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={handleBack}>
        <Text style={styles.backButton}>Back</Text>
      </Pressable>

      <View style={styles.colorContainer}>
        {['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251'].map(color => (
          <Pressable
            key={color}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => setBackgroundColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    color: '#007bff',
    fontSize: 18,
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default SignupScreen;
