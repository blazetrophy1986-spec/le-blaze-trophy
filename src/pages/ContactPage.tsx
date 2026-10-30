import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Facebook,
  ExternalLink,
  Mail,
  Phone,
  Send,
  CheckCircle,
  HelpCircle,
  MapPin,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { BRAND_CONFIG, SCHOOL_DATA } from '../data/eventData';
import { SchoolBadge } from '../components/SchoolBadge';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: 'Kingswoodian',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    // Build pre-filled WhatsApp message URL so user can seamlessly send via WhatsApp if desired
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/94776928822?text=${encodeURIComponent(
    `Hello L.E Blaze Trophy Team,\n\nName: ${formState.name || 'Event Supporter'}\nAffiliation: ${formState.affiliation}\nSubject: ${formState.subject}\n\nMessage: ${formState.message || 'I would like to inquire about the L.E Blaze Trophy event.'}`
  )}`;

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* Header Banner */}
      <section className="relative py-20 border-b border-slate-800 bg-gradient-to-b from-[#0A1322] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Official Communications</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            Contact & <span className="text-[#D4AF37]">Social Media</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300">
            Reach out directly for media inquiries, alumni delegations, event updates, and official communications for the L.E Blaze Trophy.
          </p>

          {/* Quick Primary WhatsApp Action Button */}
          <div className="mt-8 flex justify-center">
            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-extrabold text-lg uppercase tracking-wider shadow-2xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Direct WhatsApp Desk: {BRAND_CONFIG.contact.phoneFormatted}</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Channels + Social Media Hub + Interactive Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (5 cols): Official Social Media & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Event Summary Card */}
            <div className="rounded-2xl bg-[#091220] border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                Event Coordinates
              </span>
              <h2 className="font-heading font-black text-2xl uppercase text-white tracking-wide">
                L.E Blaze Trophy
              </h2>
              <div className="text-sm text-slate-300">
                <strong>Teams:</strong> Wesley College Colombo vs Kingswood College Kandy
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400">
                      Official Hotline / WhatsApp
                    </div>
                    <a
                      href={BRAND_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:underline"
                    >
                      {BRAND_CONFIG.contact.phoneFormatted} (0776928822)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400">
                      Official Event Inquiries
                    </div>
                    <a
                      href={`mailto:${BRAND_CONFIG.contact.email}`}
                      className="font-semibold text-slate-200 hover:text-[#D4AF37]"
                    >
                      {BRAND_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Media Hub */}
            <div className="rounded-2xl bg-[#091220] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  Social Media Network
                </span>
                <h3 className="font-heading font-black text-2xl uppercase text-white tracking-wide mt-1">
                  Official Channels & Feeds
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Follow official live updates, video clips, and photo albums.
                </p>
              </div>

              {/* Instagram Reel Button Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-pink-950/40 via-purple-950/30 to-slate-900 border border-pink-800/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span className="font-bold text-sm text-white">Instagram Match Highlights Reel</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-900/40 text-pink-300">
                    VIDEO
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Watch the official drone flag ceremony, player presentations, and match highlights reel.
                </p>
                <a
                  href={BRAND_CONFIG.social.instagramReel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Watch Instagram Reel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Facebook Feeds */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Community Links</span>
                </div>

                <div className="space-y-2">
                  <a
                    href={BRAND_CONFIG.social.facebook1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors group text-xs"
                  >
                    <span className="font-medium">Facebook Event Coverage #1</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={BRAND_CONFIG.social.facebook2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors group text-xs"
                  >
                    <span className="font-medium">Facebook Photo Album & Match Post #2</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={BRAND_CONFIG.social.facebook3}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors group text-xs"
                  >
                    <span className="font-medium">Facebook Ceremony Video Post #3</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Direct Inquiry & WhatsApp Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  Send a Message
                </span>
                <h3 className="font-heading font-black text-3xl uppercase text-white tracking-wide mt-1">
                  Event Coordination Desk
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Fill in your details below to dispatch an official inquiry or generate a one-tap WhatsApp message to the coordination team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold uppercase text-white">
                    Thank You, {formState.name}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry regarding "{formState.subject}" has been drafted. You can now send it directly to our team on WhatsApp for fastest confirmation.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ruwan Perera"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. 077 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Affiliation
                      </label>
                      <select
                        value={formState.affiliation}
                        onChange={(e) => setFormState({ ...formState, affiliation: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors"
                      >
                        <option value="Kingswoodian">Kingswood Old Boy / Student</option>
                        <option value="Wesleyite">Wesleyite Old Boy / Student</option>
                        <option value="Rugby Fan">Sri Lankan Rugby Enthusiast</option>
                        <option value="Media Representative">Sports Media & Press</option>
                        <option value="Sponsor Partner">Official Sponsor / Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Media pass inquiry, Trophy history archive, Event passes"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message or inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-heading font-extrabold text-base uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Or Open in WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
