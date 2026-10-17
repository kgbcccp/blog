// Inject a small style block at runtime to force header .post-desc to Times New Roman
// This avoids overriding theme files and ensures the rule is applied after all theme CSS
document.addEventListener('DOMContentLoaded', function() {
  try {
    var css = 'header .post-desc, .post-desc, .post .post-desc, .post-header .post-desc, .post-meta .post-desc, .post .description { font-family: "Times New Roman", Times, serif !important; }';
    var style = document.createElement('style');
    style.setAttribute('id', 'inject-desc-font');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  } catch (e) {
    console.error('inject-desc-font failed', e);
  }
});
