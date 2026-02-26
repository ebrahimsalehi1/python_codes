// Inline type import: `type` keyword inside the curly braces.
import { type User } from './users';

const user: User = { name: 'Ebrahim' };

// Emitted JS: `User` is erased, only the module is imported (side-effect).
// Example output:
// const user = { name: 'Ebrahim' };
