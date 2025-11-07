const students = [
  {"name": "Булига Маркус Вікторович", "math": 15, "culture": 13, "algebra": 16, "id": "Bulyga", "discrete": 8, "progr": 19},
  {"name": "Водільніков Денис Сергійович", "math": 18, "culture": 9, "algebra": 13.5, "id": "Vodilnikov", "discrete": 6.5, "progr": 24},
  {"name": "Григорків Анастасія Іванівна", "math": 16, "culture": 17, "algebra": 22, "id": "Hryhorkiv", "discrete": 28, "progr": 25},
  {"name": "Гуралюк Максім Марянович", "math": 19, "culture": 5, "algebra": 9, "id": "Huraliuk", "discrete": 7.5, "progr": 22},
  {"name": "Золотухін Андрій Євгенович", "math": 16, "culture": 5, "algebra": 0, "id": "Zolotukhin", "discrete": 5, "progr": 16},
  {"name": "Кадук Ярослава Миколаївна", "math": 25, "culture": 17, "algebra": 16, "id": "Kaduk", "discrete": 28, "progr": 24},
  {"name": "Кіріяк Софія Іванівна", "math": 25, "culture": 29, "algebra": 20.5, "id": "Kiriak", "discrete": 29, "progr": 24},
  {"name": "Кравецька Анастасія Миколаївна", "math": 18, "culture": 13, "algebra": 14.5, "id": "Kravetska", "discrete": 16, "progr": 25},
  {"name": "Кривошук Адріана Вікторівна", "math": 23, "culture": 8, "algebra": 16.5, "id": "Kryvoshuk", "discrete": 24, "progr": 20},
  {"name": "Кулюк Павєл Ліліянович", "math": 16, "culture": 10, "algebra": 4, "id": "Kuliuk", "discrete": 7, "progr": 10},
  {"name": "Лазоренко Анастасія Романівна", "math": 17, "culture": 11, "algebra": 10, "id": "Lazorenko", "discrete": 19, "progr": 24},
  {"name": "Лозовінський Владислав Володимирович", "math": 17, "culture": 10, "algebra": 0, "id": "Lozovinskyi", "discrete": 4, "progr": 9},
  {"name": "Мезуд Нассер", "math": 14, "culture": 10, "algebra": 16, "id": "Mezud", "discrete": 12.5, "progr": 21},
  {"name": "Міщенко Таїсія Ярославівна", "math": 19, "culture": 18, "algebra": 16.5, "id": "Mishchenko", "discrete": 19.5, "progr": 22},
  {"name": "Нємцов Максим Євгенович", "math": 19, "culture": 16, "algebra": 12.5, "id": "Niemtsov", "discrete": 24.5, "progr": 24},
  {"name": "Николюк Максим Любомирович", "math": 16, "culture": 16, "algebra": 14, "id": "Nykoliuk", "discrete": 1, "progr": 12},
  {"name": "Онуфрійчук Іван Іванович", "math": 17, "culture": 10, "algebra": 15, "id": "Onufriichuk", "discrete": 13, "progr": 22},
  {"name": "Пласконь Марко Романович", "math": 26, "culture": 21, "algebra": 15.5, "id": "Plaskon", "discrete": 24, "progr": 18},
  {"name": "Романюк Марія Олексіївна", "math": 23, "culture": 28, "algebra": 20, "id": "Romaniuk", "discrete": 28.5, "progr": 24},
  {"name": "Світайло Олексій Олександрович", "math": 25, "culture": 28, "algebra": 19, "id": "Svitailo", "discrete": 26, "progr": 24},
  {"name": "Сімак Алла Русланівна", "math": 17, "culture": 4, "algebra": 0, "id": "Simak", "discrete": 23, "progr": 8},
  {"name": "Скрипниченко Тимур Денисович", "math": 18, "culture": 9, "algebra": 1, "id": "Skrypnychenko", "discrete": 1, "progr": 16},
  {"name": "Соколовський Володимир Юрійович", "math": 17, "culture": 16, "algebra": 19, "id": "Sokolovsky", "discrete": 1, "progr": 16},
  {"name": "Старинська Валерія Олександрівна", "math": 17, "culture": 9, "algebra": 0, "id": "Starynska", "discrete": null, "progr": 11},
  {"name": "Сяброва Дарина Михайлівна", "math": 16, "culture": 22, "algebra": 17, "id": "Siabrova", "discrete": 16, "progr": 17},
  {"name": "Українець Денис Юрійович", "math": 16, "culture": 4, "algebra": 16, "id": "Ukrainets", "discrete": 2, "progr": 2},
  {"name": "Хитрик Родіон Володимирович", "math": 14, "culture": 13, "algebra": 12, "id": "Khytryk", "discrete": 14, "progr": 18},
  {"name": "Ходосевич Віталіна Володимирівна", "math": 15, "culture": 21, "algebra": 17, "id": "Khodosevych", "discrete": 20, "progr": 21},
  {"name": "Швага Аліна Миколаївна", "math": 18, "culture": 17, "algebra": 12.5, "id": "Shvaha", "discrete": 28, "progr": 23},
  {"name": "Шимкович Андрій Русланович", "math": 24, "culture": 22, "algebra": 16, "id": "Shymkovych", "discrete": 29, "progr": 21},
  {"name": "Шкварчук Анастасія Сергіївна", "math": 23, "culture": 18, "algebra": 11, "id": "Shkvarchuk", "discrete": 11, "progr": 22}
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
        ];

        const rows = document.querySelectorAll('table tbody tr');

        subjects.forEach((field, index) => {
            if (rows[index]) {
                const cell = rows[index].querySelectorAll('td')[1];
                cell.textContent = student[field] ?? ''; // insert value or empty if missing
            }
        });

        // Optionally update name on page
        const nameElement = document.querySelector('#student-name');
        if (nameElement) nameElement.textContent = student['ПІП'];

    } catch (err) {
        console.error('Error loading student data:', err);
    }
}