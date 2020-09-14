
export const createTimestamp =(messyTimeStamp) =>
{
   let date = reformateDate(messyTimeStamp)
    let time = reformateTime(messyTimeStamp)
   return({date,time})
}

const reformateTime = (messyTime) =>
{
    let dateTime = messyTime.split('')
    let time = dateTime.splice(11,5)
    let hourArr = time.splice(0,2)
    let minuteArr = time.splice(1,2)
    let minute = minuteArr.join('')
    let hourStr = hourArr.join('')
    let hour = parseInt(hourStr)
   
    let timeOfday =""
    if(hour > 12)
    {
        hour -= 12
        timeOfday = 'PM'
    }
    else{
        timeOfday = "AM"
    }
     
    return (hour+ ":"+ minute + timeOfday )
}

const reformateDate = (messyDate) =>
{
   let dateTime = messyDate.split('')
   let date = dateTime.splice(0,10)
   let yearArr = date.splice(0,4)
   let dayArr = date.splice(1,2)
   date.splice(2,4)
   let year = yearArr.join('')
   let day = dayArr.join('')
   let month = dayArr.join('')
   month= reformatMonth(month)
   return(month+"/"+day+"/"+ year)
}

const reformatMonth = (month) =>
{
    switch (month) {
        case '01':
            
            month = 'Jan'
            break;
        case '02':
        
            month = 'Feb'
            break;
        case '03':
    
            month = 'Mar'
            break;

        case '04':

            month = 'Apr'
            break;
    
        case '05':

            month = 'May'
            break;

        case '06':

            month = 'Jun'
            break;

        case '07':

            month = 'Jul'
            break;

        case '07':

            month = 'Aug'
            break;

        
        case '09':
            
            month = 'Sep'
            break;
        case '10':
        
            month = 'Oct'
            break;

        case '11':
    
            month = 'Nov'
            break;
        case '12':

            month = 'Dec'
            break;
        default:
            break;
    }
    return month
}