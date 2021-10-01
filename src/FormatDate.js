
export default function FormatDate(props){
console.log(props.date)
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

        let monthList = 
        [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`
        ];

        let day= dayList[props.date.getDay()];
    let month = monthList[props.date.getMonth()];
    let date = props.date.getDate();


    let hour = props.date.getHours();
                if (hour < 10) 
                {hour=`0${hour}`};
            let minute = props.date.getMinutes();
                if (minute < 10) 
                {minute= `0${minute}`};
 

    return `${day} ${month} ${date} ${hour}:${minute}`
}