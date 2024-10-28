export interface Weather {
    datetime: string;    // Assuming datetime is a string (e.g., ISO format)
    conditions: string;  // The general weather conditions (e.g., "Sunny", "Cloudy")
    description: string; // A more detailed description of the weather
    tempmin: number;     // Minimum temperature, assuming it's a number
    tempmax: number;     // Maximum temperature, also a number
}

//   <h2>{props.datetime}</h2>
//   <p>{props.conditions}</p>
//   <p>{props.description}</p>
//   <p>{props.tempmin}° - {props.tempmax}°</p>