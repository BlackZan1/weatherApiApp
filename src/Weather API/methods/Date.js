const getDate = (ss, sr) => {
    if(ss && sr) {
        let sunset = new Date();
        sunset.setTime(ss)
        let date_sunset = sunset.getHours() + ':' + sunset.getMinutes() + ':' + sunset.getSeconds();

        console.log(sunset.getHours());

        let sunrise = new Date();
        sunrise.setTime(sr)
        let date_sunrise = sunrise.getHours() + ':' + sunrise.getMinutes() + ':' + sunrise.getSeconds()

        return [date_sunset, date_sunrise];
    }
    else return;
};

export default { getDate };