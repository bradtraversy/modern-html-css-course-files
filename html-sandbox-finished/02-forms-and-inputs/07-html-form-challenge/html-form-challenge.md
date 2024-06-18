# HTML Form Challenge

In this lesson, I want you to create a form for an apartment search website. The form should include the following fields:

- A header at the top of the form that says "Apartment Search"
- Location (text input)
- Monthly Price (range or number input)
- Number of Bedrooms (number input)
- Number of Bathrooms (number input)
- Pets Allowed (checkbox)
- Date Available (date input)
- Submit Button

## Other Information

The range will not show the value in the UI, which is fine for this exercise.

Each input should have a corresponding label. The `id` attribute of each input should match the `for` attribute of its corresponding label.

Each input should also have a `name` attribute that corresponds to the data that will be submitted when the form is submitted.

You can use `<br>` tags to separate the form fields since we have not gotten into CSS yet.

If your solution does not look exactly like the example, that's okay. The important thing is that you have all the required fields and that the labels are correctly associated with the inputs.

<details>
  <summary>Click For Solution</summary>

```html
<header>
  <h1>Apartment Search</h1>
</header>
<form action="submit.php" method="post">
  <label for="location">Location:</label>
  <input type="text" id="location" name="location" required /><br /><br />

  <label for="priceRange">Price Range:</label>
  <input
    type="range"
    id="priceRange"
    name="priceRange"
    min="0"
    max="5000"
    step="100"
    value="1000"
  /><br /><br />

  <label for="numBedrooms">Number of Bedrooms:</label>
  <input
    type="number"
    id="numBedrooms"
    name="numBedrooms"
    min="0"
    max="10"
    value="1"
    required
  /><br /><br />

  <label for="numBathrooms">Number of Bathrooms:</label>
  <input
    type="number"
    id="numBathrooms"
    name="numBathrooms"
    min="0"
    max="10"
    value="1"
    required
  /><br /><br />

  <label for="petsAllowed">Pets Allowed:</label>
  <input type="checkbox" id="petsAllowed" name="petsAllowed" /><br /><br />

  <label for="dateAvailable">Date Available:</label>
  <input
    type="date"
    id="dateAvailable"
    name="dateAvailable"
    required
  /><br /><br />

  <input type="submit" value="Submit" />
</form>
```

</details>
