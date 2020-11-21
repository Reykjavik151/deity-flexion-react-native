import React, { useMemo } from 'react';
import { SafeAreaView, Text, TextStyle, ViewStyle } from 'react-native';

import styles from './default-header.styles';
import { DefaultHeaderProps } from './default-header.props';
import { COMMON_STYLES } from '../../utils/commonStyles';

export const DefaultHeader: React.FunctionComponent<DefaultHeaderProps> = ({ preset, title }) => {
  const additionalContainerStyle: ViewStyle = useMemo(
    () => (preset === 'bottom' ? styles.topRoundedContainer : styles.bottomRoundedContainer),
    [preset],
  );

  const additionalTitleStyle: TextStyle = useMemo(
    () => (preset === 'bottom' ? COMMON_STYLES.mt18 : COMMON_STYLES.mb18),
    [preset],
  );

  return (
    <SafeAreaView style={[styles.container, additionalContainerStyle]}>
      <Text style={[styles.title, additionalTitleStyle]}>{title}</Text>
    </SafeAreaView>
  );
};
