import {useState, useEffect} from 'react'
import {translate} from 'search-api-adapter'

import {useFilterState, useQuery} from './app'

const SearchApiResult = () => {
  const ENDPOINT = 'https://federated.scicat.ess.eu/api/Documents'
  // const ENDPOINT = 'http://localhost:5000/api/Documents'
  const filters = useFilterState()
  const query = translate(filters)
  const setQuery = useQuery((state) => state.setQuery)
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    setQuery(query)
    fetch(`${ENDPOINT}?filter=${query}`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [query, setQuery])
  return data
    ? data.map((document) => (
        <div key={document.pid}>
          <a
            href={
              ENDPOINT +
              '/' +
              encodeURIComponent(document.pid) +
              '?filter=' +
              translate([], {
                include: [
                  ['datasets', 'parameters'],
                  ['datasets', 'techniques'],
                ],
                limit: false,
              })
            }
            target="blank"
          >
            {document.title}
          </a>
        </div>
      ))
    : 'nothing to show ;-('
}

export default SearchApiResult
