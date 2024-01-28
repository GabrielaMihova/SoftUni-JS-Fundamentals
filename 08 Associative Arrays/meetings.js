function meetings (input) {
    let meetingss = {};

    for (let line of input) {
        let [weekday, name] = line.split(" ");

        if (meetingss.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingss[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in meetingss) {
        console.log(`${key} -> ${meetingss[key]}`);
    }
}
meetings (['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);