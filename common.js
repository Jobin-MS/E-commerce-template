let isCatOpen = false;
let isFilOpen = false;
let isPriceOpen = false;
let isRatingOpen = false;
let isNutritionOpen = false;

function side_show() {
    let side = document.querySelector('.side_bar');
    side.classList.toggle('active');

    let cat_list = document.getElementById('cat_list');
    let fil_list = document.getElementById('fil_list');
    let price_range = document.getElementById('price_range');
    let rating_range = document.getElementById('rating_range');
    let nutrition_range = document.getElementById('nutrition_range');

    if (!side.classList.contains('active')) {
        isCatOpen = cat_list.style.display === "block";
        isFilOpen = fil_list.style.display === "flex";
        isPriceOpen = price_range.style.display === "block";
        isRatingOpen = rating_range.style.display === "block";
        isNutritionOpen = nutrition_range.style.display === "block";

        cat_list.style.display = "none";
        fil_list.style.display = "none";
        price_range.style.display = "none";
        rating_range.style.display = "none";
        nutrition_range.style.display = "none";
    } else {
        if (isCatOpen) {
            cat_list.style.display = "block";
        }
        if (isFilOpen) {
            fil_list.style.display = "flex";
            if (isPriceOpen) {
                price_range.style.display = "block";
            }
            if (isRatingOpen) {
                rating_range.style.display = "block";
            }
            if (isNutritionOpen) {
                nutrition_range.style.display = "block";
            }
        }
    }
}

function toggleCategory() {
    let side = document.querySelector('.side_bar');
    
    if (!side.classList.contains('active')) {
        return;
    }

    let cat_drop = document.getElementById('cat_drop');
    let cat_up = document.getElementById('cat_up');
    let cat_list = document.getElementById('cat_list');
    let side_list = cat_drop.closest('.side_list');

    if (cat_list.style.display === "none" || cat_list.style.display === "") {
        cat_drop.style.display = "none";
        cat_up.style.display = "inline";
        cat_list.style.display = "block";
        side_list.classList.add('active');
        isCatOpen = true;
    } else {
        cat_drop.style.display = "inline";
        cat_up.style.display = "none";
        cat_list.style.display = "none";
        side_list.classList.remove('active');
        isCatOpen = false;
    }
}

function toggleFilter() {
    let side = document.querySelector('.side_bar');
    
    if (!side.classList.contains('active')) {
        return;
    }

    let fil_drop = document.getElementById('fil_drop');
    let fil_up = document.getElementById('fil_up');
    let fil_list = document.getElementById('fil_list');
    let side_list = fil_drop.closest('.side_list');

    if (fil_list.style.display === "none" || fil_list.style.display === "") {
        fil_drop.style.display = "none";
        fil_up.style.display = "inline";
        fil_list.style.display = "flex";
        side_list.classList.add('active');
        isFilOpen = true;
    } else {
        fil_drop.style.display = "inline";
        fil_up.style.display = "none";
        fil_list.style.display = "none";
        side_list.classList.remove('active');
        isFilOpen = false;
        document.getElementById('price_range').style.display = "none";
        document.getElementById('rating_range').style.display = "none";
        document.getElementById('nutrition_range').style.display = "none";
    }
}

function togglePriceRange() {
    let price_drop = document.getElementById('price_drop');
    let price_up = document.getElementById('price_up');
    let price_range = document.getElementById('price_range');
    let price_toggle = document.querySelector('.price_toggle');

    if (price_range.style.display === "none" || price_range.style.display === "") {
        price_drop.style.display = "none";
        price_up.style.display = "inline";
        price_range.style.display = "block";
        price_toggle.classList.add('active'); // Add active class
        isPriceOpen = true;
    } else {
        price_drop.style.display = "inline";
        price_up.style.display = "none";
        price_range.style.display = "none";
        price_toggle.classList.remove('active'); // Remove active class
        isPriceOpen = false;
    }
}

function toggleRating() {
    let rating_drop = document.getElementById('rating_drop');
    let rating_up = document.getElementById('rating_up');
    let rating_range = document.getElementById('rating_range');
    let rating_toggle = document.querySelector('.rating_toggle');

    if (rating_range.style.display === "none" || rating_range.style.display === "") {
        rating_drop.style.display = "none";
        rating_up.style.display = "inline";
        rating_range.style.display = "block";
        rating_toggle.classList.add('active'); // Add active class
        isRatingOpen = true;
    } else {
        rating_drop.style.display = "inline";
        rating_up.style.display = "none";
        rating_range.style.display = "none";
        rating_toggle.classList.remove('active'); // Remove active class
        isRatingOpen = false;
    }
}

function toggleNutritionalValue() {
    let nutrition_drop = document.getElementById('nutrition_drop');
    let nutrition_up = document.getElementById('nutrition_up');
    let nutrition_range = document.getElementById('nutrition_range');
    let nutrition_toggle = document.querySelector('.nutrition_toggle');

    if (nutrition_range.style.display === "none" || nutrition_range.style.display === "") {
        nutrition_drop.style.display = "none";
        nutrition_up.style.display = "inline";
        nutrition_range.style.display = "block";
        nutrition_toggle.classList.add('active'); // Add active class
        isNutritionOpen = true;
    } else {
        nutrition_drop.style.display = "inline";
        nutrition_up.style.display = "none";
        nutrition_range.style.display = "none";
        nutrition_toggle.classList.remove('active'); // Remove active class
        isNutritionOpen = false;
    }
}
