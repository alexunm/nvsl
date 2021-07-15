import React from 'react'
import { Box } from '../components/Box'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { List } from '../components/List'
import { TextField } from '../components/TextField'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'
import { useInput } from '../hooks/useInput'
import { useSort } from '../hooks/useSort'
import { sortIndicatorForValue } from '../utils/styles'
import { Server } from './../type/api'

type Keys = 'name' | 'distance'

const listIdForItem = (item: Server) => {
  return `${item.name}-${item.distance}`
}

const listRenderForItem = (index: number, id: string, item: Server) => {
  return (
    <Box display='flex'>
      <div>{item.name}</div>
      <Box marginLeft='auto' width={300}>
        {item.distance} <span>km</span>
      </Box>
    </Box>
  )
}

const Home = () => {
  const { data } = useFetch<Server[]>('/api/servers')

  const search = useInput('')
  const debouncedSearch = useDebounce(search.value)
  const { value, key, sort } = useSort<Keys>()

  const sortIndicatorForKey = (refKey: Keys) => {
    return refKey === key ? sortIndicatorForValue(value) : '○'
  }

  const filter = (s: Server) => {
    const query = debouncedSearch && String(debouncedSearch)
    if (!query) return true
    return s.name.toLowerCase().includes(query.toLowerCase()) || s.distance.toString().includes(query!)
  }

  const sorter = (a: Server, b: Server) => {
    let sortValue = 0
    if (key) sortValue = a[key] < b[key] ? 1 : -1
    return sortValue * value
  }

  return (
    <>
      <Layout.Header title='Servers'>
        <Box width={300}>
          <TextField placeholder='Search name or distance' {...search} clearable />
        </Box>
      </Layout.Header>
      <Layout.Section>
        <Box marginTop={3} marginBottom={3} paddingX={5} display='flex'>
          <div>
            <Button onClick={() => sort('name')} color='yellow' active={value !== 0 && key === 'name'}>
              Name <span>{sortIndicatorForKey('name')}</span>
            </Button>
          </div>
          <Box marginLeft='auto' width={300}>
            <Button onClick={() => sort('distance')} color='green' active={value !== 0 && key === 'distance'}>
              Distance <span>{sortIndicatorForKey('distance')}</span>
            </Button>
          </Box>
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
