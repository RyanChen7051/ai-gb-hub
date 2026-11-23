/* AI GB Team → 子 PWA 监督指令挂件
 *
 * 用法（在子 PWA 的 </body> 前引入）：
 *   <script src="../shared/reports/gb-reports.js"></script>
 *   <script>window.GB_DIRECTIVE_FOR='GB-Sales';</script>
 *   <script src="../shared/directives-widget.js"></script>
 *
 * 设计要点：
 *   - 全部样式内联，不依赖各 PWA 自己的 CSS，避免类名冲突；
 *   - 浅底深字，不用深色面板；
 *   - 只读展示，不回写任何数据。
 */
(function () {
  var FOR = window.GB_DIRECTIVE_FOR;
  var R = window.GB_REPORTS;
  if (!FOR || !R || !R.days || !R.days.length) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var day = R.days[0];
  var mine = (day.team.directives || []).filter(function (d) {
    return String(d.to).indexOf(FOR) > -1;
  });
  if (!mine.length) return;

  var NAME = FOR === 'GB-Sales' ? 'AI GB-Sales' : (FOR === 'GB-Marketing' ? 'AI GB-Marketing' : FOR);
  var warn = mine.filter(function (d) { return d.level === '警示'; }).length;

  var rows = mine.map(function (d) {
    var isWarn = d.level === '警示';
    var lv = isWarn
      ? 'background:#fdeceb;color:#b8461f'
      : 'background:#e8f0f9;color:#1d5486';
    var stBg = d.status === '已完成' ? 'background:#e7f4ec;color:#1f7a4d'
      : (d.status === '待执行' ? 'background:#fbf1d9;color:#9a6b12' : 'background:#eef3f8;color:#41546a');
    return '<div style="display:flex;gap:10px;padding:11px 0;border-bottom:1px dashed #dde5ee">'
      + '<span style="font-size:9.5px;font-weight:800;color:#fff;background:#1d5486;padding:2px 6px;border-radius:5px;height:fit-content;white-space:nowrap">' + esc(d.id) + '</span>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:12.5px;font-weight:750;color:#123a5e;line-height:1.5">' + esc(d.title)
      + '<span style="font-size:9.5px;font-weight:750;padding:1px 6px;border-radius:7px;margin-left:6px;' + lv + '">' + esc(d.level) + '</span>'
      + '<span style="font-size:9.5px;font-weight:750;padding:1px 6px;border-radius:7px;margin-left:4px;' + stBg + '">' + esc(d.status) + '</span>'
      + '</div>'
      + '<div style="font-size:11px;color:#5b6b7c;line-height:1.6;margin-top:4px">' + esc(d.detail) + '</div>'
      + '<div style="font-size:10px;color:#8a97a6;margin-top:4px">截止 ' + esc(d.due) + ' · 依据：' + esc(d.basis) + '</div>'
      + '</div></div>';
  }).join('');

  var sec = document.createElement('section');
  sec.style.cssText = 'max-width:1080px;margin:26px auto 0;padding:0 18px;';
  sec.innerHTML =
    '<div style="background:#fff;border:1px solid #dde5ee;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(18,58,94,.07)">'
    + '<div style="background:linear-gradient(135deg,#0f3252,#1d5486);color:#fff;padding:13px 17px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">'
    + '<div><div style="font-size:14.5px;font-weight:750">AI-GB-Team 下发的监督指令</div>'
    + '<div style="font-size:11px;color:#cfe0ef;margin-top:2px">' + esc(FOR === 'GB-Sales' ? day.sales.agent : day.marketing.agent) + ' · ' + esc(day.date) + ' · ' + esc(day.cycle) + '</div></div>'
    + '<div style="display:flex;gap:6px">'
    + '<span style="background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);padding:4px 10px;border-radius:16px;font-size:11px;color:#eaf2f9">共 ' + mine.length + ' 项</span>'
    + (warn ? '<span style="background:rgba(255,140,120,.2);border:1px solid rgba(255,150,130,.5);padding:4px 10px;border-radius:16px;font-size:11px;color:#ffd9d0">警示 ' + warn + ' 项</span>' : '')
    + '</div></div>'
    + '<div style="padding:6px 17px 14px">' + rows + '</div>'
    + '<div style="background:#f8fafc;border-top:1px solid #dde5ee;padding:11px 17px;font-size:11px;color:#5b6b7c;line-height:1.65">'
    + '指令由 AI-GB-Team 每日 21:00 汇整后下发 · <a href="../index.html" style="color:#1d5486;font-weight:700;text-decoration:none">查看完整战报 →</a>'
    + '</div></div>';

  var footer = document.querySelector('footer');
  if (footer && footer.parentNode) footer.parentNode.insertBefore(sec, footer);
  else document.body.appendChild(sec);
})();
