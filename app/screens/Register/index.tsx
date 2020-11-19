import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Line, LoginForm } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { useRegisterCallback } from '../../redux/user';
import { RegisterScreenProps } from './register.props';
import { styles } from './register.styles';

export const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = () => {
  const dispatch = useDispatch();
  const onRegister = useRegisterCallback(dispatch);

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
      <LoginForm submitButtonText="Register" onSubmit={onRegister} />
    </SafeAreaView>
  );
};
