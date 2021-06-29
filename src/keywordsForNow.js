const Keywords = ({obj}) => (
  <>
    {obj.list.map((word) => (
      <button
        style={{
          backgroundColor: obj.value.includes(word) ? 'blue' : 'red',
        }}
        key={word}
        onClick={() => obj.toggleValueInList(word)}
      >
        {word}
      </button>
    ))}
  </>
)

export default Keywords
