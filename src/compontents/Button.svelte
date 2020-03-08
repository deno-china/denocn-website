<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<style>
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 2px;
  }
</style>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
