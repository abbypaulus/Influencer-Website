<script>
window.onload = function() {
        var mainImg = document.getElementById('Main');

        document.getElementById('TNOne').onclick = function() {
                mainImg.src = 'main1.jpg';
                //alert('one clicked');
        };
        document.getElementById('TNTwo').onclick = function() {
                mainImg.src = 'main2.jpg';
                //alert('two clicked');
        };
};
</script>