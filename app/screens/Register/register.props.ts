import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Register'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Register'>;

export interface RegisterScreenProps extends NavigationProps, RouteProps {}
