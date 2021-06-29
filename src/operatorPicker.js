const OperatorPicker = ({obj}) => (
  <>
    <label>Operator:</label>
    <select
      onChange={(e) => obj.assocOperator(e.target.value)}
      id="operators"
      name="operators"
      defaultValue={obj.operator}
    >
      {obj.applicableOperators.map((operator) => (
        <option key={operator} value={operator}>
          {operator}
        </option>
      ))}
    </select>
  </>
)

export default OperatorPicker
