<script>
    import { base } from "$app/paths";
    
    let groupedProducts = [
      { price: "2 for ₱5", items: ["Hany"] },
      { price: "3 for ₱5\n(can be assorted)", items: ["Choko Choko", "Frutos", "Mentos", "Milk", "O-Puff", "Potchi"] },
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
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px auto;
    width: fit-content;
    flex-wrap: wrap;
  }

  .logo {
    width: 50px; 
    height: auto;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, max-content)); 
    gap: 15px;
    padding: 20px;
    justify-content: center; 
  }

  @media (min-width: 768px) { 
    .products-container {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
      max-width: 800px; 
      margin: 0 auto;
      gap: 50px;
    }
  }

  .product-group {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 3px solid black;
    font-size: 1.2rem;
    box-shadow: 4px 4px 8px gray;
    min-width: 180px;
    text-align: center;
  }

  .price {
    font-weight: bold;
    font-size: 1.3rem;
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
    padding-bottom: 5px;
}

.price::after {
    content: "";
    display: block;
    width: 170px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 50%; 
    transform: translateX(-50%); 
    bottom: 0; 
}


</style>

<main>
  <h1 class="title">
      Honesty Store <img src="{base}/yes.png" alt="Yes" class="logo">
  </h1>

  <div class="products-container">
    {#each groupedProducts as group}
      <div class="product-group">
        <p class="price">{@html group.price.replace(/\n/g, "<br>")}</p>
        {#each group.items as item}
          <p>{item}</p>
        {/each}
      </div>
    {/each}
  </div>
</main>
