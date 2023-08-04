import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

function TextInputItem({ todo, type, placeholder, handleChange }) {
  console.log(todo);
  return (
    <TextInput
      value={todo}
      keyboardType={type}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={handleChange}
    />
  );
}

export default TextInputItem;
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomWidth: 2,
  },
});
