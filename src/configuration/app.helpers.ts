export const _pipeFn = (fn1: any, fn2: any) => fn2(fn1());

export const pipe = (...arrayOfFn: any) => () => arrayOfFn.reduce(_pipeFn);