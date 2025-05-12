<script src="src/index.js"></script>;
<div class="call-to-action">
  <form name="adventures" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="adventures" />
    <p>
      I hope I have sparked your interest in St Vincent, and wet your apptite
      for wanting to go there. If you do, click the button below and I will
      email you some things to do!
    </p>
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
      style="
       margin-bottom: 10px;
       display: block;
       padding: 10px;
       width: 100%;
     "
    />

    <input
      type="email"
      name="email"
      placeholder="Your email"
      required
      style="
       margin-bottom: 10px;
       display: block;
       padding: 10px;
       width: 100%;
     "
    />
    <button type="submit">St Vicent adventures 📩</button>
  </form>
</div>;
