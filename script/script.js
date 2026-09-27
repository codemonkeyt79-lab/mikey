const story = [
    // 0 объект
    {
        background: "https://img.magnific.com/premium-psd/abstract-texture-background-social-media-post_1155868-17794.jpg?semt=ais_hybrid&w=740&q=80",
        character: "assets/hero.png",
        speaker: "Hero",
        text: "Я хотел стать героем, который побеждает таких штампованных злодеев как ты… Одним ударом.",

        choices: [
            {
                text: "Я тоже",
                next: 1
            },
            {
                text: "И что?",
                next: 2
            }
        ]
    },
    // 1 объект
    {
        background: "https://static.wikia.nocookie.net/onepunchman/images/4/45/Город_Z%2C_манга.png/revision/latest/scale-to-width-down/1200?cb=20200408090725&path-prefix=ru",
        character: "https://static.wikia.nocookie.net/onepunchman/images/5/5e/Инстинкты_Асуры_Кабуто.png/revision/latest?cb=20260505152754&path-prefix=ru",
        speaker: "Hero",
        text: "Мне не нужны конкуренты...",

        choices: [
            {
                text: "Я умер, начать заново.",
                next: 0
            }
        ]
    },
    // 2 объект
    {
        background: "https://static.wikia.nocookie.net/onepunchman/images/4/45/Город_Z%2C_манга.png/revision/latest/scale-to-width-down/1200?cb=20200408090725&path-prefix=ru",
        character: "assets/artem.png",
        speaker: "Hero",
        text: "Артем не зырь",

        choices: [
            {
                text: "Артем скажи хрю-хрю",
                next: 3
            },
            {
                text: "Я хочу лысого",
                next: 3
            }
        ]
    },
    // 3 объект
    {
        background: "https://static.wikia.nocookie.net/onepunchman/images/4/45/Город_Z%2C_манга.png/revision/latest/scale-to-width-down/1200?cb=20200408090725&path-prefix=ru",
        character: "assets/clown.png",
        speaker: "Hero",
        text: "Да ты клоун...",

        choices: [
            {
                text: "Артем говорит хрю-хрю",
                next: 4
            },
            {
                text: "Артем говорит муу-муу",
                next: 4
            }
        ]
    },
    // 4 объект
    {
        background: "https://avatars.mds.yandex.net/i?id=3790cfaa2de21367c53c6d30042a430d_l-5288850-images-thumbs&n=13",
        character: "assets/boyfriendArtem.png",
        speaker: "Hero",
        text: "Иди ко мне",

        choices: [
            {
                text: "Артем говорит гав-гав",
                next: 0
            },
            {
                text: "Артем говорит мяу-мяу",
                next: 0
            }
        ]
    }
]


let currentScene = 0;

const sceneElement = document.querySelector('#scene');
const characterElement = document.querySelector('#character');
const speakerElement = document.querySelector('#speaker');
const textElement = document.querySelector('#text');
const choicesElement = document.querySelector('#choices');

function showScene() {
    const scene = story[currentScene]

    if (scene.background) {
        sceneElement.style.backgroundImage = `url(${scene.background})`;
    }
    if (scene.character) {
        characterElement.src = scene.character;
        characterElement.style.display = "block";
    }
    else {
        characterElement.style.display = "none";
    }

    speakerElement.textContent = scene.speaker;
    // Изменим логику текста, пусть плавно появляется
    textElement.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        textElement.textContent += scene.text[i++];
        if (i >= scene.text.length) clearInterval(timer);
    }, 30);
    // 

    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");

        button.textContent = choice.text;

        button.addEventListener("click", () => {
            currentScene = choice.next;
            showScene();
        });
        choicesElement.appendChild(button);
    })
}
showScene();