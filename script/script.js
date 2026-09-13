const story = [
    {
        background: "https://img.magnific.com/premium-psd/abstract-texture-background-social-media-post_1155868-17794.jpg?semt=ais_hybrid&w=740&q=80",
        character: "assets/hero.png",
        speaker: "Hero",
        text: "Какой-то текст...",

        choices: [
            {
                text: "Отпустить",
                next: 1
            },
            {
                text: "Схватить",
                next: 2
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
    textElement.textContent = scene.text;

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