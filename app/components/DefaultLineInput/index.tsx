import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { COLORS } from '../../utils/colors';

import { Line } from '../Line';
import { DefaultLineInputProps } from './default-line-input.props';
import styles from './default-line-input.styles';

export const DefaultLineInput: React.FunctionComponent<DefaultLineInputProps> = ({
  title = null,
  inputProps,
  style: propStyle = {},
}) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={[styles.titleContainer, propStyle.titleContainer]}>
          <Text style={[styles.titleText, propStyle.titleText]}>{title}</Text>
        </View>
      )}
      <Line style={{ lineContainer: propStyle.lineContainer }}>
        <TextInput
          selectionColor={COLORS.BLACK}
          autoCorrect={false}
          autoCapitalize="none"
          {...inputProps}
          style={[styles.input, inputProps.style]}
        />
      </Line>
    </View>
  );
};
