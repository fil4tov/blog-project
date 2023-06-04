type Mods = Record<string, boolean>

export const classNames = (baseClasses: string[], mods: Mods = {}): string => {
  return [
    ...baseClasses.filter(Boolean),
    ...Object.keys(mods).filter(key => mods[key])
  ].join(' ')
}
