import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Login'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Login'>;

export interface LoginScreenProps extends NavigationProps, RouteProps {}
