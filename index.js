import { Injector } from './Injector';
import { MessageController } from './MessageController';

import { SimpleLogger } from './SimpleLogger';
import { FancyLogger } from './FancyLogger';

Injector.add('Logger', new FancyLogger);
let mc = Injector.inject(MessageController);
mc.sendMessage();