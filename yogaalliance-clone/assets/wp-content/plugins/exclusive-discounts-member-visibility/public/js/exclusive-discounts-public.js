(function($){
  'use strict';

  // Utilidades mínimas
  function getCookie(name) {
    var safe = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var m = document.cookie.match(new RegExp('(?:^|; )' + safe + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }

  // Sincronización suave (no recarga) por si se navega vía AJAX
  document.addEventListener('DOMContentLoaded', function(){
    try {
      var cookieName = (window.EXDISC && EXDISC.cookieName) ? EXDISC.cookieName : 'DashboardName';
      if (!window.localStorage) return;
      var val = localStorage.getItem(cookieName);
      if (!val) {
        for (var i=0;i<localStorage.length;i++){
          var k = localStorage.key(i);
          if (k && k.toLowerCase() === cookieName.toLowerCase()) {
            val = localStorage.getItem(k); break;
          }
        }
      }
      if (val && getCookie(cookieName) !== val) {
        (function(){
        var isHTTPS = location.protocol === 'https:';
        var base = cookieName + '=' + encodeURIComponent(val) + '; path=/; ' + (isHTTPS ? 'SameSite=None; Secure' : 'SameSite=Lax');
        var host = location.hostname;
        var parts = host.split('.');
        document.cookie = base; // host-only
        document.cookie = base + '; domain=' + host; // explicit host
        if (parts.length >= 2) {
          var parent = '.' + parts.slice(-2).join('.');
          if (parent !== '.' + host) {
            document.cookie = base + '; domain=' + parent; // parent domain
          }
        }
      })();
      }
    } catch(e){}
  });

})(jQuery);


  // Helper: normalize (lowercase + trim + collapse spaces)
  function norm(s){
    if (s == null) return '';
    s = (''+s).toLowerCase().trim();
    s = s.replace(/\s+/g,' ');
    return s;
  }

  function readLocalFirst(name){
    var val = '';
    try {
      if (window.localStorage) {
        val = localStorage.getItem(name) || '';
        if (!val) {
          for (var i=0;i<localStorage.length;i++){
            var k = localStorage.key(i);
            if (k && k.toLowerCase() === name.toLowerCase()) { val = localStorage.getItem(k); break; }
          }
        }
      }
    } catch(e){}
    return val || '';
  }

  function allowedByValue(v, allowed){
    var n = norm(v);
    var candidates = [n];
    var eq = n.indexOf('=');
    if (eq !== -1) {
      var rhs = n.slice(eq+1).trim();
      if (rhs) candidates.push(rhs);
    }
    for (var i=0;i<allowed.length;i++){
      if (candidates.indexOf(norm(allowed[i])) !== -1) return true;
    }
    return false;
  }

  document.addEventListener('DOMContentLoaded', function(){
    if (typeof EXDISC === 'undefined') return;
    var mode = EXDISC.mode || 'server';
    if (mode !== 'client_rest') return;

    var shell = document.getElementById('exdisc-shell');
    if (!shell) return;
    var postId = shell.getAttribute('data-postid');
    var val = readLocalFirst(EXDISC.cookieName);
    // Also try cookie if present (best-effort)
    if (!val) val = getCookie(EXDISC.cookieName);

    if (allowedByValue(val, EXDISC.allowed)) {
      // Reveal by fetching from REST to avoid exposing content in HTML
      var url = (EXDISC.rest && EXDISC.rest.root ? EXDISC.rest.root : '/wp-json/') + 'wp/v2/discount/' + postId + '?_fields=content.rendered';
      fetch(url, { credentials: 'same-origin' }).then(function(r){
        if (!r.ok) throw new Error('REST ' + r.status);
        return r.json();
      }).then(function(data){
        var html = (data && data.content && data.content.rendered) ? data.content.rendered : '';
        var contentEl = document.getElementById('exdisc-content');
        var deniedEl = document.getElementById('exdisc-denied');
        if (contentEl) { contentEl.innerHTML = html; contentEl.style.display = 'block'; }
        if (deniedEl) { deniedEl.style.display = 'none'; }
      }).catch(function(err){
        // keep denied visible
        // console.error('EXDISC REST error', err);
      });
    } else {
      // keep denied
    }
  });

// --- Client-side filters for [exclusive_discounts] ---
document.addEventListener('DOMContentLoaded', function(){
  var filters = document.getElementById('ed-filters');
  var grid = document.getElementById('exclusive-discounts-grid');
  if (!filters || !grid) return;

  function currentSelection(){
    var sel = filters.querySelector('#ed-filter-location');
    var locationVal = sel ? (sel.value || '').toLowerCase() : '';
    var catChecks = Array.prototype.slice.call(filters.querySelectorAll('input[name="ed_filter_cat[]"]:checked'));
    var cats = catChecks.map(function(i){ return (i.value || '').toLowerCase(); });
    return { location: locationVal, cats: cats };
  }

  function itemMatches(item, sel){
    var locs = (item.getAttribute('data-locs') || '').toLowerCase().trim().split(/\s+/).filter(Boolean);
    var cats = (item.getAttribute('data-cats') || '').toLowerCase().trim().split(/\s+/).filter(Boolean);

    // Location: if selected, item must include that location
    if (sel.location && locs.indexOf(sel.location) === -1) return false;

    // Categories: OR logic — if none selected -> pass; else at least one overlap
    if (sel.cats.length > 0) {
      var overlap = sel.cats.some(function(c){ return cats.indexOf(c) !== -1; });
      if (!overlap) return false;
    }
    return true;
  }

  function applyFilters(){
    var sel = currentSelection();
    var items = grid.querySelectorAll('.discount-card-link');
    items.forEach ? items.forEach(hideShow) : Array.prototype.forEach.call(items, hideShow);

    function hideShow(a){
      if (itemMatches(a, sel)) {
        a.classList.remove('exdisc-hidden');
      } else {
        a.classList.add('exdisc-hidden');
      }
    }
  }

  filters.addEventListener('change', applyFilters);
  applyFilters();
});
