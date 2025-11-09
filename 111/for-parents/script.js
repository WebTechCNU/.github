const students = [
  {"name": "Булига Маркус Вікторович", "math": 15, "culture": 13, "algebra": 16, "id": "Bulyga", "discrete": 8, "progr": 19, "ukr": 0, "propusk": "1,0,0"},
  {"name": "Водільніков Денис Сергійович", "math": 18, "culture": 9, "algebra": 13.5, "id": "Vodilnikov", "discrete": 6.5, "progr": 24, "ukr": 16, "propusk": "0,0,0"},
  {"name": "Григорків Анастасія Іванівна", "math": 28, "culture": 17, "algebra": 22, "id": "Hryhorkiv", "discrete": 28, "progr": 25, "ukr": 20, "propusk": "2,0,0"},
  {"name": "Гуралюк Максім Марянович", "math": 14, "culture": 5, "algebra": 9, "id": "Huraliuk", "discrete": 7.5, "progr": 22, "ukr": 18, "propusk": "1,0,0"},
  {"name": "Золотухін Андрій Євгенович", "math": 6, "culture": 5, "algebra": 0, "id": "Zolotukhin", "discrete": 5, "progr": 16, "ukr": 7, "propusk": "3,0,3"},
  {"name": "Кадук Ярослава Миколаївна", "math": 25, "culture": 17, "algebra": 16, "id": "Kaduk", "discrete": 28, "progr": 24, "ukr": 17, "propusk": "0,0,0"},
  {"name": "Кіріяк Софія Іванівна", "math": 25, "culture": 29, "algebra": 20.5, "id": "Kiriak", "discrete": 29, "progr": 24, "ukr": 20, "propusk": "0,0,0"},
  {"name": "Кравецька Анастасія Миколаївна", "math": 18, "culture": 13, "algebra": 14.5, "id": "Kravetska", "discrete": 16, "progr": 25, "ukr": 12, "propusk": "1,0,0"},
  {"name": "Кривошук Адріана Вікторівна", "math": 26, "culture": 8, "algebra": 16.5, "id": "Kryvoshuk", "discrete": 24, "progr": 20, "ukr": 16, "propusk": "0,0,0"},
  {"name": "Кулюк Павєл Ліліянович", "math": 14, "culture": 10, "algebra": 4, "id": "Kuliuk", "discrete": 7, "progr": 10, "ukr": 10, "propusk": "1,0,0"},
  {"name": "Лазоренко Анастасія Романівна", "math": 24, "culture": 11, "algebra": 10, "id": "Lazorenko", "discrete": 19, "progr": 24, "ukr": 18.5, "propusk": "0,0,0"},
  {"name": "Лозовінський Владислав Володимирович", "math": 9, "culture": 10, "algebra": 0, "id": "Lozovinskyi", "discrete": 4, "progr": 9, "ukr": 8, "propusk": "1,2,0"},
  {"name": "Мезуд Нассер", "math": 17, "culture": 10, "algebra": 16, "id": "Mezud", "discrete": 12.5, "progr": 21, "ukr": 13.5, "propusk": "0,2,0"},
  {"name": "Міщенко Таїсія Ярославівна", "math": 11, "culture": 18, "algebra": 16.5, "id": "Mishchenko", "discrete": 19.5, "progr": 22, "ukr": 14.5, "propusk": "1,1,0"},
  {"name": "Нємцов Максим Євгенович", "math": 17, "culture": 16, "algebra": 12.5, "id": "Niemtsov", "discrete": 24.5, "progr": 24, "ukr": 16, "propusk": "0,0,0"},
  {"name": "Николюк Максим Любомирович", "math": 12, "culture": 16, "algebra": 14, "id": "Nykoliuk", "discrete": 1, "progr": 12, "ukr": null, "propusk": "0,1,0"},
  {"name": "Онуфрійчук Іван Іванович", "math": 15, "culture": 10, "algebra": 15, "id": "Onufriichuk", "discrete": 13, "progr": 22, "ukr": 17, "propusk": "0,0,0"},
  {"name": "Пласконь Марко Романович", "math": 26, "culture": 21, "algebra": 15.5, "id": "Plaskon", "discrete": 24, "progr": 18, "ukr": 19.5, "propusk": "0,0,0"},
  {"name": "Романюк Марія Олексіївна", "math": 23, "culture": 28, "algebra": 20, "id": "Romaniuk", "discrete": 28.5, "progr": 24, "ukr": 17, "propusk": "0,0,0"},
  {"name": "Світайло Олексій Олександрович", "math": 24, "culture": 28, "algebra": 19, "id": "Svitailo", "discrete": 26, "progr": 24, "ukr": 12.5, "propusk": "0,0,0"},
  {"name": "Сімак Алла Русланівна", "math": 3, "culture": 4, "algebra": 0, "id": "Simak", "discrete": 23, "progr": 8, "ukr": 1.5, "propusk": "2,3,0"},
  {"name": "Скрипниченко Тимур Денисович", "math": 6, "culture": 9, "algebra": 1, "id": "Skrypnychenko", "discrete": 1, "progr": 16, "ukr": 14, "propusk": "2,2,2"},
  {"name": "Соколовський Володимир Юрійович", "math": 13, "culture": 16, "algebra": 19, "id": "Sokolovsky", "discrete": 1, "progr": 16, "ukr": 18.5, "propusk": "0,0,0"},
  {"name": "Старинська Валерія Олександрівна", "math": 14, "culture": 9, "algebra": 0, "id": "Starynska", "discrete": null, "progr": 11, "ukr": 9.5, "propusk": "2,2,0"},
  {"name": "Сяброва Дарина Михайлівна", "math": 22, "culture": 22, "algebra": 17, "id": "Siabrova", "discrete": 16, "progr": 17, "ukr": 18, "propusk": "0,0,0"},
  {"name": "Українець Денис Юрійович", "math": 7, "culture": 4, "algebra": 16, "id": "Ukrainets", "discrete": 2, "progr": 2, "ukr": 6, "propusk": "3,2,0"},
  {"name": "Хитрик Родіон Володимирович", "math": 15, "culture": 13, "algebra": 12, "id": "Khytryk", "discrete": 14, "progr": 18, "ukr": 15.5, "propusk": "0,0,0"},
  {"name": "Ходосевич Віталіна Володимирівна", "math": 22, "culture": 21, "algebra": 17, "id": "Khodosevych", "discrete": 20, "progr": 21, "ukr": 17, "propusk": "2,1,0"},
  {"name": "Швага Аліна Миколаївна", "math": 23, "culture": 17, "algebra": 12.5, "id": "Shvaha", "discrete": 28, "progr": 23, "ukr": 19, "propusk": "0,0,0"},
  {"name": "Шимкович Андрій Русланович", "math": 27, "culture": 22, "algebra": 16, "id": "Shymkovych", "discrete": 29, "progr": 21, "ukr": 17, "propusk": "0,0,0"},
  {"name": "Шкварчук Анастасія Сергіївна", "math": 18, "culture": 18, "algebra": 11, "id": "Shkvarchuk", "discrete": 11, "progr": 22, "ukr": 19, "propusk": "2,2,0"}
]


async function init(id) {
    try {
        // Load the JSON file
        const student = students.find(s => s.id === id);

        // Find the student by id
        if (!student) {
            console.error(`Student with id "${id}" not found`);
            return;
        }

        // Fill the table rows with corresponding values
        const subjects = [
            'culture',          // Актуальні питання історії та культури України
            'algebra',       // Алгебра і геометрія
            'discrete',      // Дискретна математика
            'math',      // Математичний аналіз
            'progr',   // Програмування
            'ukr'
        ];

        const rows = document.querySelectorAll('table tbody tr');

        subjects.forEach((field, index) => {
            if (rows[index]) {
                const cell = rows[index].querySelectorAll('td')[1];
                cell.textContent = student[field] ?? ''; // insert value or empty if missing
            }
        });

        let missing = student['propusk'] ? student['propusk'].split(',').map(x => parseInt(x)) : [0,0,0];
        rows[0].querySelectorAll('td')[3].textContent = missing[0];
        rows[2].querySelectorAll('td')[3].textContent = missing[2];

        // Optionally update name on page
        const nameElement = document.querySelector('#student-name');
        if (nameElement) nameElement.textContent = student['ПІП'];

    } catch (err) {
        console.error('Error loading student data:', err);
    }
}