import { RootStackParams } from './root-navigator';
import { HomeStackParams, LoginStackParams } from './stacks';

export type MergedStackParams = RootStackParams & HomeStackParams & LoginStackParams;
