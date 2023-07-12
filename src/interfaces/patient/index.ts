import { AppointmentInterface } from 'interfaces/appointment';
import { DoctorInterface } from 'interfaces/doctor';
import { StaffMemberInterface } from 'interfaces/staff-member';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  name: string;
  doctor_id?: string;
  staff_member_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  doctor?: DoctorInterface;
  staff_member?: StaffMemberInterface;
  _count?: {
    appointment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  doctor_id?: string;
  staff_member_id?: string;
}
