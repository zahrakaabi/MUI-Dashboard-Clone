/* -------------------------------------------------------------------------- */
/*                             FLATTEN ARRAY UTIL                             */
/* -------------------------------------------------------------------------- */
export function flattenArray<T>(list: T[], key = 'children'): T[] {
/* -------------------------------- CONSTANTS ------------------------------- */
  let children: T[] = [];

  const flatten = list?.map((item: any) => {
    if (item[key] && item[key].length) {
      children = [...children, ...item[key]];
    }
    return item;
  });

/* -------------------------------- RENDERING ------------------------------- */
  return flatten?.concat(children.length ? flattenArray(children, key) : children);
};