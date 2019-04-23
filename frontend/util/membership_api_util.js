export const fetchMemberships = () => (
  $.ajax({
    method: 'get',
    url: 'api/memberships'
  })
);

export const createMembership = (membership) => (
  $.ajax({
    method: 'post',
    url: 'api/memberships',
    data: { membership }
  })
);

export const deleteMembership = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/memberships/${id}`
  })
);

