import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createStaffMember } from 'apiSdk/staff-members';
import { Error } from 'components/error';
import { staffMemberValidationSchema } from 'validationSchema/staff-members';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { DepartmentInterface } from 'interfaces/department';
import { UserInterface } from 'interfaces/user';
import { getDepartments } from 'apiSdk/departments';
import { getUsers } from 'apiSdk/users';
import { StaffMemberInterface } from 'interfaces/staff-member';

function StaffMemberCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: StaffMemberInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createStaffMember(values);
      resetForm();
      router.push('/staff-members');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<StaffMemberInterface>({
    initialValues: {
      name: '',
      department_id: (router.query.department_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: staffMemberValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Staff Member
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="name" mb="4" isInvalid={!!formik.errors?.name}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formik.values?.name} onChange={formik.handleChange} />
            {formik.errors.name && <FormErrorMessage>{formik.errors?.name}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<DepartmentInterface>
            formik={formik}
            name={'department_id'}
            label={'Select Department'}
            placeholder={'Select Department'}
            fetcher={getDepartments}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.email}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'staff_member',
    operation: AccessOperationEnum.CREATE,
  }),
)(StaffMemberCreatePage);
