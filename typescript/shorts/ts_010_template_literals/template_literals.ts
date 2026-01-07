type Size = 'small' | 'large';
type Color = 'red' | 'green';

type ButtonStyle = `${Size}-${Color}`;

// ✅ Valid styles:
// small-red , small-green
// large-red , large-green
let buttonStyle: ButtonStyle =
  'large-green';

// ❌ Error: 
// value is not assignable to types  
buttonStyle = 'red-small';
