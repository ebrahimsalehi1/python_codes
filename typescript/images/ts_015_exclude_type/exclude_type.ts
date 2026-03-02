type TimeOfDay =
  | 'morning'
  | 'noon'
  | 'afternoon'
  | 'evening';

const timeAfterMorning: Exclude<
  TimeOfDay,
  'morning'
> = 'noon';

// ❌ Type 'morning' is not assignable
//    to type 'noon' | 'afternoon' | 'evening'
const badAfterMorningTime: Exclude<
  TimeOfDay,
  'morning'
> = 'morning';

// ✅ These types are allowed
const noonTime: Exclude<
  TimeOfDay,
  'morning'
> = 'noon';
const afternoonTime: Exclude<
  TimeOfDay,
  'morning'
> = 'afternoon';
const eveningTime: Exclude<
  TimeOfDay,
  'morning'
> = 'evening';
