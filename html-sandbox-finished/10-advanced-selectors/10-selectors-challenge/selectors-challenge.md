# Selectors Challenge

Now it's time to test your knowledge of selectors. We are going to use the project listings website that we created when we did the sticky navbar. I added a little bit to it including some unordered lists. The code is in the project files for this lesson, but here is the full HTML:

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
      <nav class="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#project-1">Project 1</a></li>
          <li><a href="#project-2">Project 2</a></li>
          <li><a href="#project-3">Project 3</a></li>
          <li><a href="#project-4">Project 4</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
      <section id="home" class="section">
        <h2>Welcome</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
          cum aliquid deserunt, omnis officiis,
          <a href="#">corporis</a> nesciunt quos numquam consequuntur sint
          blanditiis nobis vero explicabo distinctio ducimus doloremque
          voluptatem, possimus quis
          <a href="https://traversymedia.com">Traversy Media</a> commodi
          repellat magnam fugiat cupiditate assumenda. Corrupti nulla quos,
          dignissimos mollitia deleniti adipisci illo aliquid nesciunt atque vel
          facilis?
        </p>
      </section>

      <section id="project-1" class="section">
        <h2>Project 1</h2>
        <img src="./project1.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
          cum aliquid deserunt, omnis officiis, corporis nesciunt quos numquam
          consequuntur sint blanditiis nobis vero explicabo distinctio ducimus
          doloremque voluptatem, possimus <a href="#">corporis</a> quis commodi
          repellat magnam fugiat cupiditate assumenda. Corrupti nulla quos,
          dignissimos mollitia deleniti adipisci illo aliquid nesciunt atque vel
          facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          minus nesciunt temporibus hic fugiat enim ullam, sed minima tempore
          non, voluptas molestias culpa fugit autem alias odio a! Maxime numquam
          amet doloribus voluptatum, provident hello odio, rerum iste illo ipsa
          dolorem error dolor totam voluptas omnis quis! Fugit labore cupiditate
          assumenda. Voluptates dolorem <span>hello</span> dignissimos, id odit
          nobis provident omnis deserunt eos ratione quidem, eaque magnam,
          quibusdam doloribus obcaecati rem dolor quis quaerat perferendis porro
          debitis dolore.
        </p>

        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </section>

      <section id="project-2" class="section">
        <h2>Project 2</h2>
        <img src="./project2.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
          cum aliquid deserunt, omnis officiis, corporis nesciunt quos numquam
          consequuntur sint blanditiis nobis vero explicabo distinctio ducimus
          doloremque voluptatem, possimus quis commodi repellat magnam fugiat
          cupiditate assumenda. Corrupti nulla quos, dignissimos mollitia
          deleniti adipisci illo aliquid nesciunt atque vel facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          minus nesciunt temporibus hic fugiat enim hello ullam, sed minima
          tempore non, voluptas molestias culpa fugit autem alias odio a! Maxime
          numquam amet doloribus voluptatum, provident odio, rerum iste illo
          ipsa dolorem error dolor totam voluptas omnis quis! Fugit labore
          cupiditate assumenda. Voluptates dolorem dignissimos, id odit nobis
          provident omnis deserunt eos ratione quidem, eaque magnam, quibusdam
          doloribus obcaecati rem dolor quis quaerat perferendis porro debitis
          dolore.
        </p>
      </section>

      <section id="project-3" class="section">
        <h2>Project 3</h2>
        <img src="./project3.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
          cum aliquid deserunt, <span>hello</span> omnis officiis, corporis
          nesciunt quos numquam consequuntur sint blanditiis nobis vero
          explicabo distinctio ducimus doloremque voluptatem, possimus
          <a href="#">corporis</a> quis commodi repellat magnam fugiat
          cupiditate assumenda. Corrupti nulla quos, dignissimos mollitia
          deleniti adipisci illo aliquid nesciunt atque vel facilis?
        </p>
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          minus nesciunt temporibus hic fugiat enim ullam, sed minima tempore
          non, voluptas molestias culpa fugit autem alias odio a! Maxime numquam
          amet doloribus voluptatum, provident odio, rerum iste illo ipsa
          dolorem error dolor totam voluptas omnis quis! Fugit labore cupiditate
          assumenda. Voluptates dolorem dignissimos, id odit nobis provident
          omnis deserunt eos ratione quidem, eaque magnam, quibusdam doloribus
          obcaecati rem dolor quis quaerat perferendis porro debitis dolore.
        </p>
      </section>

      <section id="project-4" class="section">
        <h2>Project 4</h2>
        <img src="./project4.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cumque
          cum aliquid deserunt, omnis officiis, corporis nesciunt quos numquam
          consequuntur sint blanditiis nobis <span>hello</span> vero explicabo
          distinctio ducimus doloremque voluptatem, possimus quis commodi
          repellat magnam fugiat cupiditate assumenda. Corrupti nulla quos,
          dignissimos mollitia deleniti adipisci illo aliquid nesciunt atque vel
          facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          minus nesciunt temporibus hic fugiat enim ullam, sed minima tempore
          non, voluptas molestias culpa fugit autem alias odio a! Maxime numquam
          amet doloribus voluptatum, provident odio, rerum iste illo ipsa
          dolorem error dolor totam voluptas omnis quis! Fugit labore cupiditate
          assumenda. Voluptates dolorem dignissimos, id odit nobis provident
          omnis deserunt eos ratione quidem, eaque magnam, quibusdam doloribus
          obcaecati rem dolor quis quaerat perferendis porro debitis dolore.
        </p>

        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </section>
    </main>
  </body>
</html>
```

Here is the current CSS:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  scroll-behavior: smooth;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

p {
  margin-top: 20px;
  margin-bottom: 20px;
}

img {
  width: 100%;
  margin-bottom: 40px;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.header {
  background: linear-gradient(45deg, #f00, #00f);
  color: #fff;
  padding: 10px 0;
  margin-bottom: 80px;
}

.header .menu ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.header .menu a {
  color: #fff;
}

.header .menu a:hover {
  color: #f00;
}

.section {
  margin: 30px 0;
}

.section h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 45px;
  background: linear-gradient(45deg, #f00, #00f);
  color: #fff;
}

.section#home {
  margin-bottom: 100px;
}

/* YOUR STYLES HERE */
```

This is not about making this project look good, it is just to test your knowledge of selectors. Here are the tasks:

1. Make the background color for the first paragraph in all sections lightyellow
2. Alternate background colors for all lis #eee and #ddd
3. Make the background #f4f4f4 and the padding 20px for all sections that have an image
4. Make the first paragraph after a ul #f4f4f4
5. Make the color of any links that start with http:// or https:// red
6. Make the first link in the first paragraph and the second paragraph of the second section bold

<details>

<summary>Solution</summary>

```css
/* 1. Make the background color for the first paragraph in all sections lightyellow */
.section p:first-of-type {
  background-color: lightyellow;
}

/* 2. Alternate background colors for all lis #eee and #ddd */
.section li:nth-child(odd) {
  background-color: #eee;
}

.section li:nth-child(even) {
  background-color: #ddd;
}

/* 3. Make the background #f4f4f4 and the padding 20px for all sections that have an image */
.section:has(img) {
  background-color: #f4f4f4;
  padding: 20px;
}

/* 4. Make the first paragraph after a ul #f4f4f4 */
ul + p {
  background-color: #f4f4f4;
}

/* 5. Make the color of any links that start with http:// or https:// red  */
a[href^="http://"],
a[href^="https://"]
{
  color: #f00;
}

/* 6. Make the first link in the first paragraph and the second paragraph of the second section bold */
.section:nth-of-type(2) p:first-of-type a,
.section:nth-of-type(2) p:nth-of-type(2) {
  font-weight: bold;
}
```

</details>
