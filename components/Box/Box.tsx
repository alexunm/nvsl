import { createElement, CSSProperties, FC, ReactHTML } from 'react'
import { space } from '../../const/style'
import { valueWithSpaceAndPoints } from '../../utils/styles'

type Props = {
  className?: string
  element?: keyof ReactHTML
  position?: CSSProperties['position']
  background?: CSSProperties['background']
  top?: CSSProperties['top']
  right?: CSSProperties['right']
  bottom?: CSSProperties['bottom']
  left?: CSSProperties['left']
  textAligh?: CSSProperties['textAlign']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  padding?: number
  paddingX?: number
  paddingY?: number
  paddingLeft?: number | string
  paddingTop?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  margin?: number
  marginX?: number
  marginY?: number
  marginLeft?: number | string
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  gap?: number
  display?: 'flex' | 'grid' | 'block'
  alignContent?: CSSProperties['alignContent']
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  transition?: CSSProperties['transition']
  zIndex?: CSSProperties['zIndex']
}
const Box: FC<Props> = ({ children, element, className, gap, ...props }) => {
  const style: CSSProperties = {
    ...props,
    ...valueWithSpaceAndPoints(
      'padding',
      props.padding,
      props.paddingX || props.paddingLeft,
      props.paddingY || props.paddingTop,
      props.paddingX || props.paddingRight,
      props.paddingY || props.paddingBottom
    ),
    ...valueWithSpaceAndPoints(
      'margin',
      props.margin,
      props.marginX || props.marginLeft,
      props.marginY || props.marginTop,
      props.marginX || props.marginRight,
      props.marginY || props.marginBottom
    ),
    gap: gap && `calc(${gap} * ${space}px)`,
  }
  return createElement(element || 'div', { style, className }, children)
}
export { Box }
