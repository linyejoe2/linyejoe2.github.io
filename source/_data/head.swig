<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

<script color="0,0,255" opacity="0.5" zIndex="-1" count="99"
    src="https://cdn.jsdelivr.net/npm/canvas-nest.js@1/dist/canvas-nest.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(() => {
        let deferredPrompt;
        $("#installApp").hide();

        window.addEventListener('beforeinstallprompt', (e) => {
            deferredPrompt = e;
            $("#installApp").show();
        });

        const installApp = document.getElementById('installApp');

        installApp.addEventListener('click', async () => {
            if (deferredPrompt !== null) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    deferredPrompt = null;
                }
            }
        });
    })

</script>