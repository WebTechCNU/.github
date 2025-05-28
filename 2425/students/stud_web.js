let students = `[
    {"name":"Авраменко Ігор (201)","points":[
        [0.8,"https://github.com/avramenko-ihor-chnu/web-tech-1","https://avramenko-ihor-chnu.github.io/web-tech-1/","I expected more tasks done then one"],
        [1,"https://github.com/avramenko-ihor-chnu/web-tech-1","",""],
        [0,"","",""],
        [0,"","",""],
        [1,"","","Additional points: Help with projector on lecture =)"],
        0,""
    ]},
    {"name":"Тинкалюк Анатолій","points":[
        [1,"https://github.com/Anatoliy-Tynkaliuk/Lab-1-WEB","https://anatoliy-tynkaliuk.github.io/Lab-1-WEB/",""],
        [1,"https://github.com/Anatoliy-Tynkaliuk/Labaratorna-2-WEB","",""],
        [1,"https://github.com/Anatoliy-Tynkaliuk/Labaratorna-3-WEB","https://anatoliy-tynkaliuk.github.io/Labaratorna-3-WEB/",""],
        [1,"https://github.com/Anatoliy-Tynkaliuk/Labaratorna-4-WEB","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Чорній Богданна","points":[
        [1,"https://github.com/Bohdanna06/Web","https://bohdanna06.github.io/Web/",""],
        [0.8,"https://github.com/Bohdanna06/WebLaba2","https://bohdanna06.github.io/WebLaba2/","Broken deploy, GPT code: <a href='https://github.com/Bohdanna06/WebLaba2/blob/main/js/scripts.js#L54'>link</a>"],
        [0.8,"https://github.com/Bohdanna06/Laba3","http://bohdanna06.github.io/Laba3/","Broken deploy"],
        [1,"https://github.com/Bohdanna06/-4","https://bohdanna06.github.io/-4/",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Рудейчук Марія","points":[
        [1,"https://github.com/masha191r/lab1web","https://masha191r.github.io/lab1web/",""],
        [0.8,"https://github.com/masha191r/lab2web","https://masha191r.github.io/lab2web/","Gpt generated: <a href='https://github.com/masha191r/lab2web/blob/main/script.js#L59'>link<a>"],
        [1,"https://github.com/masha191r/lab3web","https://masha191r.github.io/lab3web/",""],
        [0.8,"https://github.com/masha191r/lab4web","","No deploy, no requests to backend for login/data fetching"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Ткачук Ангеліна","points":[
        [1,"https://github.com/Bohdanna06/LabaAngelina/tree/main/Lb%20-1","https://bohdanna06.github.io/LabaAngelina/Lb%20-1/","Great job overall, some gpt-generated <a href='https://github.com/Bohdanna06/LabaAngelina/blob/main/Lb%20-1/script.js#L47'>code</a>"],
        [1,"https://github.com/masha191r/Tkachukweb2-3lab","https://masha191r.github.io/Tkachukweb2-3lab/",""],
        [1,"https://github.com/masha191r/Tkachukweb2-3lab","https://masha191r.github.io/Tkachukweb2-3lab/",""],
        [0.8,"https://github.com/masha191r/Tkachukweb4lab","","No requests to backend for login/data fetching"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Попов Роман","points":[
        [0.8,"https://github.com/popovtt/web-labs-chnu/","https://maxvonlancaster.github.io/web-labs-chnu/lab-1/", "No git pages deploy; <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L37'>some</a> <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L5'>gpt</a>-<a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L8'>generated</a> <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L22'>code</a>"],
        [0.8,"https://github.com/popovtt/web-labs-chnu/tree/main/lab-2","https://popovtt.github.io/web-labs-chnu/lab-2/","Some gpt-generated code: <a href='https://github.com/popovtt/web-labs-chnu/blob/main/lab-2/src/js/swiper.js#L24'>link</a>"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,"54 E"
    ]},
    {"name":"Мулярчик Матвій","points":[
        [0.8,"https://github.com/Mattew-M/Lab-1-WEB","https://mattew-m.github.io/Lab-1-WEB/", "Some GPT <a href='https://github.com/Mattew-M/Lab-1-WEB/blob/master/script.js#L82'>code</a>"],
        [0.8,"https://github.com/Mattew-M/Lab-2-WEB/tree/main","https://mattew-m.github.io/Lab-2-WEB/shop/shop","Broken deploy, Some GPT <a href='https://github.com/Mattew-M/Lab-2-WEB/blob/main/shop/shop.js#L25'>code</a>"],
        [1,"https://github.com/Mattew-M/Lab-3-WEB.git","https://mattew-m.github.io/Lab-3-WEB/shop/shop.html","Thanks for readme.md, that wa very helpful!"],
        [0,"","",""],
        [0,"","",""],
        32,"72 C"
    ]},
    {"name":"Кречуняк Єгор","points":[
        [0.5,"https://github.com/Egor4ik2/Lab-1-WEB","https://egor4ik2.github.io/Lab-1-WEB/","GPT generated: https://github.com/Egor4ik2/Lab-1-WEB/blob/main/script.js#L44"],
        [0.8,"https://github.com/Egor4ik2/WEB-LAB-2","https://egor4ik2.github.io/WEB-LAB-2/","Late submition"],
        [1,"https://github.com/Egor4ik2/WEB-LAB-3","https://egor4ik2.github.io/WEB-LAB-3/index.html",""],
        [0,"","",""],
        [0,"","",""],
        35,"72 C"
    ]},
    {"name":"Кочала Олександр","points":[
        [1,"https://github.com/leGromp12/web","https://legromp12.github.io/web/",""],
        [0.8,"https://github.com/leGromp12/web-lab2/tree/main/web-4thPeriod","https://github.com/leGromp12/web-lab2/tree/main/web-4thPeriod","Late submition, no deploy"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Унгурян Ніколай","points":[
        [1,"https://github.com/zzk07/laba1","https://zzk07.github.io/laba1/",""],
        [1,"https://github.com/zzk07/laba-2","https://zzk07.github.io/laba-2/",""],
        [0.8,"https://zzk07.github.io/laba-3/products.html","https://zzk07.github.io/laba-3/products.html","Some gpt-generated code: <a href='https://github.com/zzk07/laba-3/blob/main/products.js#L187'>link</a>"],
        [0.5,"https://zzk07.github.io/Lab-4/login.html","https://zzk07.github.io/Lab-4/login.html","No link to code was provided, I do not see any backend requests"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Філіпова Єлизавета","points":[
        [1,"https://github.com/lizafilipova/lab-1-web","https://lizafilipova.github.io/lab-1-web/fouth.html",""],
        [1,"https://github.com/lizafilipova/laba-2","https://lizafilipova.github.io/laba-2/index.html",""],
        [0.8,"https://github.com/lizafilipova/laba-3-web","","No deploy"],
        [0.8,"https://github.com/lizafilipova/4-","","No backend requests"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Широков Артем","points":[
        [0.5,"https://github.com/Kabuto43/WEB-Lab-1","https://kabuto43.github.io/WEB-Lab-1/#/task-1","Late submission, some GPT generated code: <a href='https://github.com/Kabuto43/WEB-Lab-1/blob/main/src/Components/WordCounter/WordCounter.jsx#L9'>link</a>"],
        [0.8,"https://github.com/Kabuto43/DesignDK","","Late submission, but good work on server side"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        34,"51"
    ]},
    {"name":"Рудий Назарій","points":[
        [0.5,"https://github.com/Sunner13/Lab1JS","https://sunner13.github.io/Lab1JS/","Late submission, some GPT generated code: <a href='https://github.com/Sunner13/Lab1JS/blob/main/js/task2.js#L84'>link</a>"],
        [0.8,"https://github.com/Sunner13/Lab2JS","https://sunner13.github.io/Lab2JS/","Late submission, some GPT generated code: <a href='https://github.com/Sunner13/Lab2JS/blob/main/js/script.js#L109'>link</a>"],
        [0.8,"https://github.com/Sunner13/Lab3JS","https://sunner13.github.io/Lab3JS/","Some GPT generated code: <a href='https://github.com/Sunner13/Lab3JS/blob/main/js/script.js#L95'>link</a>"],
        [0.8,"https://github.com/Sunner13/Lab4JS","https://sunner13.github.io/Lab4JS/","Some GPT generated code: <a href='https://github.com/Sunner13/Lab4JS/blob/main/js/register.js#L21'>link</a>, Where is the backend?"],
        [0,"","",""],
        0,""
    ]},
    {"name":"???","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Кирил Кравцов (211)","points":[
        [1,"https://github.com/UserAgent0007/web-lab1-javascrypt","https://useragent0007.github.io/web-lab1-javascrypt/",""],
        [1,"https://github.com/UserAgent0007/oit_project","https://useragent0007.github.io/oit_project/",""],
        [1,"https://github.com/UserAgent0007/oit_project","",""],
        [1,"https://github.com/UserAgent0007/Teeth_clinic","https://useragent0007.github.io/Teeth_clinic/",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Максимюк Олександр","points":[
        [1,"https://github.com/SashaMaksymiuk/web-lab-1","https://sashamaksymiuk.github.io/web-lab-1/",""],
        [1,"https://github.com/SashaMaksymiuk/web-lab-2","https://sashamaksymiuk.github.io/web-lab-2/gallery",""],
        [1,"https://github.com/SashaMaksymiuk/web-3","https://sashamaksymiuk.github.io/web-3/gallery",""],
        [0.8,"https://github.com/SashaMaksymiuk/Lab_4","https://sashamaksymiuk.github.io/Lab_4/gallery",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Голбан Уляна","points":[
        [1,"https://github.com/GolbanUlyana/-1-.2","https://golbanulyana.github.io/-1-.2/",""],
        [1,"https://github.com/GolbanUlyana/-2.0","",""],
        [1,"https://github.com/GolbanUlyana/-3.0","",""],
        [1,"https://github.com/GolbanUlyana/Web-lab-4","https://golbanulyana.github.io/Web-lab-4/",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Гарвасюк Оксана","points":[
        [1,"https://github.com/oksankah/weblab1","https://oksankah.github.io/weblab1/web/",""],
        [1,"https://github.com/oksankah/weblab2","https://oksankah.github.io/weblab2/",""],
        [1,"https://github.com/oksankah/weblab3","","No deploy =("],
        [1,"https://github.com/oksankah/weblab4","https://github.com/oksankah/weblab4",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Григораш Ігор","points":[
        [0.5,"https://github.com/white13crow/laba-1","","No deploy, late submision"],
        [0.5,"https://github.com/white13crow/ihor-hryhorash","","No deploy, late submision"],
        [0.8,"https://github.com/white13crow/laba-3","","No deploy"],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Григор'єв Євгеній","points":[
        [1,"","https://eugenius03.github.io/1lab/","Send link to repository, not actual deploy, next time please"],
        [1,"https://github.com/eugenius03/2lab","https://eugenius03.github.io/2lab/","Great job with fetching data, extra points!"],
        [1,"https://github.com/eugenius03/3lab","https://eugenius03.github.io/3lab/",""],
        [1,"https://github.com/eugenius03/weblab4","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Грималюк Сніжана","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Дубчак Олександр","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Заєць Марія","points":[
        [1,"https://github.com/zaietsmary/laboratory-1","https://zaietsmary.github.io/laboratory-1/",""],
        [1,"https://github.com/zaietsmary/laboratory-2","",""],
        [1,"https://github.com/zaietsmary/laboratory-3","",""],
        [1,"https://github.com/zaietsmary/laboratory-4","","Great job with the backend!"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Ілюк Богдан","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Клипак Анастасія","points":[
        [1,"https://github.com/nastyaklypak/webLab1","https://nastyaklypak.github.io/webLab1/web/lab1/",""],
        [1,"https://github.com/nastyaklypak/webLab2","https://nastyaklypak.github.io/webLab2/",""],
        [1,"https://github.com/nastyaklypak/lab_3Web","https://github.com/nastyaklypak/lab_3Web",""],
        [1,"https://github.com/nastyaklypak/web-lab4","https://github.com/nastyaklypak/web-lab4",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Коба Сергій","points":[
        [1,"https://github.com/qenzai/web-lab-1","",""],
        [1,"https://github.com/qenzai/web-lab-2","https://qenzai.github.io/web-lab-2/",""],
        [0.8,"https://github.com/qenzai/web-lab-4","https://qenzai.github.io/web-lab-4/","Gpt generated: <a href='https://github.com/qenzai/web-lab-4/blob/main/script.js#L107'>link</a>"],
        [1,"http://github.com/qenzai/web-lab-4/tree/main","","Great job with backend!"],
        [0,"","",""],
        0,""
    ]},
    {"name":"Ковальчук Роман","points":[
        [1,"https://github.com/r0mank0valchuk/Lab1","https://r0mank0valchuk.github.io/Lab1/",""],
        [1,"https://github.com/r0mank0valchuk/Web_Lab_2","",""],
        [1,"https://github.com/r0mank0valchuk/Web_Lab_3","https://r0mank0valchuk.github.io/Web_Lab_3/",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Батуєва Анастасія","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Веленчук Володимир","points":[
        [0.5,"https://github.com/VelenchukVolodymyr/lab1WEB.git","","Late submision, zip file"],
        [0.8,"https://github.com/VelenchukVolodymyr/lab2WEB","","Late submision, no deploy"],
        [1,"https://github.com/VelenchukVolodymyr/lab-3-web.git","",""],
        [0,"","",""],
        [0,"","",""],
        31,""
    ]},
    {"name":"Волков Віталій","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Марусяк Владислав","points":[
        [1,"https://github.com/Wokansiy/js-1laba","https://github.com/Wokansiy/js-1laba",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Параєва Марія","points":[
        [1,"https://github.com/mariidaz/js-laba1/tree/main","https://mariidaz.github.io/js-laba1/index.html",""],
        [1,"https://github.com/mariidaz/2laba_paraeva","",""],
        [0.8,"https://github.com/mariidaz/3lab__web/tree/main/3%20%D0%BB%D0%B0%D0%B1%D0%B0%20js","https://mariidaz.github.io/3lab__web/3%20%D0%BB%D0%B0%D0%B1%D0%B0%20js/","CSS issues in deploy"],
        [1,"https://github.com/mariidaz/4-lab-web","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Гордійчук Василь","points":[
        [1,"https://github.com/teethlevelofenj/gematogen8/tree/main/labweeeeb1","https://teethlevelofenj.github.io/gematogen8/labweeeeb1/",""],
        [1,"https://github.com/teethlevelofenj/gematogen8/tree/main/labweb2","https://teethlevelofenj.github.io/gematogen8/labweb2/",""],
        [0.8,"https://github.com/teethlevelofenj/3labweb/tree/main/labweb3","","No deploy, "],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Рурак Віктор","points":[
        [0.5,"https://github.com/mstaberg/Web-lab1","","No deploy, GPT generated code: <a href='https://github.com/mstaberg/Web-lab1/blob/main/script.js#L50'>link</a>"],
        [0.8,"https://github.com/Viktor-Rurak/Web","","No deploy"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Маковецький Давид","points":[
        [0.5,"https://github.com/t3getsu/lab1web1/blob/718abb85932f94eec82311adfe131fbe1ec0e280/lab1_makovetsky.rar","","Submission of rar to github is a power move"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]}
]`;