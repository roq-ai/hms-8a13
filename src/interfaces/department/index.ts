import { DoctorInterface } from 'interfaces/doctor';
import { StaffMemberInterface } from 'interfaces/staff-member';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DepartmentInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  doctor?: DoctorInterface[];
  staff_member?: StaffMemberInterface[];
  organization?: OrganizationInterface;
  _count?: {
    doctor?: number;
    staff_member?: number;
  };
}

export interface DepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
