
const myProducts = [
  
    { name: "Sweetened Plantain Chips", category: "snack packs", img: "images/meatpie.jpg", desc: "Signature crunchy sweetened chips." },
    { name: "Unsweetened Plantain Chips", category: "snack packs", img: "images/meatpie.jpg", desc: "Healthy natural plantain flavor." },
    { name: "Achomo(Chinchin)", category: "snack packs", img: "images/meatpie.jpg", desc: "Crunchy traditional fried dough snacks." },
    { name: "Coconut Biscuit(Poloo)", category: "snack packs", img: "images/meatpie.jpg", desc: "Sweet and crispy coconut snacks." },
    { name: "Crispy fried flour chips", category: "snack packs", img: "images/meatpie.jpg", desc: "Savory fried flour treats." },
    { name: "Crispy baked flour chips", category: "snack packs", img: "images/meatpie.jpg", desc: "Light and healthy baked option." },
    { name: "Peanut brittle (Nkatie cake)", category: "snack packs", img: "images/meatpie.jpg", desc: "Classic peanut and sugar candy." },
    { name: "Coated Groundnut", category: "snack packs", img: "images/meatpie.jpg", desc: "Crunchy flour-coated peanuts." },
    { name: "Fried Springrolls", category: "snack packs", img: "images/meatpie.jpg", desc: "Crispy vegetables-filled rolls." },
    { name: "Fried Samosa", category: "snack packs", img: "images/meatpie.jpg", desc: "Spiced meat or veg triangles." },
    { name: "Ring Doughnut", category: "snack packs", img: "images/meatpie.jpg", desc: "Soft and sweet ring snacks." },
    { name: "Fried Doughnut", category: "snack packs", img: "images/meatpie.jpg", desc: "Traditional fluffy fried dough." },
    { name: "Sackles(A multi snack pack)", category: "snack packs", img: "images/meatpie.jpg", desc: "A variety of your favorites in one." },
    { name: "Cornsticks(Adunley)", category: "snack packs", img: "images/meatpie.jpg", desc: "Traditional crunchy corn sticks." },
    { name: "Kelewele", category: "snack packs", img: "images/meatpie.jpg", desc: "Spiced fried plantain cubes." },
    { name: "Peppered Gizzard", category: "snack packs", img: "images/meatpie.jpg", desc: "Spicy and savory gizzards." },

    // --- LOCAL BEVERAGES ---
    { name: "Sobolo", category: "local beverages", img: "images/sobolo.jpg", desc: "Hibiscus ginger blend." },
    { name: "Asaana/Liha", category: "local beverages", img: "images/sobolo.jpg", desc: "Caramelized corn drink." },
    { name: "Millet Drink(Zonkom)", category: "local beverages", img: "images/sobolo.jpg", desc: "Spicy millet refreshment." },
    { name: "Wheat Drink", category: "local beverages", img: "images/sobolo.jpg", desc: "Healthy wheat-based drink." },
    { name: "Soydrink(Soymilk)", category: "local beverages", img: "images/sobolo.jpg", desc: "Rich and creamy soy milk." },

    // --- FRESH JUICE ---
    { name: "Pineapple", category: "fresh juice", img: "images/pine-mint.jpg", desc: "100% cold-pressed pineapple." },
    { name: "Pine-Ginger(Pigin)", category: "fresh juice", img: "images/pine-mint.jpg", desc: "Pineapple with a spicy ginger kick." },
    { name: "Pine-Carrot(Pica)", category: "fresh juice", img: "images/pine-mint.jpg", desc: "Healthy pineapple and carrot blend." },
    { name: "Watermelon juice", category: "fresh juice", img: "images/pine-mint.jpg", desc: "Refreshing 100% watermelon." },
    { name: "Orange juice", category: "fresh juice", img: "images/pine-mint.jpg", desc: "Pure squeezed orange juice." },

    // --- FOOD PACKS ---
    { name: "Braised Rice(Angwamo)", category: "food packs", img: "images/jollof.jpg", desc: "Local oil rice with salt and pepper." },
    { name: "Cabbage Fried Rice", category: "food packs", img: "images/jollof.jpg", desc: "Fried rice with fresh cabbage mix." },
    { name: "Fried Rice", category: "food packs", img: "images/jollof.jpg", desc: "Classic savory fried rice." },
    { name: "Jollof Rice", category: "food packs", img: "images/jollof.jpg", desc: "Authentic spicy Ghanaian Jollof." },
    { name: "Waakye", category: "food packs", img: "images/jollof.jpg", desc: "Rice and beans with all the sides." },
    { name: "Spaghetti", category: "food packs", img: "images/jollof.jpg", desc: "Stir-fry pasta with veggies." },
    { name: "Fried Yam", category: "food packs", img: "images/jollof.jpg", desc: "Crispy yam chips." },
    { name: "Potato Fries", category: "food packs", img: "images/jollof.jpg", desc: "Classic golden potato fries." },

    // --- SOUPS & STEWS ---
    { name: "Kontomire Stew", category: "soups and stews", img: "images/stew.jpg", desc: "Rich spinach/cocoyam leaf stew." },
    { name: "Gravy", category: "soups and stews", img: "images/stew.jpg", desc: "Perfectly seasoned tomato base." },
    { name: "Chicken Stew", category: "soups and stews", img: "images/stew.jpg", desc: "Tender chicken in spicy sauce." },
    { name: "Gizzard Stew", category: "soups and stews", img: "images/stew.jpg", desc: "Spicy and chewy gizzards." },
    { name: "Beef Stew", category: "soups and stews", img: "images/stew.jpg", desc: "Slow-cooked tender beef." },
    { name: "Goat meat Stew", category: "soups and stews", img: "images/stew.jpg", desc: "Authentic local goat flavor." },
    { name: "Shito", category: "soups and stews", img: "images/stew.jpg", desc: "Hot black pepper sauce." },
    { name: "Chilli", category: "soups and stews", img: "images/stew.jpg", desc: "Fresh spicy blend." },
    { name: "Groundnut Soup", category: "soups and stews", img: "images/stew.jpg", desc: "Creamy peanut base." },
    { name: "Light Soup", category: "soups and stews", img: "images/stew.jpg", desc: "Spicy and refreshing." },
    { name: "Palmnut Soup", category: "soups and stews", img: "images/stew.jpg", desc: "Rich palm fruit base." },
    { name: "Nkateb3", category: "soups and stews", img: "images/stew.jpg", desc: "Traditional peanut soup blend." },
    { name: "Abunubunu", category: "soups and stews", img: "images/stew.jpg", desc: "Green leaf local soup." }
];

// 2. NAVIGATION LOGIC
window.navigateTo = function(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
};

// 3. SHOW CATEGORY LOGIC
window.showCategory = function(catName) {
    const grid = document.getElementById('catalogue-grid');
    const title = document.getElementById('category-title');
    if (!grid || !title) return;

    title.innerText = catName.replace('-', ' ').toUpperCase();
    grid.innerHTML = ""; 

    const filtered = myProducts.filter(p => p.category === catName);

    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="item">
                <img src="${p.img}" alt="${p.name}" onclick="openModal(this)">
                <div class="item-details">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                </div>
            </div>`;
    });

    // 4. ADD SIZE GUIDES AT THE BOTTOM
    let sizeGuideHTML = "";
    
    if (catName === 'snacks packs') {
        sizeGuideHTML = `
            <div class="general-size-guide">
                <h4>Available Snack Pack Sizes</h4>
                <div class="size-tags">
                    <span>50g</span> <span>100g</span> <span>250g</span> <span>500g</span> <span>1kg</span>
                </div>
            </div>`;
    } 
    else if (catName === 'local beverages' || catName === 'fresh juice') {
        sizeGuideHTML = `
            <div class="general-size-guide">
                <h4>Available Volume Sizes</h4>
                <div class="size-tags">
                    <span>250ml</span> <span>350ml</span> <span>500ml</span> 
                    <span>1.2L</span> <span>3L</span> <span>5L</span>
                </div>
            </div>`;
    }

    if (sizeGuideHTML !== "") {
        grid.innerHTML += sizeGuideHTML;
    }

    window.navigateTo('product-list');
};

// 5. SEARCH & MODAL
window.searchProducts = function() {
    let term = document.getElementById('searchInput').value.toLowerCase();
    let items = document.querySelectorAll('.item');
    items.forEach(it => {
        let name = it.querySelector('h3').innerText.toLowerCase();
        it.style.display = name.includes(term) ? "block" : "none";
    });
};

window.openModal = function(img) {
    const m = document.getElementById('imageModal');
    const mi = document.getElementById('fullImage');
    if(m && mi) {
        m.style.display = "block";
        mi.src = img.src;
    }
};

console.log("Flave on Fire script fully loaded!");