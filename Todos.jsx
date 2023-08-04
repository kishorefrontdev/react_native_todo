import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Todos({ todos, setTodos, setTodo, setbtnTitle, setupdateKey }) {
  const handleTextPress = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key !== key);
    });
  };
  useEffect(() => {}, [todos]);
  const handleTextEdit = (key) => {
    setTodo(todos.filter((todo) => todo.key === key)[0].title);
    setupdateKey(key);
    setbtnTitle('Update');
  };
  return (
    <>
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <TouchableOpacity key={todo.key}>
              <View style={styles.singleItem}>
                <Text style={styles.text}>{todo.title}</Text>
                <Button onPress={() => handleTextEdit(todo.key)} title="Edit" />
                <Button
                  onPress={() => handleTextPress(todo.key)}
                  title="Delete"
                />
              </View>
            </TouchableOpacity>
          );
        })}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    // borderColor: 'red',
    padding: 20,
    flex: 6,
  },
  singleItem: {
    backgroundColor: '#27f0ff',
    shadowColor: 'grey',

    shadowOpacity: 0.7,
    // elevation: 12,
    borderRadius: 12,
    marginBottom: 8,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Todos;
