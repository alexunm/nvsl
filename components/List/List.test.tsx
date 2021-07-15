import React from 'react'
import { act } from 'react-dom/test-utils'
import { listEmptyText } from '../../const/text'
import { render, screen } from '../../utils/test-utils'
import { List } from './List'

type Item = {
  name: string
}

const idForItem = (item: Item) => {
  return item.name
}
const renderElement = (index: number, id: string, item: Item) => {
  return item.name
}

describe('<List />', () => {
  let items: Item[] | undefined = undefined
  render(<List<Item> items={items} idForItem={idForItem} renderElement={renderElement} />)

  it('should show empty text', () => {
    expect(screen.getByText(listEmptyText)).toBeDefined()
  })

  it("should show 'First' list item", () => {
    act(() => {
      items = [{ name: 'First' }]
      render(<List<Item> items={items} idForItem={idForItem} renderElement={renderElement} />)
    })
    expect(screen.getByText('First')).toBeDefined()
  })
})
