import { CSSProperties } from 'react';

export function classNames(...names: (string | false | undefined)[]) {
  return names.filter(n => !!n).join(' ')
}

export function classVariation(name: string, value: string): string {
  const variation = `${value[0].toUpperCase()}${value.substring(1)}`;
  return `${name}--${variation}`;
}