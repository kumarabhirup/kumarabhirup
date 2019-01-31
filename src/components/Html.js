const Html = ({ body, title }) => `
  <!DOCTYPE html>

  <html lang="en">

    <head>

      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="">

      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>${title}</title>

      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/web/assets/mobirise-icons-bold/mobirise-icons-bold.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/web/assets/mobirise-icons/mobirise-icons.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/tether/tether.min.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/bootstrap/css/bootstrap-grid.min.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/bootstrap/css/bootstrap-reboot.min.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/socicon/css/styles.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/dropdown/css/style.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/as-pie-progress/css/progress.min.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/theme/css/style.css">
      <link rel="stylesheet" href="%PUBLIC_URL%/prebuilt/mobirise/css/mbr-additional.css" type="text/css">

    </head>

    <body>

      <noscript>
        <div style="width: 900px; margin: 20% auto; text-align: center;">
          <h2>It's pity that you wanna live in a <span style="color: red">world without JavaScript!</span> 🌎</h2>
        </div>
      </noscript>

      <div id="root">
        <!--
          Finding for code? Wanna just copy, paste and enjoy? 😆😆
          Here's the open sourced code: https://github.com/KumarAbhirup/kumarabhirup
        -->
        ${body}
      </div>

      <script src="%PUBLIC_URL%/prebuilt/web/assets/jquery/jquery.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/popper/popper.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/tether/tether.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/bootstrap/js/bootstrap.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/social-likes/social-likes.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/dropdown/js/script.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/touch-swipe/jquery.touch-swipe.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/as-pie-progress/jquery-as-pie-progress.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/smooth-scroll/smooth-scroll.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/jarallax/jarallax.min.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/theme/js/script.js"></script>
      <script src="%PUBLIC_URL%/prebuilt/formoid/formoid.min.js"></script>

    </body>

  </html>
`

export default Html