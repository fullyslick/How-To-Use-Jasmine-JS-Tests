# JavaScript Testing

Practice testing your javascript applications using Jasmine!

## How to Install Jasmine

In this project Jasmine is used as JS library. To install Jasmine standalone on your local box (where {#.#.#} below is substituted by the release number downloaded):

- Download the standalone distribution for your desired release from the [releases page](https://github.com/jasmine/jasmine/releases)
- Create a Jasmine directory in your project - `mkdir my-project/jasmine`
- Move the dist to your project directory - `mv jasmine/dist/jasmine-standalone-{#.#.#}.zip my-project/jasmine`
- Change directory - `cd my-project/jasmine`
- Unzip the dist - `unzip jasmine-standalone-{#.#.#}.zip`
- Add the following to your HTML file:

```
<link rel="shortcut icon" type="image/png" href="jasmine/lib/jasmine-{#.#.#}/jasmine_favicon.png">
<link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-{#.#.#}/jasmine.css">

<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine-html.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/boot.js"></script>
```
More info about [Jasmine](https://jasmine.github.io/).
