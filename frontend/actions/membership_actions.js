export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS';
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
import * as MembershipApiUtil from '../util/membership_api_util';

const receiveMembership = (membership) => ({
  type: RECEIVE_MEMBERSHIP,
  membership
});

const receiveMemberships = (memberships) => ({
  type: RECEIVE_MEMBERSHIPS,
  memberships
});

const removeMembership = (membership) => ({
  type: REMOVE_MEMBERSHIP,
  membershipId: membership.id
});

export const fetchMemberships = () => dispatch => (
  MembershipApiUtil.fetchMemberships().then((memberships) => dispatch(receiveMemberships(memberships)))
);

export const createMembership = (membership) => dispatch => (
  MembershipApiUtil.createMembership(membership).then((membership) => dispatch(receiveMembership(membership)))
);

export const deleteMemberships = (id) => dispatch => (
  MembershipApiUtil.deleteMemberships(id).then((membership) => dispatch(removeMembership(membership)))
);