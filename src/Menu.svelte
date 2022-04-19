<script>
  import quoteDataStore from './stores/quoteData-store';

  let quoteData = {};
  quoteDataStore.subscribe(quotes => quoteData = quotes);
  
  let categories = Object.keys(quoteData);
  console.log(categories)

</script>

<section id="menu-section">
	<select name="quotes" id="quotes-menu">
    <option value="" selected>Select a Category</option>
    {#each categories as category}
      console.log(category);
        <option value={category}>{category}</option>;
    {/each}
		<!-- <option value="" selected>Select a Category</option>
		<option value="gotama">Gotama the Buddha (625 - 545 BCE)</option>
		<option value="disciples">Accomplished Disciples of the Buddha</option>
		<option value="ledi">Venerable Ledi Sayadaw (1846-1923)</option>
		<option value="thetgyi">Saya Thetgyi (1873-1945)</option>
		<option value="webu">Venerable Webu Sayadaw (1896-1977)</option>
		<option value="subk">Sayagyi U Ba Khin (1899-1971)</option>
		<option value="sng">S.N. Goenka (1924-2013)</option>
		<option value="misc">Miscellaneous</option> -->
	</select>
</section>


<style>
  section {
    margin: 2vh 0 0 0;
  }

  #menu-section {
    /* background: #827914; */
    width: 95%;
  }

  #quotes-menu {
    width: 100%;
    font-size: 1.5rem;
  }
</style>