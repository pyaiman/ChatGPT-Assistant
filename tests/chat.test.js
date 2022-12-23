import {
  afterEach, beforeEach, expect, test,
} from '@jest/globals';
import {
  getSession, handleEvents, removeSession, settings,
} from '../app/index.js';
import { COMMAND_CHAT, COMMAND_DEACTIVATE } from '../constants/command.js';
import storage from '../storage/index.js';
import { createMessageEvents, TIMEOUT, USER_ID } from './utils.js';

beforeEach(() => {
  storage.initialize(settings);
});

afterEach(() => {
  removeSession(USER_ID);
});

test('COMMAND_CHAT', async () => {
  const events = [
    ...createMessageEvents([COMMAND_DEACTIVATE.text]),
    ...createMessageEvents([`${COMMAND_CHAT.text}人工智慧`]),
  ];
  let results;
  try {
    results = await handleEvents(events);
  } catch (err) {
    console.error(err);
  }
  expect(getSession(USER_ID).lines.length).toEqual(3 * 2);
  const replies = results.map(({ messages }) => messages.map(({ text }) => text));
  expect(replies).toEqual(
    [
      [COMMAND_DEACTIVATE.reply],
      ['OK!'],
    ],
  );
}, TIMEOUT);
