import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  department_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
