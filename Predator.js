var Predator = (function () {
  var carnivores = []
  var herbivores = []
  return {
    getCarnivores: function (callbackToInvoke) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'carnivores.json')
        xhr.addEventListener('load', function(evt){
          carnivores = JSON.parse(evt.target.responseText) //store it in private var (from private array in iife)
          //JSON.parse takes strings that look like arrays and turns them into array
          callbackToInvoke(carnivores) //execute callbacks
        })
        xhr.send()
    },
    getHerbivores: function(callbackToInvoke) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'herbivores.json')
        xhr.addEventListener('load', function(evt){
          herbivores = JSON.parse(evt.target.responseText)
          callbackToInvoke(herbivores)
        })
        xhr.send()
    }
  }
})();