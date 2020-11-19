import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Tasks'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Tasks'>;

export interface TasksScreenProps extends NavigationProps, RouteProps {}
