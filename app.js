document.querySelector("#generate").addEventListener("click", () => {
    generate();
});
document.querySelector("#generate1").addEventListener("click", () => {
    generate("generate1");
});
document.querySelector("#generate2").addEventListener("click", () => {
    generate("generate2");
});

let junior = -1;

generate = (arg = "generate") => {
    let quotes ={
        "- М.Т.Кайрат":
        '"Я, например, всегда расстраиваюсь, когда думаю о жизни, что не использую свою возможность и теряю драгоценные секунды, а жизнь так коротка."',
        "-Оскар Уайльд":
        '"Каждый живет, как хочет, и расплачивается за это сам."',
        "- Кайрат":
        '"Сильные люди не любят свидетелей своей слабости."',
        "- Кайрат1":
        '"Мечтаю стать бумерангом. Тебя кидают, а ты им – обратно, в морду."',
        "- Кайрат2":
        '"Хорошо там, где меня нет… Но ничего, я и туда доберусь!"',
        "- Кайрат3":
        '"Услышав мои желания, золотая рыбка сделала вид, что сдохла."',
        "- Кайрат4":
        '"Ночь. Город засыпает. Просыпаются сидящие на диете и идут к холодильнику."',
        "- Кайрат5":
        '"Детство заканчивается тогда, когда на тебя уже странно смотрят в песочнице!"',
        "- Кайрат6":
        '"Этот вечный конфликт: зеркало утверждает, что ты выглядишь потрясно, а фотик упорно доказывает обратное."',
        "- Кайрат7":
        '"Завтра рано вставать. Встану послезавтра."',
        "- Кайрат8":
        '"Сегодня я боролся с тупостью. И тупость победила."',
        "- Кайрат9":
        '"Меня постоянно преследуют умные мысли, но я быстрее…."',
        "- Кайрат10":
        '"Прихожу домой, смотрю пыль лежит. Дай, думаю, и я полежу."',
    };

    let authors = Object.keys(quotes);

    if (arg === "generate1") {
        if (junior >= 1) {
            junior --;
        } else {
            junior = authors.length - 1;
        }
    } else if (arg === "generate2") {
        if (junior < authors.length - 1) {
            junior ++;
        } else {
            junior = 0;
        }
    } else if (arg === "generate"){
        junior = Math.floor(Math.random() * authors.length);
    }

    let author = authors[junior];

    let quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};
