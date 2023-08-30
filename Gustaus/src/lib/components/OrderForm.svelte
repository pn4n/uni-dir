<script>
  import { enhance } from '$app/forms';
  
  export let cart_list
  
  export let form_status 

  let form

  $: json_order = JSON.stringify(cart_list)
  $: form_status = form?.success
  $: console.log(form_status)
  $: console.log( 'suc: ' + form?.success)

  $: total = Object.values(cart_list).reduce(
    (total, curr) => total + curr.price * curr.counter,
    0
  );


</script>

  <table>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Наименование</th>
        <th scope="col">Цена</th>
        <th scope="col">Стоимость</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.values(cart_list) as item, i (item.id)}
        <tr>
          <th scope="row">{item.counter}</th>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.price * item.counter}</td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th scope="col">Всего</th>
        <td />
        <td />
        <td>{total}</td>
      </tr>
    </tfoot>
  </table>

  <form method="POST" bind:this={form}
        use:enhance={() => {
          form_status = 'loading';

          return async ({ update }) => {
            await update();
            form_status = 'complete'
          };
        }}>

    <!-- FIRST THING TO FIX!!!!!  -->
    <input type="text" id="order" name="order" hidden 
      bind:value={json_order}>

      <label for="name"> ФИО
        <input type="text" id="name" name="name" required />
      </label>

    <div class="grid">
      <label for="email"
        >Email
        <input type="email" id="email" name="email" />
      </label>

      <label for="phone"
        >Телефон
        <input type="phone" id="phone" name="phone" required />
      </label>
    </div>

    <label for="address"
      >Адрес
      <input type="text" id="address" name="address" />
    </label>

    <label for="comment"
      >Комментарий
      <input type="text" id="comment" name="comment" />
    </label>

    <button class="outline">Подтвердить заказ</button>
  </form>
