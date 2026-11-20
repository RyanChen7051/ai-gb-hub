/* AI GB Team 发信台账
 *
 * 用途：让所有者能核对「每天 2 封是否真的自动发了」——每一封都有时间、发信角色、
 *       收件人、主题、邮件类型与真实 message_id，可回 Agent Mail 已发送箱逐封比对。
 *
 * 规则：
 *   - 只记实际发出的邮件，草稿与失败不混入（失败另记 status=failed）；
 *   - message_id 来自 Agent Mail 返回值，用于追溯，不是编造；
 *   - 每日配额 50 封，台账另有 quotaUsed 字段与此对账。
 */
window.GB_EMAIL_LOG = {
  meta: {
    mailbox: "eyku5737@agent.qq.com",
    channel: "Agent Mail",
    quotaDaily: 50,
    note: "本台账为实际发送记录。预演期收件人为所有者本人，不计入对外触达。"
  },

  days: [
    {
      date: "2026-11-20",
      weekday: "周五",
      quotaUsed: 3,
      quotaTotal: 50,
      entries: [
        {
          time: "14:42",
          agent: "AI GB-Team（通道验证）",
          to: "sales@gunbase-optics.com",
          subject: "[通道验证] AI GB Team 自动发信链路测试 · 2026-11-20",
          type: "系统验证",
          mode: "内部",
          status: "已发送",
          messageId: "msg_Vj1m58jTZj1d8rgszz5ukss2kd8CDXTayzmm0Cc4V9ko_Q",
          note: "确认无人工点击可直接发出，配额由 50 递减至 49"
        },
        {
          time: "14:42",
          agent: "AI GB-Marketing",
          to: "sales@gunbase-optics.com",
          subject: "[预演 1/2] 合作邀约 · Precision Optics × 射击运动协会青年项目 · 2026-11-20",
          type: "合作邀约",
          mode: "预演",
          status: "已发送",
          messageId: "msg_3Ow4r_uHGHnfkNZvb7SkAAU3OKdkCBv-hQMtmz8t3_5ERA",
          note: "目标 ISSF 体系国家协会（DSB / UITS / FFTir）青年项目，绿灯方向"
        },
        {
          time: "14:43",
          agent: "AI GB-Marketing",
          to: "sales@gunbase-optics.com",
          subject: "[预演 2/2] 合作邀约 · 「Precision & Pour」精度主题咖啡联名 · 2026-11-20",
          type: "合作邀约",
          mode: "预演",
          status: "已发送",
          messageId: "msg_4UGx7WQM0saGEI5cwtmwSxvcuTh47-BigI3AZwcUdFuu2w",
          note: "跨产业联名，店内不出现枪支图像，遵守 Google Ads 禁投类目"
        }
      ]
    }
  ]
};
