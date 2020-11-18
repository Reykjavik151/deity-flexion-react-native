import React from 'react';
import { View, ViewStyle } from 'react-native';

import defaultStyles from './line.styles';
import { LineProps } from './line.props';

export const Line: React.FunctionComponent<LineProps> = ({
  height,
  isCompleted = true,
  children,
  style: propStyle = {},
}) => {
  const lineContainerHeight: ViewStyle = { height };

  return (
    <View style={[defaultStyles.container, propStyle.container]}>
      <View
        style={[
          lineContainerHeight,
          defaultStyles.lineContainer,
          !isCompleted ? defaultStyles.uncompletedLineContainer : null,
          propStyle.lineContainer,
        ]}
      >
        {children}
      </View>
    </View>
  );
};
