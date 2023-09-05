<script>
  import { enhance } from '$app/forms';
  import { show_notif } from '$lib/utils';

  let form_status
  

  $: show_notif(form_status);
</script>

<h1>{ i('reserve.header') }</h1>
<form method="POST"
      use:enhance={() => {
          form_status = 'loading'

          return async ({ result, update }) => {
            await update();
            
            result.data.success == true ?
              form_status = 'complete' :
              form_status = 'failes'
          };
        }}>


      <label for="firstname">{ i('form.name') }
        <input type="text" id="name" name="name" required />
      </label>

    <div class="grid">
      <label for="email">{ i('form.email') }
        <input type="email" id="email" name="email" />
      </label>

      <label for="phone">{ i('form.phone') }
        <input type="phone" id="phone" name="phone" required />
      </label>
    </div>


    <div class="grid">
      <label for="date">{ i('reserve.date') }
        <input type="date" id="date" name="date" required>
      </label>

      <label for="time">{ i('reserve.time') }
        <input type="time" id="time" name="time">
      </label>

      <label for="people">{ i('reserve.people') }
        <input type="number" min="0" id="people" name="people" required>
      </label>

    </div>

    <label for="comment">{ i('form.comment') }
      <input type="text" id="comment" name="comment" />
    </label>

    <button class="outline" disabled={form_status == 'loading'}>
      { i('form.submit') }</button>

  </form>

