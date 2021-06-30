import NotSoCrispSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

import KeywordsMaybeSomethingElseInTheFutureDunno from './keywordsForNow'
import OperatorPicker from './operatorPicker'
import OptionsPicker from './optionsPicker'
import PrefixPicker from './prefixPicker'
import UnitPicker from './unitPicker'

const RangeSlider = NotSoCrispSlider.createSliderWithTooltip(
  NotSoCrispSlider.Range,
)
const RegularSlider = NotSoCrispSlider.createSliderWithTooltip(NotSoCrispSlider)

const Filter = ({obj}) => (
  <div
    style={{
      backgroundColor: obj.isActive ? 'lightcyan' : 'lightsalmon',
      padding: 10,
      margin: 10,
    }}
    key={obj.name ?? obj?.value}
  >
    <h3>{obj.name ?? obj.value}</h3>
    <button onClick={(e) => obj.toggleIsActive(e)}>
      {obj.isActive ? 'DISABLE' : 'ENABLE'}
    </button>
    <br />
    {obj?.operator === 'between' && (
      <RangeSlider
        min={obj.range[0]}
        max={obj.range[1]}
        step={(obj.range[1] - obj.range[0]) / 100}
        defaultValue={obj.range}
        onChange={obj.assocValue}
        key={obj.unit}
      />
    )}
    {['gt', 'gte', 'lt', 'lte'].includes(obj?.operator) && (
      <RegularSlider
        min={obj.range[0]}
        max={obj.range[1]}
        step={(obj.range[1] - obj.range[0]) / 100}
        onChange={obj.assocValue}
        key={obj.unit}
      />
    )}
    {['ilike', 'nilike', 'like', 'nlike', 'regexp', 'eq', 'neq'].includes(
      obj?.operator,
    ) && <input type="text" onChange={(e) => obj.assocValue(e.target.value)} />}
    {obj.options && <OptionsPicker obj={obj} />}
    {obj.list && <KeywordsMaybeSomethingElseInTheFutureDunno obj={obj} />}
    <br />
    {obj.operator && <OperatorPicker obj={obj} />}
    <br />
    {obj.initialUnit && <PrefixPicker obj={obj} />}
    <br />
    {obj.initialUnit && <UnitPicker obj={obj} />}
  </div>
)

export default Filter
