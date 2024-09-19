const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Define the products directly in the script with image paths as strings
const allProducts = [
    {
        "id": 1,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_1.png",
        "new_price": 50.0,
        "old_price": 80.5
      },
      {
        "id": 2,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_2.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 3,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_3.png",
        "new_price": 60.0,
        "old_price": 100.5
      },
      {
        "id": 4,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_4.png",
        "new_price": 100.0,
        "old_price": 150.0
      },
      {
        "id": 5,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_5.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 6,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_6.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 7,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_7.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 8,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_8.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 9,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_9.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 10,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_10.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 11,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_11.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 12,
        "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "women",
        "image": "./assets/images/product_12.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 13,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_13.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 14,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_14.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 15,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_15.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 16,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_16.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 17,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_17.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 18,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_18.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 19,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_19.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 20,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_20.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 21,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_21.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 22,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_22.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 23,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_23.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 24,
        "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
        "category": "men",
        "image": "./assets/images/product_24.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 25,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_25.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 26,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_26.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 27,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_27.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 28,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_28.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 29,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_29.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 30,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_30.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 31,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_31.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 32,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_32.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 33,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_33.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 34,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_34.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 35,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_35.png",
        "new_price": 85.0,
        "old_price": 120.5
      },
      {
        "id": 36,
        "name": "Boys Orange Colourblocked Hooded Sweatshirt",
        "category": "kid",
        "image": "./assets/images/product_36.png",
        "new_price": 85.0,
        "old_price": 120.5
      }
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Navigating to page...");
  await page.goto("http://localhost:5173/addproduct", {
    waitUntil: "networkidle2",
  });

  console.log("Waiting for selectors...");
  try {
    await page.waitForSelector('input[name="name"]', { timeout: 60000 });
    await page.waitForSelector('select[name="category"]', { timeout: 60000 });
    await page.waitForSelector('input[name="old_price"]', { timeout: 60000 });
    await page.waitForSelector('input[name="new_price"]', { timeout: 60000 });
    await page.waitForSelector('input[type="file"]', { timeout: 60000 });
    await page.waitForSelector("button.addproduct-btn", { timeout: 60000 });
  } catch (error) {
    console.error("Error waiting for selectors:", error);
    await browser.close();
    return;
  }

  for (const product of allProducts) {
    try {
      console.log(`Processing product: ${product.name}`);

      // Clear fields before entering new data
      await page.evaluate(() => {
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="old_price"]').value = "";
        document.querySelector('input[name="new_price"]').value = "";
      });

      // Enter product data
      await page.type('input[name="name"]', product.name);
      await page.select('select[name="category"]', product.category);
      await page.type('input[name="old_price"]', product.old_price.toFixed(2));
      await page.type('input[name="new_price"]', product.new_price.toFixed(2));

      // Handle image upload
      const imagePath = path.join(__dirname, product.image);
      if (fs.existsSync(imagePath)) {
        console.log(`Uploading image: ${imagePath}`);
        const fileInput = await page.$('input[type="file"]');
        await fileInput.uploadFile(imagePath);
      } else {
        console.error(`Image not found: ${imagePath}`);
      }

      // Submit the form
      await page.click("button.addproduct-btn");
      console.log("Form submitted, waiting for 1.5 seconds...");
      await sleep(1500); // Wait for 1.5 seconds before processing the next product

      console.log(`Submitted product: ${product.name}`);
    } catch (error) {
      console.error("Error processing product:", product, error);
    }
  }

  console.log("Closing browser...");
  await browser.close();
})();
