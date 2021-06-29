const OptionsPicker = ({obj}) => (
  <>
    <label>Options:</label>
    <select
      onChange={(e) => obj.assocValue(e.target.value)}
      id="options"
      name="options"
      defaultValue={obj.value}
    >
      {obj.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
)

export default OptionsPicker
