export default function StepContact({ value, onChange }) {
    const handleChange = (field, val) => {
        onChange({
            ...value,
            [field]: val,
        });
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-white/50 mb-4">Almost done! Where should we send the estimate?</h2>
            <p className="text-white/50 mb-8">We'll also send you a copy via WhatsApp or Email.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Full Name *</label>
                    <input
                        type="text"
                        value={value.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Company (Optional)</label>
                    <input
                        type="text"
                        value={value.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors"
                        placeholder="Your Company Ltd."
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Email Address *</label>
                    <input
                        type="email"
                        value={value.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Phone / WhatsApp *</label>
                    <input
                        type="tel"
                        value={value.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors"
                        placeholder="+92 300 1234567"
                    />
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-400 mb-2">Additional Notes (Optional)</label>
                    <textarea
                        value={value.note}
                        onChange={(e) => handleChange("note", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-malibu transition-colors h-32 resize-none"
                        placeholder="Tell us a bit more about your project..."
                    />
                </div>

                {/* Preference */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-400 mb-3">Preferred Contact Method</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                checked={value.method === 'whatsapp'}
                                onChange={() => handleChange('method', 'whatsapp')}
                                className="accent-malibu w-4 h-4"
                            />
                            <span className="text-white">WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                checked={value.method === 'email'}
                                onChange={() => handleChange('method', 'email')}
                                className="accent-malibu w-4 h-4"
                            />
                            <span className="text-white">Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                checked={value.method === 'call'}
                                onChange={() => handleChange('method', 'call')}
                                className="accent-malibu w-4 h-4"
                            />
                            <span className="text-white">Call</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
