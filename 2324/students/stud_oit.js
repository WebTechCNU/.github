let students = `[
    {"name":"Боднарюк Максим","points":[
        [1,"https://github.com/Bodnamax/Bodnariuk.github.io","https://bodnamax.github.io/Bodnariuk.github.io/",""],
        [1,"https://github.com/Bodnamax/Bodnariuk-lab2.github.io","https://bodnamax.github.io/Bodnariuk-lab2.github.io/",""],
        [0.8,"https://github.com/Bodnamax/Bodnariuk-lab-3","https://bodnamax.github.io/Bodnariuk-lab-3/content.html#Scout","(3)градієнт"],
        [1,"https://github.com/Bodnamax/Bodnariuk_laba4.git","https://bodnamax.github.io/Bodnariuk_laba4/",""]]},
    {"name":"Бурлака Ірина","points":[
        [1,"https://github.com/burlakaIryna/burlakaIryna.github.io","https://burlakairyna.github.io/nnn.html",""],
        [1,"https://github.com/burlakaIryna/lab234","https://burlakairyna.github.io/lab234/",""],
        [1,"https://github.com/burlakaIryna/lab234","https://burlakairyna.github.io/lab234/",""],
        [1,"https://github.com/burlakaIryna/lab234","https://burlakairyna.github.io/lab234/",""]]},
    {"name":"Вахнюк Вікторія","points":[
        [1,"https://github.com/viktoriavahniuk17/lab1","https://viktoriavahniuk17.github.io/lab1/",""],
        [1,"https://github.com/viktoriavahniuk17","https://viktoriavahniuk17.github.io/lab234/",""],
        [1,"https://github.com/viktoriavahniuk17","https://viktoriavahniuk17.github.io/lab234/",""],
        [1,"https://github.com/viktoriavahniuk17","https://viktoriavahniuk17.github.io/lab234/",""]]},
    {"name":"Віщак Андрій","points":[
        [1,"https://github.com/Andriu3245/Andriu3245.github.io","https://andriu3245.github.io/",""],
        [1,"https://github.com/Andriu3245/Andriu3245.github.io","https://andriu3245.github.io/",""],
        [1,"https://github.com/Andriu3245/Lab-3","https://andriu3245.github.io/Lab-3/",""],
        [1,"https://github.com/Andriu3245/lab4","https://andriu3245.github.io/lab4/",""]]},
    {"name":"Власійчук  Тетяна","points":[
        [1,"https://github.com/vlasiichuktetiana/lab1","https://vlasiichuktetiana.github.io/lab1/",""],
        [1,"https://github.com/vlasiichuktetiana/lab2","https://vlasiichuktetiana.github.io/lab2/",""],
        [1,"https://github.com/vlasiichuktetiana/lab3","https://vlasiichuktetiana.github.io/lab3/",""],
        [0.8,"https://github.com/vlasiichuktetiana/lab4","https://vlasiichuktetiana.github.io/lab4/","out of time"]]},
    {"name":"Іванов Олексій","points":[
        [1,"https://github.com/Nimarchik/Nimarchik.github.io","https://nimarchik.github.io/",""],
        [1,"https://github.com/Nimarchik/Nimarchik.github.io","https://nimarchik.github.io/",""],
        [1,"https://github.com/Nimarchik/Nimarchik2.github.io","https://nimarchik.github.io/Nimarchik2.github.io/index.html",""],
        [1,"","https://nimarchiklab-4.netlify.app",""]]},
    {"name":"Кострикова Анастасія","points":[
        [1,"https://github.com/NanaDrama2/online-shop/","https://nanadrama2.github.io/online-shop/",""],
        [1,"https://github.com/NanaDrama2/nanadrama2.github.io","https://nanadrama2.github.io/cakes/",""],
        [0.8,"https://github.com/NanaDrama2/nanadrama2.github.io","https://nanadrama2.github.io/cakes/","(2)кнопка навігації вгору; (3)градієнт"],
        [0.8,"https://github.com/NanaDrama2/nanadrama2.github.io","https://nanadrama2.github.io/cakes/","(10)bootstrap"]]},
    {"name":"Коханюк Станіслав","points":[
        [1,"https://github.com/staaskokhaniukk/lab1.2_Kokhaniuk","https://staaskokhaniukk.github.io/lab1.2_Kokhaniuk/",""],
        [1,"https://github.com/staaskokhaniukk/lab1.2_Kokhaniuk","https://staaskokhaniukk.github.io/lab1.2_Kokhaniuk/",""],
        [1,"https://github.com/staaskokhaniukk/Staas_Lab_3","https://staaskokhaniukk.github.io/Staas_Lab_3/",""],
        [1,"https://staaskokhaniukk.github.io/staas_lab4/","https://staaskokhaniukk.github.io/staas_lab4/","Out of time"]]},
    {"name":"Нікуліна Вікторія","points":[
        [1,"https://github.com/NikkiVik/lab1","https://nikkivik.github.io/lab1/index.html",""],
        [1,"https://github.com/NikkiVik/laba2","https://nikkivik.github.io/laba2/",""],
        [1,"https://github.com/NikkiVik/laba3","https://nikkivik.github.io/Lab3/",""],
        [0.8,"https://github.com/NikkiVik/lab4","https://nikkivik.github.io/lab4/","(3)Sign in modal"]]},
    {"name":"Присняк Євгенія","points":[
        [0.8,"https://github.com/Evgeniya10/Labs-1-3.","","Out of time, semantic html"],
        [0.8,"https://github.com/Evgeniya10/Labs-1-3.","","Out of time"],
        [0.5,"https://github.com/Evgeniya10/Labs-1-3.","","Out of time, gradients, scroll up, dropdown"],
        [0,"","",""]]},
    {"name":"Сворожинськи Володимир","points":[
        [1,"https://github.com/volodiacv/Laba1","",""],
        [1,"https://github.com/volodiacv/Laba-2-3.git","https://maxvonlancaster.github.io/Laba-2-3/index.html",""],
        [0.8,"https://github.com/volodiacv/Laba-2-3.git","https://maxvonlancaster.github.io/Laba-2-3/index.html","(3)градієнт"],
        [0,"","",""]]},
    {"name":"Скіцько Віолєтта","points":[
        [1,"https://github.com/vviolettaaa/vviolettaaa1.github.io","https://vviolettaaa.github.io/vviolettaaa1.github.io/",""],
        [1,"https://github.com/vviolettaaa/vviolettaaalab.github.io","https://vviolettaaa.github.io/vviolettaaalab.github.io/index.html",""],
        [1,"https://github.com/vviolettaaa/vviolettaaalab.github.io","https://vviolettaaa.github.io/vviolettaaalab.github.io/index.html",""],
        [1,"https://github.com/vviolettaaa/vviolettaaalab.github.io","https://vviolettaaa.github.io/vviolettaaalab.github.io/index.html",""]]},
    {"name":"Стужук Владислав","points":[
        [0.8,"","https://stuzhukv.github.io/Lab1/","Out of time"],
        [0.8,"","https://stuzhukv.github.io/Lab2/","Out of time"],
        [0.8,"","https://stuzhukv.github.io/Lab3/","(5)flex, grid"],
        [0.8,"","https://stuzhukv.github.io/Lab4/","(4)adaptive menu"]]},
    {"name":"Тарадай Крістіна","points":[
        [1,"https://github.com/Kris070704/lab1_Taradai","https://kris070704.github.io/lab1_Taradai/",""],
        [1,"https://github.com/Kris070704/Lab2_Taradai","https://kris070704.github.io/Lab2_Taradai/login.html",""],
        [0.8,"https://github.com/Kris070704/Lab3_Taradai","https://kris070704.github.io/Lab3_Taradai/achievement.html","Out of time, gradients"],
        [0,"","",""]]},
    {"name":"Татарин Діана","points":[
        [1,"https://github.com/Dianatataryn/web_lab_1","https://dianatataryn.github.io/web_lab_1/",""],
        [0.8,"https://github.com/Dianatataryn/lab.2.3.4","https://dianatataryn.github.io/lab.2.3.4/","Out of time"],
        [1,"https://github.com/Dianatataryn/lab.2.3.4","https://dianatataryn.github.io/lab.2.3.4/",""],
        [1,"https://github.com/Dianatataryn/lab.2.3.4","https://dianatataryn.github.io/lab.2.3.4/",""]]},
    {"name":"Тимчишин Анастасія","points":[
        [1,"https://github.com/Nastya3333333333333/Laba1","https://nastya3333333333333.github.io/Laba1/main",""],
        [1,"https://github.com/Nastya3333333333333/Laba2","https://nastya3333333333333.github.io/Laba2/main.html",""],
        [1,"https://github.com/Nastya3333333333333/Laba3","https://nastya3333333333333.github.io/Laba3/main.html",""],
        [0.8,"https://github.com/Nastya3333333333333/Laba4","https://nastya3333333333333.github.io/Laba4/main.html","(10)bootstrap, (3)Sign in modal"]]},
    {"name":"Хімчинський Володимир","points":[
        [1,"https://github.com/Blazewozy/laba1","https://blazewozy.github.io/laba1/",""],
        [0.8,"https://github.com/Blazewozy/laba1","https://653985409a845e3258a2e4b5--precious-piroshki-4d67d2.netlify.app/",""],
        [0.8,"https://github.com/Blazewozy/laba1","https://653985409a845e3258a2e4b5--precious-piroshki-4d67d2.netlify.app/","(10)підменю-dropdown"],
        [1,"https://github.com/Blazewozy/laba1","https://653985409a845e3258a2e4b5--precious-piroshki-4d67d2.netlify.app/",""]]},
    {"name":"Чепига Богдана","points":[
        [1,"https://github.com/Dana2704/Dana27041.github.io","https://dana2704.github.io/Dana27041.github.io/",""],
        [1,"https://github.com/Dana2704/-2-3-4.","https://dana2704.github.io/-2-3-4./",""],
        [1,"https://github.com/Dana2704/-2-3-4.","https://dana2704.github.io/-2-3-4./",""],
        [0.8,"https://github.com/Dana2704/-2-3-4.","https://dana2704.github.io/-2-3-4./","(10)bootstrap"]]},
    {"name":"Мельник Володимир","points":[
        [0.8,"https://github.com/kap1yn/LAB_OIT_1","https://kap1yn.github.io/LAB_OIT/","90 A"],
        [0.8,"https://github.com/kap1yn/LAB_OIT_1","https://kap1yn.github.io/LAB_OIT/",""],
        [1,"https://github.com/kap1yn/LAB_OIT_3_FINAL","https://kap1yn.github.io/LAB_OIT_3_FINAL/",""],
        [1,"https://github.com/kap1yn/LAB_OIT_4","https://kap1yn.github.io/LAB_OIT_4/",""]]},
    {"name":"Міхалчан Максиміліан","points":[
        [1,"https://github.com/WebTechCNU/laba1_mikhalchan","https://webtechcnu.github.io/laba1_mikhalchan/","95 A"],
        [1,"https://github.com/MaximilianMMM/Laba_2_Mikhalchan","https://maximilianmmm.github.io/Laba_2_Mikhalchan/",""],
        [1,"https://github.com/MaximilianMMM/laba_3_Mikhalchan","https://maximilianmmm.github.io/laba_3_Mikhalchan/",""],
        [1,"https://github.com/MaximilianMMM/Laba_4_Mihalchan","https://maximilianmmm.github.io/Laba_4_Mihalchan/",""]]},
    {"name":"Назарко Артем","points":[
        [0.8,"https://github.com/WebTechCNU/Laba1_Nazarko","https://webtechcnu.github.io/Laba1_Nazarko/","95 A"],
        [0.8,"https://github.com/WebTechCNU/laba2_Nazarko","https://webtechcnu.github.io/laba2_Nazarko/",""],
        [1,"https://github.com/WebTechCNU/Laba_4_Nazarko","https://webtechcnu.github.io/Laba_4_Nazarko/index.html/index.html",""],
        [1,"https://github.com/WebTechCNU/Laba_4_Nazarko","https://webtechcnu.github.io/Laba_4_Nazarko/index.html/index.html",""],
        [0.8,"https://github.com/18Artem26/lab5_Nazarko","https://18artem26.github.io/lab5_Nazarko/",""]]},
    {"name":"Отрубчак Тетяна","points":[
        [1,"https://github.com/taniaotr/lab2__otrubchak/tree/main","https://taniaotr.github.io/lab2__otrubchak/landing/index.html","90 A"],
        [1,"https://github.com/taniaotr/lab2__otrubchak/tree/main","https://taniaotr.github.io/lab2__otrubchak/landing/index.html",""],
        [1,"https://github.com/taniaotr/laba3_otrubchakt","https://taniaotr.github.io/laba3_otrubchakt/index.html",""],
        [0.8,"https://github.com/taniaotr/laba4_otrubchakt","https://taniaotr.github.io/laba4_otrubchakt/","(2)Sign in"]]},
    {"name":"Ратушняк Наталія","points":[
        [1,"https://github.com/RNatali/Labolatory1RN","https://rnatali.github.io/Labolatory1RN/button.html","95 A"],
        [1,"https://github.com/RNatali/Laboratory2","https://rnatali.github.io/Laboratory2/button.html",""],
        [1,"https://github.com/RNatali/Laboratory3","https://rnatali.github.io/Laboratory3/button.html",""],
        [1,"https://github.com/RNatali/Laboratory4","https://rnatali.github.io/Laboratory4/button.html",""]]},
    {"name":"Розновський Роман","points":[
        [0.5,"https://github.com/roznovskyi/OIT_labs.git","","60 D; No deployment link provided; Out of time; Images not loading"],
        [0.5,"https://github.com/roznovskyi/OIT_labs.git","","No deployment link provided; Out of time; Images not loading"],
        [0.5,"https://github.com/roznovskyi/OIT_labs.git","","No deployment link provided; Images not loading"],
        [0.5,"https://github.com/roznovskyi/OIT_labs.git","","No deployment link provided; Images not loading"]]},
    {"name":"Рябов Олександр","points":[
        [1,"https://github.com/Sashko192/laba1_Riabov","https://sashko192.github.io/laba1_Riabov/","90 A"],
        [1,"https://github.com/Sashko192/lab2_Riabov","https://sashko192.github.io/lab2_Riabov/",""],
        [1,"https://github.com/Sashko192/Lab3_Riabov","https://sashko192.github.io/Lab3_Riabov/",""],
        [1,"https://github.com/Sashko192/Lab4_Riabov","https://touragencyriabov.netlify.app/",""]]},
    {"name":"Сарафінчан Ростислав","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""]]},
    {"name":"Сметанюк Михайло","points":[
        [1,"https://github.com/MishaSmetaniuk/lab1","https://mishasmetaniuk.github.io/lab1/","85 B"],
        [0.8,"https://github.com/MishaSmetaniuk/lab2","https://mishasmetaniuk.github.io/lab2/",""],
        [0.8,"https://github.com/WebTechCNU/Lab3_Smetaniuk","https://webtechcnu.github.io/Lab3_Smetaniuk/","(3)градієнт"],
        [1,"https://github.com/MishaSmetaniuk/Lab4_Smetaniuk","https://mishasmetaniuk.github.io/Lab4_Smetaniuk/bootstrap.html",""]]},
    {"name":"Тимчук Олександр","points":[
        [1,"https://github.com/TymchukAlex/Laba_1_OiT","https://tymchukalex.github.io/Laba_1_OiT/","85 B"],
        [1,"https://github.com/TymchukAlex/Laba_2_OiT","https://maxvonlancaster.github.io/Laba_2_OiT/",""],
        [0.8,"https://github.com/TymchukAlex/Laba_3_OiT","https://tymchukalex.github.io/Laba_3_OiT/","(2)кнопка навігації вгору;"],
        [0.8,"https://github.com/TymchukAlex/Laba_4_OIT","https://tymchukalex.github.io/Laba_4_OIT/","(10)bootstrap, (2)Sign in"]]},
    {"name":"Токарчук Роман","points":[
        [0.8,"https://github.com/RoomToom/lab1","https://roomtoom.github.io/lab1/Papizi.html","90 A"],
        [0.8,"https://github.com/RoomToom/lab1","https://roomtoom.github.io/lab1/Papizi.html",""],
        [1,"https://github.com/RoomToom/lab3.1","https://roomtoom.github.io/lab3.1/dobryipochantek/",""],
        [1,"https://github.com/RoomToom/lab4","https://roomtoom.github.io/lab4/",""]]},
    {"name":"Черней Олексій","points":[
        [1,"https://github.com/Kibooto/Chernei-Partners-web","https://shark-app-al9zq.ondigitalocean.app","100 A"],
        [1,"https://github.com/Kibooto/CalculatorPRO","https://king-prawn-app-6zvsb.ondigitalocean.app",""],
        [1,"https://github.com/Kibooto/3lab","https://king-prawn-app-6zvsb.ondigitalocean.app",""],
        [1,"https://github.com/Kibooto/4lab","https://king-prawn-app-6zvsb.ondigitalocean.app",""],
        [1,"https://github.com/Kibooto/doggie-type","https://github.com/Kibooto/doggie-type",""]]},
    {"name":"Чеховський Станіслав","points":[
        [0.8,"https://github.com/MORCHIK1/HTML","https://morchik1.github.io/HTML/","90 A"],
        [1,"https://github.com/MORCHIK1/HTML2/tree/main","https://morchik1.github.io/HTML2/index.html",""],
        [0.8,"https://github.com/MORCHIK1/HTML2/tree/main","https://morchik1.github.io/HTML2/index.html","(3)градієнт"],
        [1,"https://github.com/MORCHIK1/HTMLF.git","https://morchik1.github.io/HTMLF/",""]]},
    {"name":"Шмігельська Анна","points":[
        [0.8,"https://github.com/annieshm/lab-1-Shmihelska","https://annieshm.github.io/lab-1-Shmihelska/","85 B"],
        [1,"https://github.com/annieshm/lab2-Shmihelska","https://annieshm.github.io/lab2-Shmihelska/",""],
        [0.8,"https://github.com/annieshm/lab2-Shmihelska","https://annieshm.github.io/lab2-Shmihelska/","(2)кнопка навігації вгору;"],
        [1,"https://github.com/annieshm/lab4-Shmihelska","https://annieshm.github.io/lab4-Shmihelska/",""]]},
    {"name":"Лисенко Нікола","points":[
        [0.5,"https://github.com/lysenkonikola/LABB-1-4.git","https://lysenkonikola.github.io/lab-1-4./","63 D Out of time; Stolen from Марчук Андрій"],
        [0.5,"https://github.com/lysenkonikola/LABB-1-4.git","https://lysenkonikola.github.io/lab-1-4./","Out of time; Stolen from Марчук Андрій"],
        [0.5,"https://github.com/lysenkonikola/LABB-1-4.git","https://lysenkonikola.github.io/lab-1-4./","Stolen from Марчук Андрій"],
        [0.5,"https://github.com/lysenkonikola/LABB-1-4.git","https://lysenkonikola.github.io/lab-1-4./","Stolen from Марчук Андрій"]]},
    {"name":"Ліліцак Вікторія","points":[
        [0.8,"","https://liliviktoria1.github.io/laba1-4/","50 E; Поведінка!; Out of time"],
        [0.8,"","https://liliviktoria1.github.io/laba1-4/","Out of time"],
        [0.8,"","https://liliviktoria1.github.io/laba1-4/","(3)градієнт; (2)кнопка навігації вгору"],
        [0.8,"","https://liliviktoria1.github.io/laba1-4/","(10)bootstrap; (2)Sign in"]]},
    {"name":"Лупу Роман","points":[
        [1,"https://github.com/R0manD/Lab1","https://r0mand.github.io/Lab1/","69 D Поведінка!"],
        [1,"https://github.com/R0manD/Lab2","https://r0mand.github.io/Lab2/",""],
        [0.5,"https://github.com/R0manD/Lab3","https://r0mand.github.io/Laba3/","(3)градієнт"],
        [0.5,"https://github.com/R0manD/Lab4","https://r0mand.github.io/Laba4/","(10)bootstrap"]]},
    {"name":"Лучик Іван","points":[
        [1,"https://github.com/LychokZZ/laab1","https://lychokzz.github.io/laab1/","85 B"],
        [1,"https://github.com/LychokZZ/laab1","https://lychokzz.github.io/laab1/",""],
        [1,"https://github.com/LychokZZ/lab3","https://lychokzz.github.io/lab3/",""],
        [0.8,"https://github.com/LychokZZ/lab4","https://lychokzz.github.io/lab4","(10)bootstrap"]]},
    {"name":"Малованюк Станіслав","points":[
        [0.8,"https://github.com/LUMA002/LUMA_shop_LAB1","https://luma002.github.io/LUMA_shop_LAB1/","90 A"],
        [1,"https://github.com/LUMA002/LUMA_shop_LAB2","https://luma002.github.io/LUMA_shop_LAB2/",""],
        [1,"https://github.com/LUMA002/LUMA_shop_LAB3","https://luma002.github.io/LUMA_shop_LAB3/",""],
        [1,"https://github.com/LUMA002/LUMA_shop_LAB4","https://luma002.github.io/LUMA_shop_LAB4/",""]]},
    {"name":"Марчук Андрій","points":[
        [1,"https://github.com/Andiry-sys/Lab1","https://andiry-sys.github.io/Lab1/","90 A"],
        [1,"https://github.com/Andiry-sys/Lab1","https://andiry-sys.github.io/Lab1/",""],
        [0.8,"https://github.com/Andiry-sys/Lab1","https://andiry-sys.github.io/Lab1/",""],
        [1,"https://github.com/Andiry-sys/Lab1.git","https://andiry-sys.github.io/Lab1/pages/lab4.html",""]]},
    {"name":"Мацалковський Владислав","points":[
        [1,"https://github.com/DeFrag73/lab1","https://defrag73.github.io/lab1/","90 A"],
        [1,"https://github.com/DeFrag73/lab1","https://defrag73.github.io/lab1/",""],
        [1,"https://github.com/DeFrag73/LAB-3","https://defrag73.github.io/LAB-3/",""],
        [1,"https://github.com/DeFrag73/Lab_4","https://defrag73.github.io/Lab_4/",""]]},
    {"name":"Немитий Мирослав","points":[
        [0,"","","50 E"],
        [0,"","https://www.figma.com/file/s8B3SCOVrSqCwsQiFArIR5/Social-entre?type=design&node-id=0%3A1&mode=design&t=3NJT1j3kNa1eOoAu-1",""],
        [0,"","https://www.figma.com/file/s8B3SCOVrSqCwsQiFArIR5/Social-entre?type=design&node-id=0%3A1&mode=design&t=3NJT1j3kNa1eOoAu-1",""],
        [0,"","https://www.figma.com/file/s8B3SCOVrSqCwsQiFArIR5/Social-entre?type=design&node-id=0%3A1&mode=design&t=3NJT1j3kNa1eOoAu-1",""]]},
    {"name":"Ратушняк Іван","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""]]},
    {"name":"Стрієнко Мар'яна-Еммануела","points":[
        [1,"https://github.com/emmastrienko/lab_1","https://emmastrienko.github.io/lab_1/","96 A"],
        [1,"https://github.com/emmastrienko/lab2","https://emmastrienko.github.io/lab2/",""],
        [1,"https://github.com/emmastrienko/lab_3","https://emmastrienko.github.io/lab_3/lab_1/",""],
        [1,"https://github.com/emmastrienko/lab4","https://emmastrienko.github.io/lab4/lab_1/courses.html",""]]},
    {"name":"Торський Сергій","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""]]},
    {"name":"Трипадуш Богдан","points":[
        [1,"https://github.com/ArgasDTiger/Internet-Technology-Lab-1","https://argasdtiger.github.io/Internet-Technology-Lab-1/","90 A"],
        [1,"https://github.com/ArgasDTiger/Internet-Technology-Lab-2","https://argasdtiger.github.io/Internet-Technology-Lab-2/",""],
        [1,"https://github.com/ArgasDTiger/Internet-Techology-Lab-3","https://argasdtiger.github.io/Internet-Techology-Lab-3/index.html",""],
        [1,"https://github.com/ArgasDTiger/----4/tree/main","https://argasdtiger.github.io/----4/",""]]},
    {"name":"Цера Микита","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""]]},
    {"name":"Шахов Микита","points":[
        [0.5,"https://github.com/aty2a/OIT.git","","66 D No deployment link provided; Out of time; Images not loading"],
        [0.5,"https://github.com/aty2a/OIT.git","","No deployment link provided; Out of time; Images not loading"],
        [0.5,"https://github.com/aty2a/OIT.git","","No deployment link provided; Images not loading"],
        [0.5,"https://github.com/aty2a/OIT.git","","No deployment link provided; Images not loading"]]},
    {"name":"Ватаманюк Марта Василівна","points":[
        [1,"https://github.com/vatamaniukmarta/lab1","https://vatamaniukmarta.github.io/lab1/","95 A"],
        [1,"https://github.com/vatamaniukmarta/lab2","https://vatamaniukmarta.github.io/lab2/",""],
        [1,"https://github.com/vatamaniukmarta/lab3","https://vatamaniukmarta.github.io/lab3/",""],
        [1,"https://github.com/vatamaniukmarta/4.lab","https://vatamaniukmarta.github.io/4.lab/vatamaniuk.205.labN1/",""]]},
    {"name":"Гелич Ганна Геннадіївна","points":[
        [0.8,"https://github.com/anitschka13/lab1","https://anitschka13.github.io/lab1/","72 D"],
        [1,"https://github.com/anitschka/laba2-3","https://anitschka.github.io/laba2-3/",""],
        [0.8,"https://github.com/anitschka/laba2-3","https://anitschka.github.io/laba2-3/","broken links"],
        [0.5,"","https://anitschka.github.io/lab4/","(2)Sign in; broken links"]]},
    {"name":"Гриндей Павло Васильович","points":[
        [1,"https://github.com/pavlohryndei/laba1","https://pavlohryndei.github.io/laba1/Untitled-1.html","95 A"],
        [1,"https://github.com/pavlohryndei/laban2","https://pavlohryndei.github.io/laban2/",""],
        [1,"https://github.com/pavlohryndei/laba3","https://pavlohryndei.github.io/laba3/",""],
        [1,"https://github.com/pavlohryndei/lab4","https://pavlohryndei.github.io/lab4/",""]]},
    {"name":"Губенко Владислав Ігорович","points":[
        [0.8,"https://github.com/VladHubenko/vlados","https://vladhubenko.github.io/vlados/","80 B"],
        [0.8,"https://github.com/VladHubenko/lab2","https://vladhubenko.github.io/lab2/inex.html",""],
        [0.8,"https://github.com/VladHubenko/-3-","https://vladhubenko.github.io/-3-/","(3)градієнт"],
        [0.8,"","https://vladhubenko.github.io/lab-4/","(10)bootstrap"]]}, 
    {"name":"Катеринюк Марія Михайлівна","points":[
        [0.5,"https://github.com/mariia1308/media-school","https://mariia1308.github.io/media-school/","85 B"],
        [0.8,"https://github.com/mariia1308/lab2-3-4","https://mariia1308.github.io/lab2-3-4/",""],
        [0.8,"https://github.com/mariia1308/lab2-3-4","https://mariia1308.github.io/lab2-3-4/","(3)градієнт"],
        [1,"https://github.com/mariia1308/lab2-3-4","https://mariia1308.github.io/lab2-3-4/",""]]}, 
    {"name":"Костенюк Артур Михайлович","points":[
        [1,"https://github.com/ArturKosteniuk/Laba1","https://arturkosteniuk.github.io/Laba1/","91 A"],
        [1,"https://github.com/ArturKosteniuk/laba2","https://arturkosteniuk.github.io/laba2/",""],
        [1,"https://github.com/ArturKosteniuk/laba3","https://arturkosteniuk.github.io/laba3/",""],
        [1,"https://github.com/ArturKosteniuk/lab4","https://arturkosteniuk.github.io/lab4/",""]]}, 
    {"name":"Кукульняк Валентин Віталійович","points":[
        [0.5,"https://github.com/WebTechCNU/Kukulnyak_205_oit","","Out of time", "18 test + 33 + 10 = 61 D"],
        [0.8,"https://github.com/WebTechCNU/Kukulnyak_205_oit","","Out of time"],
        [0.5,"https://github.com/WebTechCNU/Kukulnyak_205_oit","","Out of time; gradient; dropdown"],
        [0.5,"https://github.com/WebTechCNU/Kukulnyak_205_oit","","Out of time; bootstrap; sign in"]]},
    {"name":"Матвієнко Андрій Володимирович","points":[
        [1,"https://github.com/andriimatvienko/web/tree/main","https://andriimatvienko.github.io/web/","90 A"],
        [1,"","https://mellifluous-bunny-9da34a.netlify.app/",""],
        [0.8,"","https://mellifluous-bunny-9da34a.netlify.app/","(2)кнопка навігації вгору; (3)градієнт"],
        [0.8,"","https://mellifluous-bunny-9da34a.netlify.app/","(3)Sign in modal; (10)bootstrap"]]},
    {"name":"Наумук Анна Володимирівна","points":[
        [0.5,"https://github.com/anya0105/lab1/tree/main","https://anya0105.github.io/lab1/","80 B"],
        [1,"https://github.com/anya0105/lab","https://anya0105.github.io/lab/",""],
        [0.8,"https://github.com/anya0105/lab","https://anya0105.github.io/lab/","(3)градієнт"],
        [0.8,"https://github.com/anya0105/lab","https://anya0105.github.io/lab/","(3)Sign in modal"]]},
    {"name":"Погориловський Олександр В'ячеславович","points":[
        [0,"","","50 E"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""]]},
    {"name":"Семенча Єгор Віталійович","points":[
        [1,"https://github.com/semenchaegor/lab1_new","https://semenchaegor.github.io/lab1_new1/","95 A"],
        [1,"https://github.com/semenchaegor/laba.2","https://semenchaegor.github.io/laba.2/",""],
        [1,"https://github.com/semenchaegor/lad_3","https://semenchaegor.github.io/lad_3/",""],
        [1,"https://github.com/semenchaegor/lad_4","https://semenchaegor.github.io/lad_4/",""]]},
    {"name":"Семенчук Христина Дмитрівна","points":[
        [0.8,"https://github.com/Semenchuk03/Lab1","https://semenchuk03.github.io/Lab1/site.html","85 B"],
        [1,"https://github.com/Semenchuk03/laba2-3","https://semenchuk03.github.io/laba2-3/",""],
        [0.8,"https://github.com/Semenchuk03/laba2-3","https://semenchuk03.github.io/laba2-3/","(3)градієнт"],
        [0.8,"","https://semenchuk03.github.io/lab4/","(4)adaptive menu"]]},
    {"name":"Трифаненко Катерина Ігорівна","points":[
        [0.8,"","https://kattiinn.github.io/web.lab/","80 B Out of time"],
        [0.8,"","https://kattiinn.github.io/web.lab/","Out of time"],
        [0.8,"","https://kattiinn.github.io/web.lab/","(2)кнопка навігації вгору; (3)градієнт"],
        [0.8,"","https://kattiinn.github.io/web.lab/","(10)bootstrap"]]},
    {"name":"Бичинюк Максим","points":[
        [1,"https://github.com/Viannedi/cybersecurity","http://viannedi.github.io/cybersecurity","90 A"],
        [1,"https://github.com/Viannedi/cybersecurity","http://viannedi.github.io/cybersecurity",""],
        [1,"https://github.com/imaksb/lab3","https://imaksb.github.io/lab3",""],
        [1,"https://github.com/imaksb/lab4","https://sage-stroopwafel-c40c00.netlify.app/",""]]},
    {"name":"Романко Андрій","points":[
        [1,"https://github.com/Starks12/lab_1","https://starks12.github.io/lab_1/","85 B"],
        [1,"https://github.com/Starks12/lab_2","https://starks12.github.io/lab_2/",""],
        [1,"https://github.com/Starks12/lab_3","https://starks12.github.io/lab_3/",""],
        [0.8,"https://github.com/Starks12/lab_4","https://starks12.github.io/lab_4","(3)Sign in modal"]]},
        {"name":"Торський Сергій ","points":[
            [0.8,"","","50 E"],
            [0.8,"","",""],
            [0,"","",""],
            [0,"","",""]]},
{"name":"Сворожинський Володимир ","points":[
    [0,"","",""],
    [0,"","",""],
    [0,"","",""],
    [0.5,"https://github.com/volodiacv/Laba-4.git","https://shiny-sopapillas-d3d0bf.netlify.app/",
    "Out of time; (3)Sign in modal; (4)adaptive menu; (6)feedback"]]}
]`;