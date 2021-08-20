import Counter from "./Counter.component";

const Counters=(props)=> {
    return (
      <div>
        {props.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              id={counter.id}
              onIncrement={props.onIncrement}
              onDecrement={props.onDecrement}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    );
  }

export default Counters;