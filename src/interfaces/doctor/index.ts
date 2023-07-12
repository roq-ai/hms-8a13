import { AppointmentInterface } from 'interfaces/appointment';
import { PatientInterface } from 'interfaces/patient';
import { DepartmentInterface } from 'interfaces/department';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  name: string;
  department_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  patient?: PatientInterface[];
  department?: DepartmentInterface;
  user?: UserInterface;
  _count?: {
    appointment?: number;
    patient?: number;
  };
}

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  department_id?: string;
  user_id?: string;
}
