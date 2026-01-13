
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-2">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-gradient">যোগাযোগ করুন</h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">আপনার নতুন প্রজেক্ট নিয়ে কথা বলা যাক</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12 max-w-5xl mx-auto">
        <div className="lg:col-span-2 space-y-4 md:space-y-8">
          <div className="glass p-5 md:p-6 rounded-xl md:rounded-2xl">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">লিংকসমূহ</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { label: 'LinkedIn', value: 'Rabbi Hossain', color: 'text-blue-500', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v.3c.45-.4 1.1-.6 1.7-.6 1.4 0 2.3 1.1 2.3 2.5V17z"/></svg> },
                { label: 'Email', value: 'contact@rabbi.com', color: 'text-red-500', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
                { label: 'Facebook', value: 'fb.com/rabbi.ui', color: 'text-indigo-600', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82V14.706h-3.141V11.08h3.141V8.413c0-3.113 1.9-4.807 4.677-4.807 1.33 0 2.47.099 2.805.144v3.252l-1.926.001c-1.51 0-1.803.718-1.803 1.77v2.318h3.59l-.467 3.626h-3.123V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/></svg> }
              ].map((item, idx) => (
                <a key={idx} href="#" className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-xl hover:bg-white/10 transition-colors">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-bold">{item.label}</p>
                    <p className="text-sm md:text-base font-medium truncate max-w-[120px] md:max-w-none">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form className="glass p-5 md:p-8 rounded-xl md:rounded-2xl space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-bold opacity-70">নাম</label>
                <input type="text" className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm" placeholder="আপনার নাম" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] md:text-sm font-bold opacity-70">ইমেইল</label>
                <input type="email" className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm" placeholder="name@email.com" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] md:text-sm font-bold opacity-70">বিষয়</label>
              <input type="text" className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm" placeholder="আপনার মেসেজের বিষয়" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] md:text-sm font-bold opacity-70">মেসেজ</label>
              <textarea rows={3} className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none text-sm resize-none" placeholder="মেসেজ লিখুন..."></textarea>
            </div>
            <button className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg md:rounded-xl shadow-lg active:scale-[0.98] transition-all text-sm md:text-base">
              পাঠিয়ে দিন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
