import {useFilterState} from './app'
import FilterComponent from './filterComponent'

function Search() {
  const filters = useFilterState()

  return Object.entries(filters).map(([group, content]) => (
    <div
      key={group}
      style={{
        padding: '10px 0',
        margin: '10px 0',
        backgroundColor: 'lightseagreen',
      }}
    >
      <div style={{padding: '0px 10px'}}>
        <h2>{group === 'root' ? 'document' : group}</h2>
        <button onClick={content.toggleOperator}>
          {content.operator === 'and' ? 'Switch to OR' : 'Switch to AND'}
        </button>
      </div>
      {content.filters.map((obj) => (
        <FilterComponent key={obj.name ?? obj.value} obj={obj} />
      ))}
    </div>
  ))
}

export default Search
