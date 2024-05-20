let students = `[
    {"name":"Ганек Микола Юрійович(501)","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,29,"72 C"
    ]},
    {"name":"Демянчук Іван Васильович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"75 C"
    ]},     
    {"name":"Добжинецький Максим Романович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,29,"72 C"
    ]},
    {"name":"Клейман Максим Олександрович","points":[
        [0.8,"https://gitlab.com/maxymteam/FirstJavaSprintProj","https://gitlab.com/maxymteam/FirstJavaSprintProj",""],
        [0.8,"https://gitlab.com/maxymteam/FirstJavaSprintProj","https://gitlab.com/maxymteam/FirstJavaSprintProj",""],
        [0.8,"https://gitlab.com/maxymteam/FirstJavaSprintProj","https://gitlab.com/maxymteam/FirstJavaSprintProj",""],
        [0.8,"https://gitlab.com/maxymteam/FirstJavaSprintProj","https://gitlab.com/maxymteam/FirstJavaSprintProj",""],
        0,29,"85 B"
    ]},
    {"name":"Лазарев Володимир Олександрович","points":[
        [1,"https://github.com/vovalaz/modern_web_tech_lab","",""],
        [1,"https://github.com/vovalaz/modern_web_tech_lab","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"95 A"
    ]},
    {"name":"Ніколаєску Іван Васильович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,0,""
    ]},
    {"name":"Пузенко Євген Володимирович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        20,29,"98 A"
    ]},
    {"name":"Радомський Євгеній Віталійович","points":[
        [0.8,"https://github.com/r-yev/SapientLeads","https://github.com/r-yev/SapientLeads",""],
        [0.8,"https://github.com/r-yev/SapientLeads","https://github.com/r-yev/SapientLeads",""],
        [0.8,"https://github.com/r-yev/SapientLeads","https://github.com/r-yev/SapientLeads",""],
        [0.8,"https://github.com/r-yev/SapientLeads","https://github.com/r-yev/SapientLeads",""],
        0,30,"85 B"
    ]}, 
    {"name":"Резнік Володимир Русланович","points":[
        [1,"https://github.com/reznikkvova/fmi_kval","https://github.com/reznikkvova/fmi_kval",""],
        [1,"https://github.com/reznikkvova/fmi_kval","https://github.com/reznikkvova/fmi_kval",""],
        [0,"","",""],
        [0,"","",""],
        10,30,"98 A"
    ]},
    {"name":"Росошанський Олег Мирославович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        5,30,"90 A"
    ]},
    {"name":"Рощенюк Владислав Олександрович","points":[
        [1,"https://github.com/WebTechCNU/modern-web-labs-atomic","https://github.com/WebTechCNU/modern-web-labs-atomic",""],
        [1,"https://github.com/WebTechCNU/modern-web-labs-atomic/commit/906aa3ec6a44e61730f972e1aab00cd6aeac415c","",""],
        [1,"https://github.com/WebTechCNU/modern-web-labs-atomic/commit/f3f473fe1282dc142a417607e998c7c64375b1a0","",""],
        [0,"","",""],
        5,26,"95 A"
    ]},
    {"name":"Селін Денис Сергійович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,29,"72 C"
    ]},
    {"name":"Солодкий Артем Ігорович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"75 C"
    ]},
    {"name":"Тритенко Юрій Миколайович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,29,"72 C"
    ]},
    {"name":"Циганаш Вадим Віталійович","points":[
        [1,"","",""],
        [1,"","",""],
        [1,"","",""],
        [0,"","",""],
        15,30,"98 A"
    ]},
    {"name":"Чоборяк Яків Михайлович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"75 C"
    ]},
    {"name":"Шелест Михайло Віталійович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,29,"72 C"
    ]},
    {"name":"Яковець Дмитро Григорович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        5,30,"90 A"
    ]},
    {"name":"Крештанович Микита Андрійович(507)","points":[
        [0.8,"https://github.com/KreshtanovychNikita/BetterCallUs","https://github.com/KreshtanovychNikita/BetterCallUs",""],
        [0.8,"https://github.com/KreshtanovychNikita/BetterCallUs","https://github.com/KreshtanovychNikita/BetterCallUs",""],
        [0.8,"https://github.com/KreshtanovychNikita/BetterCallUs","https://github.com/KreshtanovychNikita/BetterCallUs",""],
        [0,"","",""],
        0,30,"90 A"
    ]},
    {"name":"Миронюк Нестор Юрійович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        5,30,"90 A"
    ]},
    {"name":"Скороход Володимир Анатолійович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"75 C"
    ]},
    {"name":"Тодоріко Ілля Сергійович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,30,"75 C"
    ]},
    {"name":"Щур Олександр Іванович","points":[
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        [0,"","",""],
        0,0,""
    ]}
]`;