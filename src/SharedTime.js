import './SharedTime.css';
const CITY_TIME_OFFSETS = {
  "london": -60,
  "beijing": -480,
  "vancouver": 420,
}

const MINUTE_TO_MILLISECOND = 60000;
const HOUR_TO_MINUTE = 60;

function SharedTime(props) {
  let sharedtime_location = props.location;
  let time_offset = 0;
  let time_length = 5;
  if(props.time_length !== undefined && typeof(props.time_length)==Number){
    time_length = props.time_length;
  }
  let current_time = new Date();
  if(sharedtime_location !== undefined && sharedtime_location in CITY_TIME_OFFSETS){
    time_offset = CITY_TIME_OFFSETS[sharedtime_location];
  } else {
    time_offset = current_time.getTimezoneOffset();
  }
  let time_slots = []
  for(let i=0;i<time_length;i++){
    let display_time = current_time.getUTCHours() - time_offset / HOUR_TO_MINUTE + i;
    if(display_time>24){
      display_time = display_time-24 + "(tmr)";
    } else if(display_time<0){
      display_time = display_time+24 + "(yda)"
    }
    let sharedtimeslot_key = "sharedtimeslot_key_"+i;
    time_slots.push(<div key={sharedtimeslot_key} className="timeslot">{display_time}</div>)
  }
  return (
    <div className="SharedTime">
      <div></div>
      {time_slots}
    </div>
  );
}

export default SharedTime;
