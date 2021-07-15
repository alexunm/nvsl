import { CSSProperties } from 'react';

export function classNames(...names: (string | false | undefined)[]) {
  return names.filter(n => !!n).join(' ')
}

export function classVariation(name: string, value: string): string {
  const variation = `${value[0].toUpperCase()}${value.substring(1)}`;
  return `${name}--${variation}`;
}

function calcWithSpace(multiplier: number): string {
  return `calc(${multiplier} * var(--space))`
}

export function valueWithSpaceAndPoints(prop: 'padding' | 'margin', all?: number, left?: number | string, top?: number | string, right?: number | string, bottom?: number | string): Partial<CSSProperties> {
  let props: Partial<CSSProperties> & any = {}
  if (all)
    props[prop] = calcWithSpace(all)
  if (left)
    props[`${prop}Left`] = typeof left === 'number' ? calcWithSpace(left) : left
  if (right)
    props[`${prop}Right`] = typeof right === 'number' ? calcWithSpace(right) : right
  if (top)
    props[`${prop}Top`] = typeof top === 'number' ? calcWithSpace(top) : top
  if (top)
    props[`${prop}Bottom`] = typeof bottom === 'number' ? calcWithSpace(bottom) : bottom
  return props
}

/**
 * @name sortIndicatorForValue
 * @param value 0 | 1 | -1
 * @description Returns a symbol (○ | ↓ | ↑) based on the provided value (0 | 1 | -1)
 */
export const sortIndicatorForValue = (value: 0 | 1 | -1) => {
  switch (value) {
    case 1:
      return '↓'
    case -1:
      return '↑'
    default:
      return '○'
  }
}