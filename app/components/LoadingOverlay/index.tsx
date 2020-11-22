import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Animated } from 'react-native';

import styles from './loading-overlay.styles';
import { LoadingOverlayProps } from './loading-overlay.props';
import { useUserLoading } from '../../redux/user';
import { useTasksLoading } from '../../redux/tasks';
import { useNotesLoading } from '../../redux/notes';

const ANIMATION_DURATION_MS = 300;
const LOADER_ANIMATION_STATE = {
  ANIMATION_TO_BIG: 'to-big',
  ABIMATION_TO_SMALL: 'to-small',
};
const MIN_LOADER_SIZE = 32;
const MAX_LOADER_SIZE = 64;

export const LoadingOverlay: React.FunctionComponent<LoadingOverlayProps> = () => {
  const userLoading = useUserLoading();
  const tasksLoading = useTasksLoading();
  const notesLoading = useNotesLoading();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const loaderSize = useRef(new Animated.Value(0));
  const [loaderAnimationState, setLoaderAnimationState] = useState<string>(
    LOADER_ANIMATION_STATE.ANIMATION_TO_BIG,
  );

  const animateLoader = useCallback(() => {
    let toValue: number;
    switch (loaderAnimationState) {
      default:
      case LOADER_ANIMATION_STATE.ABIMATION_TO_SMALL:
        toValue = 0;
        break;
      case LOADER_ANIMATION_STATE.ANIMATION_TO_BIG:
        toValue = 1;
        break;
    }

    Animated.timing(loaderSize.current, {
      toValue,
      duration: ANIMATION_DURATION_MS,
      useNativeDriver: false,
    }).start((options) => {
      if (options.finished) {
        setLoaderAnimationState(
          loaderAnimationState === LOADER_ANIMATION_STATE.ABIMATION_TO_SMALL
            ? LOADER_ANIMATION_STATE.ANIMATION_TO_BIG
            : LOADER_ANIMATION_STATE.ABIMATION_TO_SMALL,
        );

        animateLoader();
      }
    });
  }, [loaderAnimationState, loaderSize]);

  const stopAnimation = useCallback(() => {
    loaderSize.current.stopAnimation();
  }, [loaderSize]);

  useEffect(() => {
    const newIsVisible = userLoading || tasksLoading || notesLoading;
    setIsVisible(newIsVisible);
  }, [userLoading, tasksLoading, notesLoading]);

  useEffect(() => {
    if (isVisible) {
      animateLoader();
    } else {
      stopAnimation();
    }
  }, [isVisible, animateLoader, stopAnimation]);

  if (!isVisible) {
    return null;
  }

  const interpolatedLoaderSize = loaderSize.current.interpolate({
    inputRange: [0, 1],
    outputRange: [MIN_LOADER_SIZE, MAX_LOADER_SIZE],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loader,
          {
            width: interpolatedLoaderSize,
            height: interpolatedLoaderSize,
            borderRadius: interpolatedLoaderSize,
          },
        ]}
      />
    </View>
  );
};
