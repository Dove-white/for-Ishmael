# 🧩 DOM Practice Project — Trail Pack

You already built the Task Manager. This project checks that you understood it.

The app is different. Copying the Task Manager files will not pass. The DOM skills are the same:

* DOM selection
* Event listeners
* Creating elements dynamically
* Removing elements
* Updating content
* Working with classes
* Handling user input

By the end, you should be able to use those skills on a new screen, not only on the one you already built.

---

# 🚀 What You’re Building

You will build **Trail Pack**, a packing list for a trip.

Users will be able to:

✅ Add an item to the bag
✅ Choose a category: clothes, gear, food, or docs
✅ Mark an item as packed or still out
✅ Edit an item’s name
✅ Delete an item
✅ Clear every item that is already packed
✅ Filter the list: all, still out, packed
✅ See live counts and a progress bar

Counts come from your data, not from how many cards are on screen. The numbers stay correct while a filter is active.

A new item is not packed. If the “packed” filter is on when you add one, switch the list so the new item is visible.

An empty name should not be added. Editing a name to nothing should keep the old name.

---

# 🖼️ Project Preview

Open the live project and match what it does. The layout, labels, and colors can follow that page.

[Link to Live Project](https://devtasks-ish.netlify.app/)

---

# 📁 Project Structure

```txt
project-folder/
│
├── index.html
└── script.js
```

There is no `style.css` file. Style the page with Tailwind.

---

# 🌐 Step 1 — HTML Structure

Create your `index.html` file.

Load Tailwind from the CDN in the `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

# 🎨 Step 2 — Style with Tailwind

Put Tailwind classes on your elements. Use them for layout, color, spacing, and the packed / active states.

---

# ⚡ Step 3 — JavaScript DOM Logic

Create your `script.js` file.

```js
// Selecting elements

// Add item (form submit)

// Edit item name

// Delete item

// Mark packed / unpacked

// Filter the list

// Clear packed items

// Update the counts and the progress bar
```

---

Happy Coding! 🚀
