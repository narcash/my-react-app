import CoastItem from './CostItem'
import Card from '../UI/Card'
import './Costs.css'
const Costs = (props) => {
  return (
    <Card className="costs">
      <CoastItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      />
      <CoastItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      />
      <CoastItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      />
    </Card>
  )
}

export default Costs
