import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  doctor_id: yup.string().nullable(),
  staff_member_id: yup.string().nullable(),
});
