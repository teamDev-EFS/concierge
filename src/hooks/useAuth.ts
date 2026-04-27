import { members } from '../data/members';

export function useAuth() {
  return { isLoggedIn: true, user: members[0] };
}