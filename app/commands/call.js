import { SETTING_AI_NAME } from '../../constants/setting.js';
import storage from '../../storage/index.js';
import Context from '../context.js';
import { execTalkCommand } from './talk.js';

/**
 * @param {Context} context
 * @returns {Promise<boolean>}
 */
const isCallCommand = async (context) => {
  if (!context.event.isText) return false;
  try {
    const name = await storage.getItem(SETTING_AI_NAME, { useConfig: true });
    if (!name) return false;
    const input = context.event.text.replaceAll('　', ' ').trim().toLowerCase();
    return input.startsWith(name.toLowerCase());
  } catch (err) {
    context.pushError(err);
    return false;
  }
};

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const execCallCommand = (context) => execTalkCommand(context);

export {
  isCallCommand,
  execCallCommand,
};
