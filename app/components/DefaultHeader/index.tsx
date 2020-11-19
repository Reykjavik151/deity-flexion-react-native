import React, { useMemo } from 'react';
import { SafeAreaView, Text, ViewStyle } from 'react-native';

import styles from './default-header.styles';
import { DefaultHeaderProps } from './default-header.props';

export const DefaultHeader: React.FunctionComponent<DefaultHeaderProps> = ({ preset, title }) => {
  const additionalContainerStyle: ViewStyle = useMemo(
    () => (preset === 'bottom' ? styles.topRoundedContainer : styles.bottomRoundedContainer),
    [preset],
  );

  return (
    <SafeAreaView style={[styles.container, additionalContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};
