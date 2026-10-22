const menuButton = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const categoryInput = document.querySelector("#categoryInput");
const categoryPreview = document.querySelector("#categoryPreview");
const listCategoryName = document.querySelector("#listCategoryName");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const itemCount = document.querySelector("#itemCount");
const themeSelect = document.querySelector("#themeSelect");
const darkModeButton = document.querySelector("#darkModeBtn");
const winnerResult = document.querySelector("#winnerResult");
const items = [];

function closeSidebar() {
  sidebar.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function addItem() {
  const item = itemInput.value.trim();
  if (!item) return;

  items.push(item);
  itemInput.value = "";
  renderItems();
}

function renderItems() {
  itemList.replaceChildren();

  if (items.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-msg";
    emptyMessage.textContent = "No items added yet!";
    itemList.append(emptyMessage);
  } else {
    for (const item of items) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      itemList.append(listItem);
    }
  }

  itemCount.textContent = String(items.length);
}

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

sidebar.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeSidebar();
});

categoryInput.addEventListener("input", () => {
  const category = categoryInput.value.trim();
  categoryPreview.textContent = category || "Unset Category";
  listCategoryName.textContent = category || "Your List";
});

document.querySelector("#addItemBtn").addEventListener("click", addItem);
itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});

document.querySelector("#pickItemBtn").addEventListener("click", () => {
  if (items.length === 0) {
    winnerResult.textContent = "Add options first!";
    return;
  }

  winnerResult.textContent = items[Math.floor(Math.random() * items.length)];
});

themeSelect.addEventListener("change", () => {
  document.documentElement.style.setProperty(
    "--accent-color",
    themeSelect.value,
  );
});

darkModeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  darkModeButton.textContent = isDarkMode
    ? "Turn Off Dark Mode"
    : "Turn On Dark Mode";
});
