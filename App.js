import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{padding: 50, marginTop: 50}}>
        {/* Input */}
        <TextInput placeholder="scrivi todo" style={{borderBottomWidth: 1}} />
        <Button title="invia" onPress={() => {}} />
      </View>
      <View>
        <Text>

        </Text>
        {/* Output */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});
