import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../utils/colors';
import { RoundedButton } from '../component/RoundedButton';
import { spacing } from '../utils/sizing';

export const Focus = ({ add }) => {
  const [sub, setSub] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <TextInput
          label="What Do you Like To Focus On?..."
          style={styles.textInput}
          onChangeText={setSub}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              add(sub);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputCont: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
