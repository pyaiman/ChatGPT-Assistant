import { COMMAND_SYS_CONTINUE } from '../../constants/command.js';
import { generateCompletion, getActions } from '../../utils/index.js';
import MessageAction from '../actions/message.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import { getPrompt, setPrompt } from '../prompt/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const isContinueCommand = (context) => context.isCommand(COMMAND_SYS_CONTINUE);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const execContinueCommand = async (context) => {
  updateHistory(context.id, (history) => history.records.pop());
  const prompt = getPrompt(context.userId);
  const { lastSentence } = prompt;
  if (lastSentence.isEnquiring) prompt.sentences.pop();
  try {
    const { text, isFinishReasonStop } = await generateCompletion({ prompt: prompt.toString() });
    if (!text) return context;
    prompt.patch(text);
    if (!lastSentence.isEnquiring) {
      updateHistory(context.id, (history) => history.patch(text));
    }
    setPrompt(context.userId, prompt);
    const defaultActions = getActions(lastSentence);
    const actions = isFinishReasonStop ? defaultActions : [new MessageAction(COMMAND_SYS_CONTINUE)];
    context.pushText(text, actions);
  } catch (err) {
    context.pushError(err);
  }
  return context;
};

export {
  isContinueCommand,
  execContinueCommand,
};
