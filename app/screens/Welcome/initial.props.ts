import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Welcome'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Welcome'>;

export interface WelcomeScreenProps extends NavigationProps, RouteProps {}
