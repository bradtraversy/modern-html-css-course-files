# Flexbox Layout Challenge

I want to test your Flexbox skills with a quick challenge. I want you to create the following layout using Flexbox:

<img src="./flexbox-challenge.png" alt="Flexbox Challenge">

It's up to you if you want to style the rest of the page like this, but I want you to have the following:

- A full width header
- A main menu that uses flexbox to align the menu items
- A main content area that uses flexbox the main section and the sidebar using flexbox

Here is the HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>HTML & CSS Sandbox</title>
  </head>
  <body>
    <header class="header">
      <h1>Flexbox Layout Challenge</h1>
    </header>
    <nav>
      <ul class="main-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <main class="main">
      <section>
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea veniam
          illum suscipit iste, vel corrupti veritatis libero nam eius tempora ad
          neque voluptatem voluptatibus reiciendis voluptatum necessitatibus
          provident distinctio saepe quasi laborum laudantium. Inventore error
          aperiam excepturi esse perferendis commodi!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          assumenda facere nam, excepturi voluptates sint vero quis illum labore
          omnis. Ullam sequi quidem laborum doloribus facere. Natus facere
          doloremque eos? Dolore et obcaecati nobis atque explicabo facilis
          voluptatibus porro consequatur quia corporis, labore aspernatur qui
          quod cumque enim modi id tempora earum! Quasi reprehenderit, quas
          repellat magni modi ut facere.
        </p>
      </section>

      <aside>
        <h3>Recent Posts</h3>
        <ul>
          <li><a href="#">Post 1</a></li>
          <li><a href="#">Post 2</a></li>
          <li><a href="#">Post 3</a></li>
          <li><a href="#">Post 4</a></li>
          <li><a href="#">Post 5</a></li>
        </ul>
      </aside>
    </main>
  </body>
</html>
```

and the base CSS:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color: coral;
}

h2 {
  margin-bottom: 20px;
}
```

<details>

<summary>Click For Solution</summary>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #333;
}

h2 {
  margin-bottom: 20px;
}

.header {
  background: coral;
  padding: 40px;
}

.main-menu {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f4f4f4;
}

.main-menu a {
  font-size: 20px;
}

.main {
  display: flex;
  gap: 70px;
  padding: 40px;
}

.main section {
  flex: 1; /* Take up remaining space */
}

.main aside {
  width: 300px;
}

.main aside h3 {
  padding: 10px;
  background: coral;
  color: #fff;
}

.main aside li {
  padding: 10px;
  background: #f4f4f4;
  border-bottom: 1px solid #ccc;
}
```

We set the `display` property to `flex` on the `.main-menu` and `.main` elements. We also set the `gap` property to `20px` and `70px` respectively to add some space between the elements. We set the `flex` property to `1` on the `.main section` element to make it take up the remaining space. We set the `width` property to `300px` on the `.main aside` element to give it a fixed width.

</details>
