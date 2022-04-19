<script>
import quoteDataStore from './stores/quoteData-store';
import Image from './Image.svelte';

// Quotes Data Store
let quoteData = {};
quoteDataStore.subscribe(quotes => quoteData = quotes);
console.log(quoteData);

</script>
 
<section id="quote-section-cont">
  <div id="quote-section">
    <pre class="quote" id="pali-hindi-quote">
      {quoteData.ledi[0].paliquote}
    </pre>
    <pre class="quote" id="english-quote">
      {quoteData.ledi[0].engquote}
    </pre>
    <p id="attribution">
      &mdash;{quoteData.ledi[0].attribution}
    </p>
    <Image />
  </div>  
</section>  
   

<style>
#quote-section p {
  font-family: 'Poppins', sans-serif;
}


#quote-section pre {
  font-family: 'Times Ext Roman', serif;
}

/* section {
  margin: 2vh 0;
} */

#quote-section-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* QUOTE SECTION */
#quote-section {
  width: 90vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
/*   box-shadow: inset 1px 1px 5px black; */
  overflow: auto;
}

#quote-section pre.quote {
  width: 90%;
  font-size: 1.2rem;
}
#pali-hindi-quote {
  font-style: italic;
}
#attribution {
  width: 90%;
  text-align: right;
}


/* MEDIA QUERIES */
@media screen and (min-width: 728px) {
  header h1 {
    font-size: 6vw;
    margin: 0;
  }
  
  #quote-section {
    padding-top: 20px;
  }
  
  #quote-section pre.quote {
    margin: 10px;
    width: 70%;
    font-size: 3rem;
  }
}

@media screen and (min-width: 920px) {
  header h1 {
    font-size: 5vw;
    margin: 0;
  }
  
  #quote-section {
    padding-top: 40px;
  }
  
  #quote-section pre.quote {
    width: 60%;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 1100px) {
  header h1 {
    font-size: 4.5vw;
    margin: 0;
  }
  
  #quote-section {
    padding-top: 40px;
  }
  
  #quote-section pre.quote {
    width: 50%;
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1300px) {
  header h1 {
    font-size: 4vw;
    margin: 0;
  }
  
  #quote-section {
    padding-top: 40px;
  }
  
  #quote-section pre.quote {
    width: 40%;
    font-size: 2vw;
  }
}

@media screen and (min-width: 1700px) {
  header h1 {
    font-size: 2.5vw;
    margin: 0;
  }

  #quote-section {
    padding-top: 20px;
  }
  
  #quote-section pre.quote {
    width: 35%;
    font-size: 1.5vw;
  }
}
</style>