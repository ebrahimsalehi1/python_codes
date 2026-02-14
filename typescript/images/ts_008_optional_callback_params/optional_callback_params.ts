// Optional parameters in callbacks mean: "this arg might not be passed".

// ❌ Wrong: implies done may be called with 1 or 2 args
interface FetcherWrong {
  getObject(
    done: (
      data: unknown,
      elapsedTime?: number,
    ) => void,
  ): void;
}

// ✅ Right: always passed; consumers can still ignore it
interface FetcherOk {
  getObject(
    done: (
      data: unknown,
      elapsedTime: number,
    ) => void,
  ): void;
}

declare const f: FetcherOk;

// Legal: callback can accept fewer args (extra args are ignored)
f.getObject((data) => {
  console.log(data);
});

// Also legal: accept both
f.getObject((data, elapsedTime) => {
  console.log(data, elapsedTime);
});
