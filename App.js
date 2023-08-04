import { useState } from 'react';
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
} from 'react-native';
import Todos from './Todos';
import TextInputItem from './components/Elements/TextInputItem';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [count, setCount] = useState(0);
  const [btnTitle, setbtnTitle] = useState('Add');
  const [updateKey, setupdateKey] = useState(0);

  const handleChange = (value) => {
    setTodo(value);
    console.log(value);
  };

  const onPressLearnMore = () => {
    Keyboard.dismiss();
    if (btnTitle === 'Update') {
      todos.map((todoItem) => {
        if (todoItem.key === updateKey) {
          todoItem.title = todo;
          setTodo('');
        }
      });

      setbtnTitle('Add');
    } else {
      if (todo !== '') {
        setTodos((prev) => [...prev, { title: todo, key: count }]);
        setTodo('');
        setCount((prev) => prev + 1);
      } else {
        alert('Enter Valid Number');
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#f2f2f2"
        barStyle="dark-content"
        StatusBarAnimation="fade"
      />
      <View style={styles.inputContainer}>
        <View style={styles.header}>
          <Text>TODO</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInputItem
            todo={todo}
            type="numeric"
            placeholder="Enter Age"
            // style={styles.input}
            handleChange={handleChange}
          />

          <View style={styles.button}>
            <Button onPress={onPressLearnMore} title={btnTitle} />
            <Button
              onPress={() => {
                setTodos([]);
                setTodo('');
                setCount(0);
              }}
              title="reset"
            />
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <ScrollView scrollEnabled={todos.length > 10}>
            <Todos
              todos={todos}
              setTodos={setTodos}
              setTodo={setTodo}
              setbtnTitle={setbtnTitle}
              setupdateKey={setupdateKey}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'start',
    flex: 1,
  },

  header: {
    // marginTop: 100,
    paddingTop: 40,
    paddingVertical: 30,
    fontSize: 10,
    fontVariant: 'alert',
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 2,
    // justifyContent: 'center',=
  },
  listContainer: {
    flex: 6,
  },
});
