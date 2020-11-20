import { ViewStyle } from 'react-native';

export interface ILinesStyles {
  line1?: ViewStyle;
  line2?: ViewStyle;
  line3?: ViewStyle;
  line4?: ViewStyle;
}

export type VerticalPosition = 'bottom' | 'top';

export enum Status {
  NONE,
  COMPLETED,
}

export interface IWithID {
  id: string;
}

export interface ITask extends IWithID {
  ownerUid: string;
  title: string;
  description: string;
  createdAt: string;
  status: Status;
}

export interface INote extends IWithID {
  ownerUid: string;
  title: string;
  body: string;
  createdAt: string;
}
