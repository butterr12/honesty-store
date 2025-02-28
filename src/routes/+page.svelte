<script>
    import { base } from "$app/paths";
    
    let groupedProducts = [
      { price: "2 for ₱5", items: ["Hany"] },
      { price: "3 for ₱5", items: ["Choko Choko", "Frutos", "Mentos", "Milk", "O-Puff", "Potchi"] },
      { price: "₱5", items: ["Butter Coconut", "Wafer"] },
      { price: "₱6", items: ["Dodo", "Mini Ice Cream"] },
      { price: "₱10", items: ["Choco Dip", "Choco Knots", "Cream-O", "Fudgee", "Hansel", "Tiger"] },
      { price: "₱12", items: ["Bread Pan", "Cheezy", "Clover Bits/Chips", "Loaded", "Pillows Ube/Choco", "Rebisco", "Roller Coaster", "Super Crunch"] },
      { price: "₱15", items: ["C2", "Extra Joss"] },
      { price: "₱25", items: ["Alibaba", "Nova", "Piattos", "V-Cut"] }
    ];
  </script>
  
  <style>
    body {
      background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
      font-family: "Comic Sans MS", cursive, sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px; 
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px black;
      background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 20px auto;
      width: fit-content;
    }
  
    .logo {
      width: 50px; 
      height: auto;
    }
  
    .products-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      padding: 20px;
    }
  
    .product-group {
      background: white;
      display: inline-block;
      padding: 15px;
      margin: 10px;
      border: 3px solid black;
      font-size: 1.2rem;
      box-shadow: 4px 4px 8px gray;
      min-width: 180px;
      text-align: center;
    }
  
    .price {
      font-weight: bold;
      font-size: 1.3rem;
      border-bottom: 2px solid black;
      margin-bottom: 10px;
      padding-bottom: 5px;
    }
  </style>
  
  <main>
    <h1 class="title">
        Honesty Store <img src="{base}/yes.png" alt="Yes" class="logo">
    </h1>
  
    <div class="products-container">
      {#each groupedProducts as group}
        <div class="product-group">
          <p class="price">{group.price}</p>
          {#each group.items as item}
            <p>{item}</p>
          {/each}
        </div>
      {/each}
    </div>
  </main>
  