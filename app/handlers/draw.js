import config from '../../config/index.js';
import { MOCK_TEXT_OK } from '../../constants/mock.js';
import { PARTICIPANT_AI, PARTICIPANT_HUMAN } from '../../services/openai.js';
import { generateImage } from '../../utils/index.js';
import { COMMAND_SYS_DRAW } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import { getPrompt, setPrompt } from '../prompt/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_DRAW);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
    const prompt = getPrompt(context.userId);
    prompt.write(PARTICIPANT_HUMAN, `${context.trimmedText}？`).write(PARTICIPANT_AI);
    try {
      const { url } = await generateImage({ prompt: context.trimmedText, size: config.OPENAI_IMAGE_GENERATION_SIZE });
      prompt.patch(MOCK_TEXT_OK);
      setPrompt(context.userId, prompt);
      updateHistory(context.id, (history) => history.write(config.BOT_NAME, MOCK_TEXT_OK));
      context.pushImage(url);
    } catch (err) {
      context.pushError(err);
    }
    return context;
  }
)();

export default exec;
