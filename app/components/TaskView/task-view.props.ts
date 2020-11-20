import { ITask } from '../../utils/types';

export interface TaskViewProps {
  task: ITask;
  onTaskPress: (task: ITask) => void;
  onTaskLongPress: (task: ITask) => void;
}
