import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Content from './Content'

export default function App() {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <View style={styles.container}>
      <Content content = {count} color = 'red' fontWeight = 'bold' fontSize = '30px'>
        <Text style={{color: 'green', fontWeight: 'bold'}}>Hello Props</Text>
      </Content>
      <Button title="Increase" onPress={handleClick}></Button>
      <StatusBar style="auto" />
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
});
