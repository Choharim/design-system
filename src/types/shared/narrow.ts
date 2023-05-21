export type PixelSize<T extends number = number> = `${T}px`

export type RequiredFields<T, U extends keyof T> = Required<Pick<T, U>> &
  Omit<T, U>
