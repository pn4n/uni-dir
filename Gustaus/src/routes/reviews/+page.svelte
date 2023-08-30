<script>
  import { enhance } from "$app/forms";
  import { toast } from "svoast";

  let form_status;
  $: console.log(form_status);

  $: show_notif(form_status);
  const show_notif = (status) => {
    switch (status) {
      case "complete":
        toast.removeAll();
        toast.success("отзыв отправлен");
        break;

      case "loading":
        toast.info("Загрузка...");
        break;

      case "failes":
        toast.removeAll();
        toast.error("Ошибка! Отзыв не отправлен");
        break;
    }
  };
</script>

<h1>Отзывы</h1>
<form
  method="POST"
  use:enhance={() => {
    form_status = "loading";

    return async ({ result, update }) => {
      await update();
      console.log(result);
      result.data.success == true
        ? (form_status = "complete")
        : (form_status = "failes");
    };
  }}
>
  <label for="firstname">
    Имя
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
    <label for="comment"
      >Отзыв
      <textarea type="text" id="comment" name="comment" />
    </label>

    <fieldset>
      <legend>Оценка</legend>

      <label for="small">
        <input type="radio" id="small" name="size" value="5" checked />
        Отлично
      </label>

      <label for="medium">
        <input type="radio" id="medium" name="size" value="4" />
        Хорошо
      </label>

      <label for="large">
        <input type="radio" id="large" name="size" value="3" />
        Нормально
      </label>

      <label for="large">
        <input type="radio" id="large" name="size" value="2" />
        Плохо
      </label>

      <label for="large">
        <input type="radio" id="large" name="size" value="1" />
        Ужасно
      </label>
    </fieldset>
  </div>

  <button class="outline" disabled={form_status == "loading"}>
    Отправить отзыв</button
  >
</form>

<style>
  #comment {
    height: 80%;
    text-align: start;
  resize: none;
  }
</style>
