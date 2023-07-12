const mapping: Record<string, string> = {
  appointments: 'appointment',
  departments: 'department',
  doctors: 'doctor',
  organizations: 'organization',
  patients: 'patient',
  'staff-members': 'staff_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
