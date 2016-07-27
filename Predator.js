var Predator = (function () {
  var carnivores = [];
  var herbivores = [];
  return {
    getCarnivores: function (callbackToInvoke) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'carnivores.json')
        xhr.addEventListener('load', function(){
          carnivores = JSON.parse(xhr.responseText) //store it in private var (from private array in iife)
        })
        xhr.send()

      callbackToInvoke(carnivores) //execute callbacks
    },
    getHerbivores: function(callbackToInvoke) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'herbivores.json')
        xhr.addEventListener('load', function(){
          herbivores = JSON.parse(xhr.responseText)
        })
        xhr.send()
      callbackToInvoke(herbivores)
    }
  }
})();