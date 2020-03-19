import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{padding: 50, marginTop: 50, flexDirection: 'row', alignItems: 'center'}}>
        {/* Input */}
        <TextInput placeholder="scrivi todo" style={styles.Input} />
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
  Input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 3,
  }
});
