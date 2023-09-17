let students = `[
    {"name":"Боднарюк Максим","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Бурлака Ірина","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Вахнюк Вікторія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Віщак Андрій","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Власійчук  Тетяна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Іванов Олексій","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Кострикова Анастасія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Коханюк Станіслав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Нікуліна Вікторія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Присняк Євгенія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Сворожинськи Володимир","points":[[1,"https://github.com/volodiacv/Laba1",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Скіцько Віолєтта","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Стужук Владислав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Тарадай Крістіна","points":[[1,"https://github.com/Kris070704/lab1_Taradai","https://kris070704.github.io/lab1_Taradai/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Татарин Діана","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Тимчишин Анастасія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Хімчинський Володимир","points":[[1,"https://github.com/Blazewozy/laba1","https://blazewozy.github.io/laba1/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Чепига Богдана","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Мельник Володимир","points":[[1,"https://github.com/kap1yn/LAB_OIT_1","https://kap1yn.github.io/LAB_OIT/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Міхалчан Максиміліан","points":[[1,"https://github.com/WebTechCNU/laba1_mikhalchan","https://webtechcnu.github.io/laba1_mikhalchan/"],[1,"https://github.com/MaximilianMMM/Laba_2_Mikhalchan","https://maximilianmmm.github.io/Laba_2_Mikhalchan/"],[0,"",""],[0,"",""]]},
    {"name":"Назарко Артем","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Отрубчак Тетяна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Ратушняк Наталія","points":[[1,"https://github.com/RNatali/Labolatory1RN","https://rnatali.github.io/Labolatory1RN/button.html"],[1,"https://github.com/RNatali/Laboratory2","https://rnatali.github.io/Laboratory2/button.html"],[0,"",""],[0,"",""]]},
    {"name":"Розновський Роман","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Рябов Олександр","points":[[1,"https://github.com/Sashko192/laba1_Riabov","https://sashko192.github.io/laba1_Riabov/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Сарафінчан Ростислав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Сметанюк Михайло","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Тимчук Олександр","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Токарчук Роман","points":[[1,"https://github.com/RoomToom/lab1","https://roomtoom.github.io/lab1/Papizi.html"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Черней Олексій","points":[[1,"https://github.com/Kibooto/Chernei-Partners-web","https://shark-app-al9zq.ondigitalocean.app"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Чеховський Станіслав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Шмігельська Анна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Лисенко Нікола","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Ліліцак Вікторія","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Лупу Роман","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Лучик Іван","points":[[1,"https://github.com/LychokZZ/laab1","https://lychokzz.github.io/laab1/"],[1,"https://github.com/LychokZZ/laab1","https://lychokzz.github.io/laab1/"],[0,"",""],[0,"",""]]},
    {"name":"Малованюк Станіслав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Марчук Андрій","points":[[1,"https://github.com/Andiry-sys/Lab1","https://andiry-sys.github.io/Lab1/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Мацалковський Владислав","points":[[1,"https://github.com/DeFrag73/lab1","https://defrag73.github.io/lab1/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Немитий Мирослав","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Ратушняк Іван","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Стрієнко Мар'яна-Еммануела","points":[[1,"https://github.com/emmastrienko/lab_1","https://emmastrienko.github.io/lab_1/"],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Торський Сергій","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Трипадуш Богдан","points":[[1,"https://github.com/ArgasDTiger/Internet-Technology-Lab-1","https://argasdtiger.github.io/Internet-Technology-Lab-1/"],[1,"https://github.com/ArgasDTiger/Internet-Technology-Lab-2","https://argasdtiger.github.io/Internet-Technology-Lab-2/"],[0,"",""],[0,"",""]]},
    {"name":"Цера Микита","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Шахов Микита","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Ватаманюк Марта Василівна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Гелич Ганна Геннадіївна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Гриндей Павло Васильович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Губенко Владислав Ігорович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]}, 
    {"name":"Катеринюк Марія Михайлівна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]}, 
    {"name":"Костенюк Артур Михайлович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]}, 
    {"name":"Кукульняк Валентин Віталійович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Матвієнко Андрій Володимирович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Наумук Анна Володимирівна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Погориловський Олександр В'ячеславович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Семенча Єгор Віталійович","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Семенчук Христина Дмитрівна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]},
    {"name":"Трифаненко Катерина Ігорівна","points":[[0,"",""],[0,"",""],[0,"",""],[0,"",""]]}
]`;