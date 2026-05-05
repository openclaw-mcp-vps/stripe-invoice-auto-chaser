export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-chase overdue Stripe invoices with smart sequences
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account and let automated email sequences handle overdue invoices — escalating by amount and days overdue so you get paid without the awkward follow-ups.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Webhook-driven", desc: "Listens to Stripe events in real time — no polling, no delays." },
            { title: "Smart escalation", desc: "Rules based on invoice amount and days overdue trigger the right tone." },
            { title: "Configurable sequences", desc: "Set your own follow-up cadence: 3 days, 7 days, 14 days — your call." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited Stripe invoice monitoring",
              "Automated multi-step email sequences",
              "Amount & days-overdue escalation rules",
              "Webhook event log & delivery history",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to Stripe?",
              a: "You register a webhook endpoint in your Stripe dashboard pointing to your app. The app listens for invoice.payment_overdue and related events and queues follow-up jobs automatically."
            },
            {
              q: "Can I customize the email content and timing?",
              a: "Yes. You configure sequences per rule — e.g. invoices over $500 get a firmer tone at day 7, while smaller invoices get a gentle nudge at day 3. Templates are fully editable."
            },
            {
              q: "What happens if a client pays after a chase email is sent?",
              a: "Stripe fires an invoice.paid event which cancels all pending follow-up jobs for that invoice immediately. No awkward emails after payment."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Stripe Invoice Auto-Chaser. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
