let students = `[
    {"name":"Авраменко Ігор (201)","points":[
        [0.8,"https://github.com/avramenko-ihor-chnu/web-tech-1","https://avramenko-ihor-chnu.github.io/web-tech-1/","I expected more tasks done then one"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [1,"","","Additional points: Help with projector on lecture =)"],
        0,""
    ]},
    {"name":"Тинкалюк Анатолій","points":[
        [1,"https://github.com/Anatoliy-Tynkaliuk/Lab-1-WEB","https://anatoliy-tynkaliuk.github.io/Lab-1-WEB/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Чорній Богданна","points":[
        [1,"https://github.com/Bohdanna06/Web","https://bohdanna06.github.io/Web/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Рудейчук Марія","points":[
        [1,"https://github.com/masha191r/lab1web","https://masha191r.github.io/lab1web/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Ткачук Ангеліна","points":[
        [1,"https://github.com/Bohdanna06/LabaAngelina/tree/main/Lb%20-1","https://bohdanna06.github.io/LabaAngelina/Lb%20-1/","Great job overall, some gpt-generated <a href='https://github.com/Bohdanna06/LabaAngelina/blob/main/Lb%20-1/script.js#L47'>code</a>"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Попов Роман","points":[
        [0.8,"https://github.com/popovtt/web-labs-chnu/","https://maxvonlancaster.github.io/web-labs-chnu/lab-1/", "No git pages deploy; <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L37'>some</a> <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L5'>gpt</a>-<a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L8'>generated</a> <a href='https://github.com/maxvonlancaster/web-labs-chnu/blob/main/lab-1/script.js#L22'>code</a>"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Мулярчик Матвій","points":[
        [0.8,"https://github.com/Mattew-M/Lab-1-WEB","https://mattew-m.github.io/Lab-1-WEB/", "Some GPT <a href='https://github.com/Mattew-M/Lab-1-WEB/blob/master/script.js#L82'>code</a>"],
        [0.8,"https://github.com/Mattew-M/Lab-2-WEB/tree/main","https://mattew-m.github.io/Lab-2-WEB/shop/shop","Broken deploy, Some GPT <a href='https://github.com/Mattew-M/Lab-2-WEB/blob/main/shop/shop.js#L25'>code</a>"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Кречуняк Єгор","points":[
        [0.5,"https://github.com/Egor4ik2/Lab-1-WEB","https://egor4ik2.github.io/Lab-1-WEB/","GPT generated: https://github.com/Egor4ik2/Lab-1-WEB/blob/main/script.js#L44"],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Кочала Олександр","points":[
        [1,"https://github.com/leGromp12/web","https://legromp12.github.io/web/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Унгурян Ніколай","points":[
        [1,"https://github.com/zzk07/laba1","https://zzk07.github.io/laba1/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
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
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Максимюк Олександр","points":[
        [1,"https://github.com/SashaMaksymiuk/web-lab-1","https://sashamaksymiuk.github.io/web-lab-1/",""],
        [1,"https://github.com/SashaMaksymiuk/web-lab-2","https://sashamaksymiuk.github.io/web-lab-2/gallery",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Голбан Уляна","points":[
        [1,"https://github.com/GolbanUlyana/-1-.2","https://golbanulyana.github.io/-1-.2/",""],
        [1,"https://github.com/GolbanUlyana/-2.0","",""],
        [1,"https://github.com/GolbanUlyana/-3.0","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Гарвасюк Оксана","points":[
        [1,"https://github.com/oksankah/weblab1","https://oksankah.github.io/weblab1/web/",""],
        [1,"https://github.com/oksankah/weblab2","https://oksankah.github.io/weblab2/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Григораш Ігор","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Григор'єв Євгеній","points":[
        [1,"","https://eugenius03.github.io/1lab/","Send link to repository, not actual deploy, next time please"],
        [1,"https://github.com/eugenius03/2lab","https://eugenius03.github.io/2lab/","Great job with fetching data, extra points!"],
        [0,"","",""],
        [0,"","",""],
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
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
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
        [1,"https://github.com/nastyaklypak/webLab2","ьhttps://nastyaklypak.github.io/webLab2/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Коба Сергій","points":[
        [1,"https://github.com/qenzai/web-lab-1","",""],
        [1,"https://github.com/qenzai/web-lab-2","https://qenzai.github.io/web-lab-2/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Ковальчук Роман","points":[
        [1,"https://github.com/r0mank0valchuk/Lab1","https://r0mank0valchuk.github.io/Lab1/",""],
        [0,"","",""],
        [0,"","",""],
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
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
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
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]},
    {"name":"Гордійчук Василь","points":[
        [1,"https://github.com/teethlevelofenj/gematogen8/tree/main/labweeeeb1","https://teethlevelofenj.github.io/gematogen8/labweeeeb1/",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,""
    ]}
]`;