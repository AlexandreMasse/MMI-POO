(function(w, d) {
  'use strict';

  function trimLeft(val) {
    return val.replace(/^[\s\uFEFF\xA0]+/g, '');
  }

  d.addEventListener('DOMContentLoaded', function() {
    var content;
    var codeTags = Array.prototype.slice.call(d.querySelectorAll('code[class^=hljs][data-trim]'));
    var pad;
    var lines;
    codeTags.forEach(function(codeTag) {
      content = codeTag.innerHTML.replace(/^(\n|\r|[\n\r])/, '');
      lines = content.split('\n');
      // console.log(lines)
      pad = lines.reduce(function(acc, line) {
                                if (line.length > 0 && trimLeft(line).length > 0 && acc > line.length - trimLeft(line).length) {
                                  return line.length - trimLeft(line).length;
                                }
                                return acc;
                              }, Number.POSITIVE_INFINITY);
      // console.log(pad)
      codeTag.innerHTML = lines.map(function(line, index) {
                                        return line.slice(pad);
                                      })
                                 .join('\n');
    });
  }, false);

  // =================

  w.toggle = function(el) {
    var domEl = d.getElementById(el);
    if (domEl && domEl.style.display === 'none') {
      domEl.style.display = 'block';
    } else {
      domEl.style.display = 'none';
    }
  }

  // =================

  d.addEventListener('DOMContentLoaded', function() {
    Array.prototype.slice.call(d.querySelectorAll('.consigne a[href="#"]'))
      .forEach(function(a) {
        a.addEventListener('click', function(evt) { return evt.preventDefault(); }, false);
      });
  });

})(window, document);