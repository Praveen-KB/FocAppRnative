import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import { Countdown } from '../component/CountDown';
import { RoundedButton } from '../component/RoundedButton';
import { spacing } from '../utils/sizing';
import colors from '../utils/colors';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';

import Timing from './Timing';

const Timer = (props) => {
  useKeepAwake();
  const { focusSubject, clearSubject,onTimerEnd } = props;

  const [startes, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const [minutes, setMinutes] = useState(0.1);
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!startes}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressColor}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timerWrapper}>
        <Timing onTimingChange={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={!startes ? 'Start' : 'Pause'}
          onPress={() => setStarted(!startes)}
        />
      </View>
      <View style={styles.clearsubWrapper}>
        <RoundedButton size={50} onPress={clearSubject} title="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clearsubWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  timerWrapper: {
    flex: 0.1,
    paddingTop: spacing.md,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: { color: colors.white, textAlign: 'center' },
});

export default Timer;
