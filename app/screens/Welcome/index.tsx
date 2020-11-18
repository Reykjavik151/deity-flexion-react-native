import React, { FunctionComponent, useCallback } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

import { Line } from '../../components/Line';
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
          height={18}
          isCompleted={false}
          style={{ lineContainer: styles.upperFirstLineContainer }}
        />
        <Line
          height={18}
          isCompleted={false}
          style={{ lineContainer: styles.upperSecondLineContainer }}
        />
        <Text style={styles.deityFlexionTitle}>{'Deity\nFlexion'}</Text>
      </View>
      <View style={COMMON_STYLES.flexContainer}>
        <Line height={12} isCompleted={false} style={{ lineContainer: styles.line1 }} />
        <Line height={18} style={{ lineContainer: COMMON_STYLES.mb18 }} />

        <TouchableOpacity onPress={onRegisterPress}>
          <Line
            height={64}
            style={{
              lineContainer: [COMMON_STYLES.centeredContainer, COMMON_STYLES.mb18],
            }}
          >
            <Text style={styles.buttonTitle}>Register</Text>
          </Line>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoginPress}>
          <Line
            height={64}
            style={{
              lineContainer: [COMMON_STYLES.centeredContainer, COMMON_STYLES.mb18],
            }}
          >
            <Text style={styles.buttonTitle}>Login</Text>
          </Line>
        </TouchableOpacity>

        <Line height={18} style={{ lineContainer: styles.line3 }} />
        <Line height={12} isCompleted={false} style={{ lineContainer: styles.line4 }} />
      </View>
    </SafeAreaView>
  );
};
