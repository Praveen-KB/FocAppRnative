import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../component/RoundedButton';
const Timing = (props) => {
  const { onTimingChange } = props;

  return (
    <>
      <View style={styles.timinBtn}>
        <RoundedButton size={75} title={10} onPress={() => onTimingChange(10)} />
      </View>
      <View style={styles.timinBtn}>
        <RoundedButton size={75} title={15} onPress={() => onTimingChange(15)} />
      </View>
      <View style={styles.timinBtn}>
        <RoundedButton size={75} title={20} onPress={() => onTimingChange(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timinBtn: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Timing;
