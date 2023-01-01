import config from '../../config/index.js';
import Context from '../context.js';
import { execTalkCommand } from './talk.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const isSummonCommand = (context) => {
  if (!context.event.isText) return false;
  const name = config.BOT_NAME;
  const content = context.event.text.replaceAll('　', ' ').trim().toLowerCase();
  return content.startsWith(name.toLowerCase());
};

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const execSummonCommand = (context) => execTalkCommand(context);

export {
  isSummonCommand,
  execSummonCommand,
};
