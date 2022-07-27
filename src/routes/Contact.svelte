<svelte:head>
  <title>Contact Conor</title>
</svelte:head>

<script>
  function openCalendar(e) {
    e.preventDefault()
    Calendly.initPopupWidget({url: 'https://calendly.com/c-sinclair/meet?hide_gdpr_banner=1'});
  }
</script>

<section>
  <h1>Contact Me!</h1>
  <p>Interested in hiring Conor?</p>
  <ul id='options'>
    <li>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <a href='' on:click={openCalendar}>Schedule time<br>with me</a>
    </li>
    <li>
      <p>Or</p>
    </li>
    <li>
      <a href="mailto: conor@sinclair.software">Ping me<br>an email</a>
    </li>
  </ul>
</section>

<style>
  section {
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    padding: 0;
    margin-top: 40px;
  }
  li {
    display: flex;
    justify-content: center;
    width: 200px;
  }
  li > a {
    text-align: center;
  }
</style>

