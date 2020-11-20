import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'TasksAdd'>;
type RouteProps = StackScreenProps<MergedStackParams, 'TasksAdd'>;

export interface TasksAddScreenProps extends NavigationProps, RouteProps {}
