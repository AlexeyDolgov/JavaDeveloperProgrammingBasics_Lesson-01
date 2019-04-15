# JavaDeveloperProgrammingBasics_Lesson-01
Variables, data types, main operators, comparison operators and logical values

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-01/blob/master/JavaDeveloperProgrammingBasics_Lesson-01/task1_1/task1_1.js)<br>
Визначте дві змінні <i>admin</i> та <i>name</i>. Запишіть в name текст «Василь». Скопіюйте значення з name в admin. Виведіть в консоль
admin (має вивести «Василь»).

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-01/blob/master/JavaDeveloperProgrammingBasics_Lesson-01/task1_2/task1_2.js)<br>
Подумайте, чи зрозуміло Вам, чому код нижче працює саме так?

        let a = 1, b = 1, c, d;
        
        c = ++a;  
        console.log(c); // 2
        
        d = b++;  
        console.log(d); // 1
        
        c = (2 + ++a);  
        console.log(c); // 5
        
        d = (2 + b++);  
        console.log(d); // 4
        
        console.log(a); // 3  
        console.log(b); // 3

* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-01/blob/master/JavaDeveloperProgrammingBasics_Lesson-01/task1_3/task1_3.js)<br>
Чому буде дорівнювати <i>x</i> у прикладі нижче?

        let a = 2;
        
        let x = 1 + (a *= 2);
