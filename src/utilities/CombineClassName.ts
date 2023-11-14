/**
 * menggabungkan dua atau lebih nama kelas
 * @param args string kelas yang akan digabungkan
 */
declare type TArg = string | undefined;
/**
 * @deprecated use `classNames` from library instead.
 * @param args
 */
export const combineClassName = (...args: TArg[]) => {
  return args.filter(e=>!!e?.trim()).map(e=>e?.trim() || '').join(' ').trim();
}
