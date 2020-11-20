import { ViewStyle } from 'react-native';

export interface ILinesStyles {
  line1?: ViewStyle;
  line2?: ViewStyle;
  line3?: ViewStyle;
  line4?: ViewStyle;
}

export type VerticalPosition = 'bottom' | 'top';

enum Status {
  NONE,
  COMPLETED,
}

export interface ITask {
  id: string;
  ownerUid: string;
  title: string;
  description: string;
  createdAt: string;
  status: Status;
}

export interface INote {
  id: string;
  ownerUid: string;
  title: string;
  body: string;
  createdAt: string;
}
