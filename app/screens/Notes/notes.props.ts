import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Notes'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Notes'>;

export interface NotesScreenProps extends NavigationProps, RouteProps {}
