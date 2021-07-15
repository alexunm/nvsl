import React, { ReactNode } from 'react'
import { listEmptyText } from '../../const/text'
import { classNames, classVariation } from '../../utils/styles'
import { Box } from '../Box'
import styles from './List.module.scss'

type Props<T = any> = {
  display?: 'list' | 'grid'
  items: T[] | undefined
  idForItem: (item: T) => string
  renderElement: (index: number, id: string, item: T) => ReactNode
  filter?: typeof Array.prototype.filter.prototype
  sorter?: typeof Array.prototype.sort.prototype
}
const List = <T,>({ items, idForItem, renderElement, sorter, filter, display }: Props<T>) => {
  const listStyle = classNames(styles.List, display && styles[classVariation('Display', display)])

  let data = items ? [...items] : []
  if (sorter) data.sort(sorter)
  if (filter) data = data.filter(filter)

  return (
    <>
      <Box element='ul' className={listStyle}>
        {data.map((item, i) => (
          <li key={idForItem(item)} className={styles.List__Item}>
            {renderElement(i, idForItem(item), item)}
          </li>
        ))}
      </Box>
      <Box display='flex' alignContent='center' width='100%' padding={5} justifyContent='center'>
        {data.length === 0 && <h3>{listEmptyText}</h3>}
      </Box>
    </>
  )
}

List.defaultProps = { display: 'list' }

export { List }
