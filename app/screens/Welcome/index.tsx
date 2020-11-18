import React, { FunctionComponent, useCallback } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

import { Line } from '../../components/Line';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { WelcomeScreenProps } from './initial.props';
import { styles } from './initial.styles';

export const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({ navigation }) => {
  const onRegisterPress = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const onLoginPress = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[COMMON_STYLES.flexContainer, COMMON_STYLES.centeredContainer]}>
        <Line
          height={LINE_HEIGHT.MEDIUM}
          isCompleted={false}
          style={{ lineContainer: styles.upperFirstLineContainer }}
        />
        <Line
          height={LINE_HEIGHT.MEDIUM}
          isCompleted={false}
          style={{ lineContainer: styles.upperSecondLineContainer }}
        />
        <Text style={styles.deityFlexionTitle}>{'Deity\nFlexion'}</Text>
      </View>
      <View style={COMMON_STYLES.flexContainer}>
        <Line
          height={LINE_HEIGHT.SMALL}
          isCompleted={false}
          style={{ lineContainer: styles.line1 }}
        />
        <Line height={LINE_HEIGHT.MEDIUM} style={{ lineContainer: COMMON_STYLES.mb18 }} />

        <TouchableOpacity onPress={onRegisterPress}>
          <Line
            height={LINE_HEIGHT.BUTTON}
            style={{
              lineContainer: [COMMON_STYLES.centeredContainer, COMMON_STYLES.mb18],
            }}
          >
            <Text style={styles.buttonTitle}>Register</Text>
          </Line>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoginPress}>
          <Line
            height={LINE_HEIGHT.BUTTON}
            style={{
              lineContainer: [COMMON_STYLES.centeredContainer, COMMON_STYLES.mb18],
            }}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </Line>
        </TouchableOpacity>

        <Line height={LINE_HEIGHT.MEDIUM} style={{ lineContainer: styles.line3 }} />
        <Line
          height={LINE_HEIGHT.SMALL}
          isCompleted={false}
          style={{ lineContainer: styles.line4 }}
        />
      </View>
    </SafeAreaView>
  );
};
