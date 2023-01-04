import MessageAction from '../app/actions/message.js';
import { t } from '../locales/index.js';
import {
  COMMAND_ANALYZE,
  COMMAND_ANALYZE_MATHEMATICALLY,
  COMMAND_ANALYZE_NUMEROLOGICALLY,
  COMMAND_ANALYZE_PHILOSOPHICALLY,
  COMMAND_SUM,
  COMMAND_SUM_ADVISE,
  COMMAND_SUM_APOLOGIZE,
  COMMAND_SUM_BLAME,
  COMMAND_SUM_COMFORT,
  COMMAND_SUM_COMPLAIN,
  COMMAND_SUM_LAUGH,
} from './command.js';

const enquiries = {};
enquiries[COMMAND_SUM.text] = t('__COMPLETION_PROMPT_SUM');
enquiries[COMMAND_SUM_ADVISE.text] = t('__COMPLETION_PROMPT_SUM_ADVISE');
enquiries[COMMAND_SUM_APOLOGIZE.text] = t('__COMPLETION_PROMPT_SUM_APOLOGIZE');
enquiries[COMMAND_SUM_BLAME.text] = t('__COMPLETION_PROMPT_SUM_BLAME');
enquiries[COMMAND_SUM_COMFORT.text] = t('__COMPLETION_PROMPT_SUM_COMFORT');
enquiries[COMMAND_SUM_COMPLAIN.text] = t('__COMPLETION_PROMPT_SUM_COMPLAIN');
enquiries[COMMAND_SUM_LAUGH.text] = t('__COMPLETION_PROMPT_SUM_LAUGH');
enquiries[COMMAND_ANALYZE_MATHEMATICALLY.text] = t('__COMPLETION_PROMPT_ANALYZE_MATHEMATICALLY');
enquiries[COMMAND_ANALYZE_NUMEROLOGICALLY.text] = t('__COMPLETION_PROMPT_ANALYZE_NUMEROLOGICALLY');
enquiries[COMMAND_ANALYZE_PHILOSOPHICALLY.text] = t('__COMPLETION_PROMPT_ANALYZE_PHILOSOPHICALLY');
enquiries[COMMAND_ANALYZE.text] = t('__COMPLETION_PROMPT_ANALYZE');

const enquiryActions = [
  new MessageAction(COMMAND_SUM_ADVISE),
  new MessageAction(COMMAND_ANALYZE),
  new MessageAction(COMMAND_SUM_APOLOGIZE),
  new MessageAction(COMMAND_SUM_BLAME),
  new MessageAction(COMMAND_SUM_COMFORT),
  new MessageAction(COMMAND_SUM_COMPLAIN),
  new MessageAction(COMMAND_SUM_LAUGH),
  new MessageAction(COMMAND_SUM),
];

export {
  enquiries,
  enquiryActions,
};
