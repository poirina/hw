let z = prompt(' Введите количество дней'),
    year =  z / 365,
    month = z / 31,
    week = z / 7,
    hour = z * 24,
    min = z * 1440,
    sec = z * 86400;
   (z >= 365) ? console.log(year + ' лет (год)') : console.log('Меньше года');
   (z > 31) ? console.log(month + ' месяцев') : console.log('Меньше месяца');
   (z > 7) ? console.log(week + ' недель') : console.log('Меньше недели');
   (z >= 1) ? console.log(hour + ' часов(а)') : console.log('Меньше дня');
   (z >= 1) ? console.log(min + ' минут(ы)') : console.log('Меньше дня');
   (z >= 1) ? console.log(sec + ' секунд(ы)') : console.log('Меньше дня');
   