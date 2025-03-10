/*
    1. Register a list container (ul) in the container
    2. Create a rendor method to render a new "li" to the container
    -- accepts arguments: invoice or payment, a heading, a position
    --- create the html template (li, h4, p)
    -- add the 'li" template to the start/end of the list
 */
export class ListTemplates {
    container;
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li); // put at the top
        }
        else {
            this.container.append(li); // put at the bottom
        }
    }
}
