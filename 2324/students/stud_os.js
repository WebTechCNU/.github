let students = `[
    {"name":"Апатьєв Нікіта Дмитрович","points":[1, 1, 1, 1, 1, 1, 1, 1]},
    {"name":"Бадічел Дмитро Вячеславович ","points":[1, 1, 1, 1, 1, 1, 1, 0]}, 
    {"name":"Боднарюк Іван Юрійович ","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Вайнагій Данило Вікторович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Гладкий Данило Ігорович","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Журат Анастасія Геннадіївна","points":[1, 1, 1, 1, 1, 0, 1, 1]}, 
    {"name":"Зазубик Ірина Олегівна","points":[1, 1, 1, 1, 0, 0, 1, 0]}, 
    {"name":"Крюков Владислав Андрійович","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Кукурудз Надія Андріївна","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Куриляк Назарій Ігорович","points":[1, 1, 1, 1, 0, 0, 0, 0]}, 
    {"name":"Мазур Ярослав Олександрович","points":[1, 1, 1, 1, 0, 0, 0, 0]}, 
    {"name":"Макушинська Анна Андріївна","points":[1, 1, 1, 1, 1, 0, 1, 0]}, 
    {"name":"Минзату Маріана Георгіївна ","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Михайлик Олександр Роландович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Мотовілін Андрій Дмитрович ","points":[1, 1, 1, 0, 0, 0, 1, 1]}, 
    {"name":"Перепелюк Павло Миколайович","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Погребняк Олексій Володимирович","points":[1, 1, 1, 1, 0, 0, 0, 1]}, 
    {"name":"Поченчук Оксана Ігорівна","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Скопецька Анастасія Миколаївна ","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Янтарова Анна Андріївна","points":[1, 1, 1, 1, 1, 0, 0, 0]}, 

    {"name":"Банар Денис","points":[1, 1, 1, 1, 0, 0, 1, 0, 8, 53, "84 B"]}, 
    {"name":"Бумбак Маріан","points":[1, 1, 1, 1, 0, 0, 1, 1, 55, 20, "95 A" ]}, 
    {"name":"Вепрейчук Іван","points":[1, 1, 0, 0, 0, 0, 0, 0, 18, 38, "71 C"]}, 
    {"name":"Гаденка Микола","points":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "50 E" ]}, 
    {"name":"Іліх Максим","points":[1, 1, 0, 1, 0, 0, 1, 0, 16, 40, "82 B"]}, 
    {"name":"Караушу Іван","points":[1, 1, 0, 1, 0, 0, 1, 1, 50, 20, "92 A"]}, 
    {"name":"Карп Андрій","points":[1, 1, 1, 1, 0, 0, 1, 1, 55, 14, "abroad"]}, 
    {"name":"Лішман Анастасія","points":[1, 1, 1, 1, 0, 0, 0, 1, 45, 18, "83 B"]}, 
    {"name":"Равнишин Евеліна","points":[1, 1, 1, 1, 1, 0, 1, 1, 12, "0", "92 A"]}, 
    {"name":"Романчук Ілля","points":[1, 1, 0, 1, 0, 0, 1, 1, 14, "0", "84 B"]}, 
    {"name":"Фрей Євгеній","points":[1, 1, 0, 0, 0, 0, 1, 1, 40, 17, "85 B"]}, 
    {"name":"Шмундир Дмитро","points":[1, 1, 0, 1, 0, 0, 0, 0, 30, 0, "60 D"]}, 
    {"name":"Кирстюк Олександр","points":[1, 1, 1, 1, 0, 0, 1, 0, 45, 12, "83 B"]}, 
    {"name":"Кравчук Анатолій","points":[0, 0, 0, 0, 0, 0, 0, 0,  0,0,"50 E"]}, 

    {"name":"Андрицький Михайло Олексійович","points":[1, 1, 1, 1, 1, 1, 1, 0]}, 
    {"name":"Балан Олександр Ігорович","points":[1, 1, 1, 0, 0, 0, 0, 0]}, 
    {"name":"Гловацький Олексій Олександрович","points":[1, 1, 1, 0, 0, 0, 0, 0]}, 
    {"name":"Дирда Ілля Петрович","points":[1, 1, 1, 1, 0, 0, 0, 1]}, 
    {"name":"Каркавчук Дмитро Вікторович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Ковбінька Олексій Сергійович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Лукян Олександр Нуміторович","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Лучик Павло Вікторович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Николюк Андрій Дмитрович","points":[1, 1, 1, 1, 1, 0, 0, 0]}, 
    {"name":"Саука Михайло Валерійович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Сироїд Вадим Костянтинович","points":[1, 1, 1, 0, 0, 0, 0, 1]}, 
    {"name":"Стрілак Олександр Віталійович","points":[1, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Тодосійчук Михайло Іванович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Токар Іван Дмитрович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 

    {"name":"◦ Анатійчук Роман Васильович","points":[1, 1, 1, 1, 1, 0, 0, 0]}, 
    {"name":"◦ Антонюк Костянтин Олегович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"◦ Білинський Ян Йосипович","points":[1, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"✓ Бледюк Антон Петрович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"◦ Вікован Валентин Костянтинович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"✓ Галюк Олег Олександрович","points":[1, 1, 1, 0, 0, 0, 1, 1]}, 
    {"name":"◦ Гаюк Євген Миколайович","points":[1, 1, 1, 1, 0, 0, 0, 1]}, 
    {"name":"◦ Граб Андрій Миколайович","points":[1, 1, 1, 1, 0, 0, 0, 1]}, 
    {"name":"◦ Дейнеко Олександр Павлович","points":[1, 1, 1, 1, 0, 0, 0, 0]}, 
    {"name":"◦ Деревчук Артем Вячеславович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"◦ Житарюк Едуард Сергійович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"◦ Завялець Олександра Павлівна","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Мігальчан Теодор","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 

    {"name":"Іванова Катерина Вячеславівна","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Кирлан Іван Джованні","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Кіященко Михайло Леонідович","points":[1, 1, 1, 1, 1, 0.5, 1, 1]}, 
    {"name":"Маланчук Сергій Михайлович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Мироник Анастасія Сергіївна","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Мігальчан Теодор Іванович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Петрук Юрій Ярославович   П","points":[1, 1, 1, 1, 0, 0, 0, 0]}, 
    {"name":"Попович Ігор Павлович","points":[1, 1, 1, 1, 0, 0, 0, 0]}, 
    {"name":"Саєнко Святослав Олексійович","points":[0, 0, 0, 0, 0, 0, 0, 0]}, 
    {"name":"Фрідман Юрій Юрійович","points":[1, 1, 1, 1, 1, 1, 1, 1]}, 
    {"name":"Чубрей Андрій Володимирович    П","points":[1, 1, 1, 1, 0, 0, 1, 1]}, 
    {"name":"Шинкура Марія Владиславівна","points":[1, 1, 1, 1, 1, 0, 1, 1]}, 
    {"name":"Яцюк Марія Вячеславівна","points":[1, 1, 1, 1, 1, 1, 1, 1]}
]`;