import { PARTICIPANT_HUMAN } from '../services/openai.js';

export const TEXT_OK = 'OK!';

export const USER_ID_01 = '000001';
export const USER_ID_02 = '000002';

const users = {};
users[USER_ID_01] = { displayName: `${PARTICIPANT_HUMAN}` };
users[USER_ID_02] = { displayName: `${PARTICIPANT_HUMAN} 2` };

export {
  users,
};
