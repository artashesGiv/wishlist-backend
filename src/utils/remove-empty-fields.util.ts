export const removeEmptyFields = <T>(obj: T): Partial<T> => {
  const a = Object.fromEntries(
    Object.entries(obj).filter(
      ([, /*unusedParam*/ v]) => v !== null && v !== '',
    ),
  ) as T

  console.log(a)
  return a
}
