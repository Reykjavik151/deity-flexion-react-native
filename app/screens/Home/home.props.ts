import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Home'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Home'>;

export interface HomeScreenProps extends NavigationProps, RouteProps {}
