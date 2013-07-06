angular.module('bu.ng.nice-preload', []).
  directive('nicePreload', function(){
    return {
      restrict: 'A',
      scope: {
        src: '@'
      },
      link: function(scope, elem, attrs){
        var html = elem.html()
        elem.html('')
        scope.$watch('src', function(val){
          if(val != ''){
            elem.html('')
            var img = (new Image())
            elem.html(html)
            img.onload = function(){
              elem.html('')
              elem.append(img)
            }
            img.src = val;
          }
        })
      }
    }
  })
