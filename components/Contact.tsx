
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Cal.com initialization logic
    (function (C, A, L) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      // @ts-ignore
      C.Cal = C.Cal || function () { 
        // @ts-ignore
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          let s = d.createElement("script");
          s.src = A;
          s.async = true;
          d.head.appendChild(s); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window as any, "https://app.cal.eu/embed/embed.js", "init");

    const calApi = (window as any).Cal;
    if (calApi) {
      calApi("init", "30min", {origin:"https://app.cal.eu"});
      calApi.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"},
        calLink: "amin-rafai-rmrhre/30min",
      });
      calApi.ns["30min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/a02a2d3c-7327-4845-a0ec-f649db17a272', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium">
            Wählen Sie direkt einen passenden Termin für eine 30-minütige Potenzialanalyse oder <br className="hidden md:block" /> senden Sie uns eine Nachricht über das Kontaktformular.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          
          {/* 1. Terminbuchung Container (Horizontal Layout) */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[750px] md:min-h-[850px]">
            <div className="px-8 pt-8 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div className="space-y-1">
                 <h4 className="text-xl font-black text-slate-900">Terminbuchung</h4>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Amin Rafai • 30 Min. Erstberatung</p>
               </div>
               <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 w-fit">
                 <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter">Live-Kalender Aktiv</span>
               </div>
            </div>
            
            <div className="flex-1 w-full p-4 md:p-8">
               <div className="w-full h-full bg-slate-50/30 rounded-3xl overflow-hidden border border-slate-100">
                  <div 
                    id="my-cal-inline-30min"
                    style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  ></div>
               </div>
            </div>
            
            <div className="py-4 text-center border-t border-slate-50">
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">DSGVO-konforme Terminbuchung via Cal.eu</span>
            </div>
          </div>

          {/* 2. Unterer Bereich: Info & Formular */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Linke Spalte: Kontakt-Details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900">Weitere Kontaktmöglichkeiten</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-5 group">
                    <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined !text-xl">mail</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">E-Mail</p>
                      <a href="mailto:herr.rafai@gmail.com" className="text-slate-900 font-bold hover:text-primary transition-colors">herr.rafai@gmail.com</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-5 group">
                    <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined !text-xl">call</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Telefon</p>
                      <a href="tel:+4917643347838" className="text-slate-900 font-bold hover:text-primary transition-colors">+49 176 4334 7838</a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-5 group">
                    <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined !text-xl">location_on</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Anschrift</p>
                      <p className="text-slate-900 font-bold">Annenstraße 29, 31134 Hildesheim</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Info Card */}
              <div className="bg-slate-950 p-8 rounded-[2rem] shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined !text-6xl">verified_user</span>
                </div>
                <h4 className="text-xl font-black mb-3">Bereit für die Zukunft?</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Wir analysieren Ihre Prozesse und zeigen Ihnen, wo KI-Agenten den größten Hebel für Ihre Effizienz haben.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                    <span className="material-symbols-outlined !text-sm">check_circle</span>
                    Kostenlos
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                    <span className="material-symbols-outlined !text-sm">check_circle</span>
                    Unverbindlich
                  </div>
                </div>
              </div>
            </div>

            {/* Rechte Spalte: Formular */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Schreiben Sie uns</h3>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 font-medium placeholder:text-slate-300" 
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-Mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 font-medium placeholder:text-slate-300" 
                      placeholder="name@firma.de"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Anliegen</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none bg-slate-50/50 text-slate-900 font-medium placeholder:text-slate-300 resize-none" 
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-base transition-all shadow-xl ${
                    status === 'loading' 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-blue-600 shadow-primary/30 text-white'
                  }`}
                >
                  {status === 'loading' ? (
                    <span className="animate-spin material-symbols-outlined !text-xl">progress_activity</span>
                  ) : status === 'success' ? (
                    'Nachricht gesendet!'
                  ) : (
                    <>
                      Anfrage absenden
                      <span className="material-symbols-outlined !text-xl">send</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-100 text-green-700 text-xs font-bold rounded-xl text-center animate-in fade-in slide-in-from-top-1">
                    Vielen Dank! Wir melden uns zeitnah bei Ihnen.
                  </div>
                )}

                <p className="text-center text-[9px] text-slate-300 font-bold uppercase tracking-widest">DSGVO Konform • 100% Sicher</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
