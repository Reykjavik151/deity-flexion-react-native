import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Line } from '../../components';
import { LINE_HEIGHT } from '../../components/Line/line.presets';
import { COLORS } from '../../utils/colors';
import { COMMON_STYLES } from '../../utils/commonStyles';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[COMMON_STYLES.flexContainer, COMMON_STYLES.centeredContainer]}>
        <TouchableOpacity style={[styles.button, COMMON_STYLES.centeredContainer]}>
          <MaterialIcon name="check" size={115} color={COLORS.PRIMARY_BLUE} />
        </TouchableOpacity>
      </View>
      <Line height={LINE_HEIGHT.SMALL} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.LARGE} style={{ lineContainer: COMMON_STYLES.mb12 }} />
      <Line height={LINE_HEIGHT.SMALL} />
      <View style={[COMMON_STYLES.flexContainer, COMMON_STYLES.centeredContainer]}>
        <TouchableOpacity
          style={[styles.button, COMMON_STYLES.centeredContainer, COMMON_STYLES.rotation270]}
        >
          <MaterialIcon name="note" size={115} color={COLORS.PRIMARY_BLUE} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
