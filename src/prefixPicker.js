const PrefixPicker = ({obj}) => (
  <>
    {obj.applicablePrefixes.length > 1 && (
      <>
        <label>Prefix:</label>
        <select
          id="prefixes"
          name="prefixes"
          key={obj.unit}
          defaultValue={obj.currentUnitPrefix}
          onChange={(e) =>
            obj.assocUnit(e.target.value + obj.currentUnprefixedUnit)
          }
        >
          {obj?.applicablePrefixes?.map((prefix) => (
            <option value={prefix} key={prefix}>
              {prefix}
            </option>
          ))}
        </select>
      </>
    )}
  </>
)

export default PrefixPicker
