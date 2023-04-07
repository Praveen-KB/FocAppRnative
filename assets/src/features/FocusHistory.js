import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FocusHistory = ({ history }) => {
  if( history.length === 0) return <Text style={styles.not}>Not Focused on Any thing yet</Text>

  const renderItem = ({ item }) => <Text style={styles.text}>- {item}</Text>;
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Previously Focused On:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex:1,
    paddingLeft: 25,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    paddingLeft:10,
    paddingTop:15
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  not:{
    color:"#fff",
    paddingLeft:25,
    fontSize: 24,
  }
});

export default FocusHistory;
