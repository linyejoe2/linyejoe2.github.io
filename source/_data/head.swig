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

    if ('serviceWorker' in navigator) {   // 檢查browser有無支援serviceWorker
        navigator.serviceWorker.register('/sw.js').then(function () {   // register會回傳一個Promise
            console.log('Service worker registered!');
        });
    }

</script>

<style>
    .text-h2 {
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-weight: bold;
        line-height: 1.5;
        margin: 20px 0 15px;
        font-size: 1.375em;
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-top: 10px;
    }

    details {
        background: #404040 !important;
        padding: 10px;
        margin-bottom: 20px;
    }

    .fa-leetcode::before {
        content: url('/images/leetcode.svg');
        display: inline-block;
        width: 13px;
    }

    th,
    td {
        border-top:  1px solid rgb(100, 96, 96);
        border-left:  1px solid rgb(100, 96, 96);
        border-bottom: 1px solid rgb(97, 80, 80);
        border-right: 1px solid rgb(97, 80, 80);
    }

    table {
        margin: auto auto 20px 20px;
        width: auto;
        font-size: 18px;
        border: 2px solid rgb(80, 77, 77);
    }

    .post-body img {
        margin-left: 20px;
    }

    .post-body iframe {
        margin-left: 20px;
    }
</style>