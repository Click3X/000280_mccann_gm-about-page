// D I S A B L E   Z O O M   B U G   O N   O R I E N T A T I O N   C H A N G E
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
     var viewportmeta = document.querySelector('meta[name="viewport"]');
     if (viewportmeta) {
          viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
          document.body.addEventListener('gesturestart', function() {
               viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
          }, false);
     }
}
// E N D   D I S A B L E   Z O O M   B U G   O N   O R I E N T A T I O N   C H A N G E