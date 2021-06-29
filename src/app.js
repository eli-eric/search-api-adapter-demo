import ViewJSON from 'react-json-view'
import {init} from 'search-api-adapter'
import create from 'zustand'

import 'normalize.css'
import listOfFilterables from './list.json'
import Results from './results'
import Search from './search'

export const useFilterState = create((set) =>
  init(listOfFilterables, {debounce: 100, setter: set}),
)
export const useQuery = create((set) => ({
  query: '%7B%7D',
  setQuery: (str) => set({query: str}),
}))

const App = () => {
  const query = useQuery((state) => state.query)
  const json = JSON.parse(decodeURIComponent(query))
  return (
    <div style={{display: 'flex', width: '100%'}}>
      <div style={{padding: 20, width: '33%'}}>
        <h1>Ugly Search</h1>
        <Search />
      </div>
      <div style={{padding: 20, width: '33%'}}>
        <h1>Adapter Output</h1>
        <ViewJSON src={json} />
      </div>
      <div style={{padding: 20, width: '33%'}}>
        <h1>Search API Result</h1>
        <Results />
      </div>
    </div>
  )
}

export default App
