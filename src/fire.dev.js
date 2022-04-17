/****************
    (c) 2022 Blazed Labs LLC;
        Blazed Publishing BD;
        https://blazed.space/
        >>   Blazed Fire   <<
        ** Blazed App Module **
        All Rights Reserved.
    (v) 3.0.0
****************/

class BlazedApp extends HTMLElement {
    // Disable shadown DOM on this element
    /* static get disabledFeatures() { return ['shadow']; } */
    constructor() {
        super();
        //var shadow = this.attachShadow({mode: 'open'});

        // TODO: Write element functionality
        // Get parent container
        //var wcParent = this.parentNode;

        //var text = document.createElement('span');
        //text.textContent = "Test Span";
        //text.setAttribute('title', 'hi');
        //shadow.appendChild(text);

        // TODO: Add functionality...
        // Access to and control of HTML elements via the DOM.
        // Access to and manipulation of form data.
        // Interacting with the contents of 2D images and the context of an HTML <canvas>, for example to draw on top of them.
        // Management of media connected to the HTML media elements (<audio> and <video>).
        // Dragging and dropping of content on webpages.
        // Access to the browser navigation history
        // Supporting and connective interfaces for other APIs such as Web Components, Web Storage, Web Workers, WebSocket, and Server-sent events.
        
        //Two ways to add/modify content:

        /* Shadow (Virtual) DOM Mapipulation
        var shadow = this.attachShadow({mode: 'open'});
        var text = document.createElement('span');
        text.textContent = "Blazed Labs";
        shadow.appendChild(text);
        */

        /* Direct DOM Manipulation:
        var text = document.createElement('span');
        text.textContent = "Blazed Labs";
        this.appendChild(text);
        */

        // Lifecycle / State management
        // Data population & update
        // Entity management
        // Routing & Display variation

        // Map Object
        // let fish = new Map();
        // fish.set('carp', 'Carp123');
        // fish.set('tuna', 'Mercury');
        // var length = fish.size; // 2
        // fish.delete('tuna');
        // if (fish.has('carp')){
        //  This condition will evaluate because the Map will still have the Carp element.
        // }





    }
}

export { BlazedApp };