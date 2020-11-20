import { Status } from './types';

export const parseStringToStatus = (status?: string): Status | undefined => {
  switch (status) {
    case Status.NONE:
      return Status.NONE;
    case Status.COMPLETED:
      return Status.COMPLETED;
  }

  return undefined;
};
