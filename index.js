// other code
var cool_feature_button = document.getElementById('cool-feature');
cool_feature_button.addEventListener('change', onCoolClick);
function onCoolClick()
{
    if (cool_feature_button.checked == true)
    {
        ons.platform.select('android');
    } else
    {
        window.location.reload()
    }
}