// Stop Using Function Overloads for Simple Optional Params

// ❌ Bad Code
interface Operation {
  selfPowerSum(a: number): number;

  selfPowerSum(a: number,b: number): number;

  selfPowerSum(a: number,b: number,c: number): number;
}

// ✅ Good Code
interface Operation {
  selfPowerSum(
    a: number,
    b?: number,
    c?: number,
  ): number;
}
