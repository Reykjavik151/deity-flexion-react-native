import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Line, LoginForm } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { LoginScreenProps } from './login.props';
import { styles } from './login.styles';
import { useLoginCallback } from '../../redux/user';

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const dispatch = useDispatch();
  const onLogin = useLoginCallback(dispatch);

  return (
    <SafeAreaView style={styles.container}>
      <Line
        height={LINE_HEIGHT.SMALL}
        isCompleted={false}
        style={{
          lineContainer: styles.line1,
        }}
      />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: styles.line2 }} />
      <Line
        height={LINE_HEIGHT.LARGE}
        isCompleted={false}
        style={{
          lineContainer: styles.line3,
        }}
      />
      <Line
        height={LINE_HEIGHT.SMALL}
        isCompleted={false}
        style={{
          lineContainer: styles.line4,
        }}
      />
      <LoginForm submitButtonText="Login" onSubmit={onLogin} />
    </SafeAreaView>
  );
};
