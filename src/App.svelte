<script>
import Header from './Header.svelte';
import Quote from './Quote.svelte';
import Menu from './Menu.svelte';
</script>


<Header heading="Words of Dhamma" />

<main>
  <Menu /> 
  <Quote />  
</main>  


<style>
* {
  box-sizing: border-box;
  font-family: Lora, serif;
}

/* body {
  width: 100vw;
  height: auto;
} */

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(232,202,128, .5);
}

/* section {
  margin: 2vh 0 0 0;
}

fieldset {
  padding: 20px;
  border: 1px solid black;
}
legend {
  background-color: #827914;
  padding: 5px;
  color: white;
  font-size: 3.5vw;
  letter-spacing: 1px;
}
label {
  font-family: 'Vollkorn', serif;
  font-size: 1.2rem;
} */



/*BUTTONS*/
#btn-section {

}

.radio-btn-cont {
  font-size: 1.3rem;
  margin: 15px 0;
}


/* MEDIA QUERIES */
@media screen and (min-width: 728px) {  
  legend {
    font-size: 3vw;
  }
}

@media screen and (min-width: 920px) {
  legend {
    font-size: 2.5vw;
  }
}

@media screen and (min-width: 1100px) {
  header h1 {
    font-size: 4.5vw;
    margin: 0;
  }
  
  legend {
    font-size: 2vw;
  }
  
  #quote-section {
    padding-top: 40px;
  }
  
  #quote-section p.quote {
    width: 50%;
    font-size: 2.5vw;
  }
}

@media screen and (min-width: 1300px) {
  header h1 {
    font-size: 4vw;
    margin: 0;
  }
  
  legend {
    font-size: 1.7vw;
  }
  
  #quote-section {
    padding-top: 40px;
  }
  
  #quote-section p.quote {
    width: 40%;
    font-size: 2vw;
  }
}

@media screen and (min-width: 1700px) {
  header h1 {
    font-size: 2.5vw;
    margin: 0;
  }
  
  legend {
    font-size: 1vw;
  }
  
  #quote-section {
    padding-top: 20px;
  }
  
  #quote-section p.quote {
    width: 35%;
    font-size: 1.5vw;
  }
}
</style>