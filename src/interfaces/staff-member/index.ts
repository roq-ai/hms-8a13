import { PatientInterface } from 'interfaces/patient';
import { DepartmentInterface } from 'interfaces/department';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StaffMemberInterface {
  id?: string;
  name: string;
  department_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  patient?: PatientInterface[];
  department?: DepartmentInterface;
  user?: UserInterface;
  _count?: {
    patient?: number;
  };
}

export interface StaffMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  department_id?: string;
  user_id?: string;
}
