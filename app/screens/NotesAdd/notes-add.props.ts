import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { MergedStackParams } from '../../navigation/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'NotesAdd'>;
type RouteProps = StackScreenProps<MergedStackParams, 'NotesAdd'>;

export interface NotesAddScreenProps extends NavigationProps, RouteProps {}
