import React from 'react';
import { Link } from 'react-router-dom';

export const PasswordGenSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-50 text-yellow-700 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-200">
          Cybersecurity & Privacy
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Secure Password Generator: <br />
          <span className="text-yellow-600 italic">Protect Your Digital Life</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          In an era where banking apps, email accounts, and social media profiles are constantly targeted by hackers, using "Pakistan123" is no longer safe. Our locally hosted, client-side <strong>Password Generator</strong> creates cryptographic, high-entropy passwords that are mathematically impossible to crack through brute force.
        </p>
      </header>

      {/* Section: Why You Need Strong Passwords */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-yellow-500 pl-6">The Anatomy of a Hack-Proof Password</h2>
        <p className="text-slate-600 leading-relaxed">
          The security of a password relies entirely on "Entropy" — a measure of randomness and length. Short passwords containing only lowercase letters can be cracked by modern GPUs in literally milliseconds.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Extreme Length</h3>
            <p className="text-sm text-slate-700 mb-3">
              Length beats complexity. A 16-character password of just lowercase letters is exponentially harder to crack than an 8-character password with symbols. We recommend <strong>at least 16 characters</strong>.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">2. True Randomness</h3>
            <p className="text-sm text-slate-700 mb-3">
              Humans are terrible at creating random patterns. Adding "!" to the end of a dictionary word does not fool cracking software. Our tool uses <code>crypto.getRandomValues()</code> for true mathematical randomness.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">3. Uniqueness</h3>
            <p className="text-sm text-slate-700 mb-3">
              Never reuse passwords across different sites. If one website gets breached, hackers will use "Credential Stuffing" to try your stolen password on your bank and email accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Password Managers */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">How Do I Remember Complex Passwords?</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          <div className="flex-1">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              <strong>You shouldn't.</strong> It is impossible to remember unique 16-character random passwords for the 50+ accounts you own.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              The modern security standard is to use a <strong>Password Manager</strong> (like Bitwarden, 1Password, or Apple Keychain). You only need to memorize one strong "Master Password". The manager stores all your generated passwords in an encrypted vault and auto-fills them for you.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full md:w-1/3 text-center text-white">
            <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">Golden Rule</p>
            <h4 className="text-xl font-black text-yellow-400">Generate, Save to Vault, Forget.</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Is this password generator safe?",
              a: "Yes. 100% of the password generation happens locally in your web browser using JavaScript's Web Crypto API. No passwords are sent to, or stored on, our servers."
            },
            {
              q: "Why do some websites reject these passwords?",
              a: "Some poorly coded websites restrict password lengths to 12 characters or ban specific symbols. If that happens, simply reduce the length slider or uncheck the 'Symbols' box and regenerate."
            },
            {
              q: "Should I change my passwords every 3 months?",
              a: "No. The National Institute of Standards and Technology (NIST) now advises against forced frequent password changes. It causes 'password fatigue' where users make slight, predictable changes (e.g., Spring2024 to Summer2024). Change it only if you suspect a breach."
            },
            {
              q: "What is Two-Factor Authentication (2FA)?",
              a: "2FA requires a second form of verification (like a code from Google Authenticator) in addition to your password. Always enable 2FA on your critical accounts (Email, Banking) for ultimate security."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Cybersecurity Tools
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-yellow-100 rounded-full text-[10px] font-bold text-yellow-800 italic">strong password generator</span>
          <span className="px-3 py-1 bg-yellow-100 rounded-full text-[10px] font-bold text-yellow-800 italic">random password maker</span>
        </div>
      </footer>
    </article>
  );
};
