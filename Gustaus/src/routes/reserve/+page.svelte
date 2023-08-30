<script>
  import { enhance } from '$app/forms';
  import { toast } from 'svoast';

  let form_status
  $:console.log( form_status )
  

  $: show_notif(form_status);
  const show_notif = (status) => {

    switch (status) {

      case 'complete':
            toast.removeAll();
            toast.success("Заявка принята");
            break

      case 'loading':
            toast.info("Загрузка...");
            break

      case 'failes': 
            toast.removeAll();
            toast.error("Ошибка! Заявка не отправлена");
            break
    }}
</script>

<h1>Резервация</h1>
<form method="POST"
      use:enhance={() => {
          form_status = 'loading'

          return async ({ result, update }) => {
            await update();
            console.log(result)
            // form_status =
            result.data.success == true ?
              form_status = 'complete' :
              form_status = 'failes'
          };
        }}>


      <label for="firstname"> ФИО
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


    <div class="grid">
      <label for="date">Дата
        <input type="date" id="date" name="date" required>
      </label>

      <label for="time">Время
        <input type="time" id="time" name="time">
      </label>

      <label for="people">Кол-во человек
        <input type="number" min="0" id="people" name="people" required>
      </label>

    </div>

    <label for="comment"
      >Комментарий
      <input type="text" id="comment" name="comment" />
    </label>

    <button class="outline" disabled={form_status == 'loading'}>
      Подтвердить заказ</button>

  </form>

