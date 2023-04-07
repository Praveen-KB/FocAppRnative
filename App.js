import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import colors from './assets/src/utils/colors';
import Timer from './assets/src/features/Timer';

import { Focus } from './assets/src/features/Focus';
import FocusHistory from "./assets/src/features/FocusHistory"

export default function App() {
  const [currentSub, setCurrentSub] = useState(null);
  const [history,setHistory] = useState([])


  const add = (cont) => {
    setCurrentSub(cont)
  }

  return (
    <SafeAreaView style={styles.container}>
      {!currentSub ? (
        <>
          <Focus add={add} />
          <FocusHistory history={history}/>
        </>
      ) : (
        <Timer
          focusSubject={currentSub}
          onTimerEnd={(sub) => {setHistory([...history,sub])}}
          clearSubject={() => {
            setCurrentSub(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBLue,
  },
});
