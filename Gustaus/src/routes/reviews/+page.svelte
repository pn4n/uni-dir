<script>
  import { enhance } from "$app/forms";
  import { toast } from "svoast";
  import StarRating from "$lib/components/StarRating.svelte";

  export let data

  let form_status;

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


<h1>Оставить отзыв</h1>
<form
  method="POST"
  use:enhance={() => {
    form_status = "loading";

    return async ({ result, update }) => {
      await update();
      result.data.success == true
        ? form_status = "complete"
        : form_status = "failes";
    };
  }}
>
  <label for="firstname">
    Имя
    <input type="text" id="name" name="name" required />
  </label>

  <div class="grid">
    <label for="text"
      >Комментарий
      <textarea type="text" id="text" name="text" />
    </label>

    <fieldset name='rating'>
      <legend>Оценка</legend>

      <label>
        <input type="radio" name="rating" value="5" checked />
        Отлично
      </label>

      <label for="medium">
        <input type="radio" name="rating" value="4" />
        Хорошо
      </label>

      <label for="large">
        <input type="radio" name="rating" value="3" />
        Нормально
      </label>

      <label for="large">
        <input type="radio" name="rating" value="2" />
        Плохо
      </label>

      <label for="large">
        <input type="radio" name="rating" value="1" />
        Ужасно
      </label>
    </fieldset>
  </div>

  <button class="outline" disabled={form_status == "loading"}>
    Отправить отзыв</button
  >
</form>

<h1>{ data.reviews.length > 0 ? 'Последние отзывы' : 'Нет отзывов'}</h1>

{#each data.reviews as rev}

<article>
  <header>
    <div class="grid">
      {rev.name}
      {rev.date_created}
    </div>
  </header>

  <p>{rev.text ? rev.text : 'Без комментария'}</p>
  
  <footer><StarRating rating={rev.rating} /></footer>
</article>
  
{/each}

<style>
  textarea {
    resize: none;
    height: 80%;
  }
</style>