# fire
Blazed Fire javascript framework.

## What is it?
Currently, fire is simply a custom component (usually &gt;blz-app&lt;) with an open inner shadow DOM.

## How to install
To include this in your application, simply add the following to the body of your document:

```html
<script type="module">
    import { BlazedApp } from 'https://blazed.sbs/assets/js/blz.module.js';
    if((typeof BlazedApp) === 'function'){ window.customElements.define('blz-app', BlazedApp); }
</script>
```

And create a Blazed Fire app like so:

```html
<blz-app>
    <header>
        <nav>
            ...
        </nav>
    </header>
    <main>
        ...
    </main>
    <footer>
        &copy;...
    </footer>
</blz-app>
```