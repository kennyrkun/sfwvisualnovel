export class Character
{
    constructor(character)
    {
        console.log("creating character", character);

        this.id = character.id;
        this.name = character.name;

        this.element = $(`<img src="images/chr${this.id}.png" id="character${this.id}" class="character" style="display: none">`).appendTo("#characters");
    }

    show(fadeTime = 2000)
    {
        this.element.fadeIn(fadeTime);
    }

    hide(fadeTime = 2000)
    {
        this.element.fadeOut(fadeTime);
    }
}