const UnitPicker = ({obj}) => (
  <>
    <label>Unit:</label>
    <select
      id="units"
      name="units"
      onChange={(e) => obj.assocUnit(e.target.value)}
      defaultValue={obj.currentUnprefixedUnit}
    >
      {obj.applicableUnits.map((unit) => (
        <option value={unit} key={unit}>
          {unit}
        </option>
      ))}
    </select>
  </>
)

export default UnitPicker
