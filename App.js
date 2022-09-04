import React from 'react';
import {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handleOnTextInputChange = e => {
    // handle on change to update the input
    setInput(e.nativeEvent.text);
  };

  const handleGreetPressed = () => {
    const greetingMessage = `Hello ${input}!`;
    // use Alert to show the alert message
    Alert.alert('Greeting', greetingMessage, [
      {
        text: 'OK',
      },
    ]);
    // after greeting, reset the input
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        testID="name-input"
        accessibilityLabel="name-input"
        placeholder="Enter your name"
        onChange={handleOnTextInputChange}
      />
      <Button
        title="Greet"
        testID="greet-button"
        accessibilityLabel="greet-button"
        disabled={!input}
        onPress={handleGreetPressed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
});
