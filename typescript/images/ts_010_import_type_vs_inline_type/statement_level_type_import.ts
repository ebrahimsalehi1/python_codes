// Statement-level type import: `import type` marks entire statement as type-only.
import type { User } from './users';

const user2: User = { name: 'Ebrahim' };

// Emitted JS: `User` type is completely erased (no import statement remains).
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const user2 = { name: 'Ebrahim' };
