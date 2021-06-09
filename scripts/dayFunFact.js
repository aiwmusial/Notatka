// getting the current date
let dateToday = new Date();
// extracting the day
let dayTodayNum = dateToday.getDay();
// setting up variables to display day of the week (words not numbers)
let dayTodayWord;
// setting up funny saying
let funnyQuote;

// using switch to browse through the days
switch(dayTodayNum){
    case 0:
        dayTodayWord = 'Niedziela';
        funnyQuote = 'Tygrysy mają paski nie tylko na futrze, ale również na skórze';
        break;
    case 1:
        dayTodayWord = 'Poniedziałek';
        funnyQuote = 'Serce krewetki umiejscowione jest w jej głowie';
        break;
    case 2:
        dayTodayWord = 'Wtorek';
        funnyQuote = 'Kolibry to jedyne ptaki, które potrafią latać w tył';
        break;
    case 3:
        dayTodayWord = 'Środa';
        funnyQuote = 'Modrzew jest jedynym iglakiem, który każdej jesieni zrzuca igły';
        break;
    case 4:
        dayTodayWord = 'Czwartek';
        funnyQuote = 'Krew pasikoników jest koloru białego';
        break;
    case 5:
        dayTodayWord = 'Piątek';
        funnyQuote = 'Słonie, hipopotamy i nosorożce to jedyne ssaki, które nie potrafią skakać';
        break;
    case 6:
        dayTodayWord = 'Sobota';
        funnyQuote = 'Najstarszym żyjącym dziś gatunkiem drzewa jest miłorząb';
        break;
}
// display day and fun fact
document.getElementById('dayName').innerHTML = dayTodayWord;
document.getElementById('funFact').innerHTML = `Ciekawostka na dziś: <br> <em>${funnyQuote}</em>`;
