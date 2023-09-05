<script>
  import { enhance } from "$app/forms";

  import { show_notif } from "$lib/utils";

  import LoadingDirectus from "$lib/components/LoadingDirectus.svelte";
  import Review from "$lib/components/Review.svelte";
  
  export let data;

  let form_status;
  $: show_notif(form_status);

</script>

<h1>{ i("reviews.header") }</h1>
{#await data.streamed.reviews}
  <LoadingDirectus />
{:then reviews}
  <form
    method="POST"
    use:enhance={() => {
      form_status = "loading";

      return async ({ result, update }) => {
        await update();
        result.data.success == true
          ? (form_status = "complete")
          : (form_status = "failes");
      };
    }}
  >
    <label for="firstname">
      { i("form.name") }
      <input type="text" id="name" name="name" required />
    </label>

    <div class="grid">
      <label for="text">{ i("form.comment") }
        <textarea type="text" id="text" name="text" />
      </label>

      <fieldset name="rating">
        <legend>{ i("reviews.rating.header") }</legend>

        <label>
          <input type="radio" name="rating" value="5" checked />
          { i("reviews.rating5") }
        </label>

        <label for="medium">
          <input type="radio" name="rating" value="4" />
          { i("reviews.rating4") }
        </label>

        <label for="large">
          <input type="radio" name="rating" value="3" />
          { i("reviews.rating3") }
        </label>

        <label for="large">
          <input type="radio" name="rating" value="2" />
          { i("reviews.rating2") }
        </label>

        <label for="large">
          <input type="radio" name="rating" value="1" />
          { i("reviews.rating1") }
        </label>
      </fieldset>
    </div>

    <button class="outline" disabled={form_status == "loading"}>
      { i("form.submit") }</button
    >
  </form>

  <h1>{reviews.length > 0 ? i("reviews.last_reviews") : i("reviews.no_reviews") }</h1>

  {#each reviews as rev}
    <Review {...rev}/>
  {/each}
{:catch error}
  <p>{i('directus_failed')}</p>
  <p>{error.message}</p>
{/await}

<style>
  textarea {
    resize: none;
    height: 80%;
  }
</style>
