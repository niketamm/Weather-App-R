
export default function FormatDate(props){
       let dayList = 
        [
        `Sunday`,
        `Monday`,
        `Tueday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`
        ];

        let day= dayList[props.date.getDay()];

    let hour = props.date.getHours();
                if (hour < 10) 
                {hour=`0${hour}`};
            let minute = props.date.getMinutes();
                if (minute < 10) 
                {minute= `0${minute}`};
 

    return `on ${day} at ${hour}:${minute}`
}