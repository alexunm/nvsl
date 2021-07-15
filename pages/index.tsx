import React, { useState } from 'react'
import { Box } from '../components/Box'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { List } from '../components/List'
import { TextField } from '../components/TextField'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'
import { useInput } from '../hooks/useInput'
import { Server } from './api/servers'

type Keys = 'name' | 'distance'

const Home = () => {
  const { data } = useFetch<Server[]>('/api/servers')

  const [sortKey, setSortKey] = useState<Keys>()
  const [sortState, setSortState] = useState<0 | 1 | -1>(0)

  const search = useInput('')
  const debouncedSearch = useDebounce(search.value)

  const getSortStateForKey = (key: string) => {
    return sortKey === key ? sortState : 0
  }

  const sortMarkupForKey = (key: Keys) => {
    const state = getSortStateForKey(key)
    switch (state) {
      case 1:
        return '↓'
      case -1:
        return '↑'
      default:
        return '○'
    }
  }

  const sort = (key: Keys) => {
    let newState: 0 | 1 | -1 = 1
    if (key !== sortKey) {
      setSortKey(key)
    } else {
      if (sortState === 1) newState = -1
      if (sortState === -1) newState = 0
      if (sortState === 0) newState = 1
    }
    setSortState(newState)
  }

  const filter = (s: Server) => {
    const query = debouncedSearch && String(debouncedSearch)
    if (!query) return true
    return s.name.toLowerCase().includes(query.toLowerCase()) || s.distance.toString().includes(query!)
  }

  const sorter = (a: Server, b: Server) => {
    let sortValue = 0
    if (sortKey) sortValue = a[sortKey] < b[sortKey] ? 1 : -1
    return sortValue * sortState
  }

  const listIdForItem = (item: Server) => {
    return `${item.name}-${item.distance}`
  }

  const listRenderForItem = (index: number, id: string, item: Server) => {
    return (
      <Box className='Grid Grid__List-Item'>
        <div>{item.name}</div>
        <div>
          {item.distance} <span>km</span>
        </div>
      </Box>
    )
  }

  return (
    <>
      <Layout.Header title='Servers'>
        <Box width={300}>
          <TextField placeholder='Search name or distance' {...search} clearable />
        </Box>
      </Layout.Header>
      <Layout.Section>
        <Box marginTop={3} marginBottom={3} paddingX={5} className={`Grid Grid--Filters`}>
          <div>
            <Button onClick={() => sort('name')} color='yellow' active={sortState !== 0 && sortKey === 'name'}>
              Name <span>{sortMarkupForKey('name')}</span>
            </Button>
          </div>
          <div>
            <Button onClick={() => sort('distance')} color='green' active={sortState !== 0 && sortKey === 'distance'}>
              Distance <span>{sortMarkupForKey('distance')}</span>
            </Button>
          </div>
        </Box>
        {data && (
          <List<Server>
            items={data}
            idForItem={listIdForItem}
            renderElement={listRenderForItem}
            filter={filter}
            sorter={sorter}
          />
        )}
      </Layout.Section>
    </>
  )
}
export default Home
