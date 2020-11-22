import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './login-form.styles';
import { LoginFormProps } from './login-form.props';
import { DefaultLineInput } from '../DefaultLineInput';
import { Line } from '../Line';
import { LINE_HEIGHT } from '../Line/line.presets';
import { COMMON_STYLES } from '../../utils/commonStyles';

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  submitButtonText,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onValidate = useCallback(() => {
    if (email && password) {
      onSubmit(email, password);
    }
  }, [email, password, onSubmit]);

  return (
    <View style={styles.container}>
      <DefaultLineInput
        inputProps={{
          placeholder: 'Email',
          value: email,
          onChangeText: setEmail,
        }}
        style={{ lineContainer: COMMON_STYLES.mb18 }}
      />
      <DefaultLineInput
        inputProps={{
          placeholder: 'Password',
          value: password,
          onChangeText: setPassword,
          secureTextEntry: true,
        }}
        style={{ lineContainer: COMMON_STYLES.mb18 }}
      />

      <TouchableOpacity onPress={onValidate}>
        <Line
          height={LINE_HEIGHT.BUTTON}
          style={{
            lineContainer: COMMON_STYLES.centeredContainer,
          }}
        >
          <Text style={styles.submitButtonText}>{submitButtonText}</Text>
        </Line>
      </TouchableOpacity>
    </View>
  );
};
