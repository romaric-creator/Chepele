import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const WHATSAPP_NUMBER = '237671669006';

const INFO = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Behind IUC, Logbessou, Douala, Cameroun',
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: '+237 671 669 006',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@chepele.com / reservations@chepele.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun - Sam : 12h00 - 00h00 | Dim : 10h00 - 00h00',
  },
];

function ReservationForm() {
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    objet: 'Reservation',
    date: '',
    personnes: '1 - 2 personnes',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*Nouvelle demande depuis le site*`,
      ``,
      `*Nom :* ${form.nom}`,
      `*Tel :* ${form.telephone}`,
      `*Objet :* ${form.objet}`,
      `*Date :* ${form.date || 'Non precisee'}`,
      `*Personnes :* ${form.personnes}`,
      form.message ? `*Message :* ${form.message}` : '',
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground text-lg">Reserver une table</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Remplissez le formulaire — il sera envoye directement sur notre WhatsApp.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Nom</label>
            <input
              type="text"
              required
              value={form.nom}
              onChange={e => update('nom', e.target.value)}
              placeholder="Votre nom"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Telephone</label>
            <input
              type="tel"
              required
              value={form.telephone}
              onChange={e => update('telephone', e.target.value)}
              placeholder="+237 6XX XX XX XX"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1.5">Objet</label>
          <select
            value={form.objet}
            onChange={e => update('objet', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option>Reservation</option>
            <option>Renseignement general</option>
            <option>Traiteur / Catering</option>
            <option>Reclamation</option>
            <option>Autre</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={e => update('date', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Nombre de personnes</label>
            <select
              value={form.personnes}
              onChange={e => update('personnes', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            >
              <option>1 - 2 personnes</option>
              <option>3 - 4 personnes</option>
              <option>5 - 6 personnes</option>
              <option>7+ personnes</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1.5">Message (optionnel)</label>
          <textarea
            rows={3}
            value={form.message}
            onChange={e => update('message', e.target.value)}
            placeholder="Allergies, occasion speciale, preferences..."
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.648-6.37-1.774l-.444-.27-3.06 1.026 1.026-3.06-.27-.444A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          Envoyer via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  useSEO({
    title: 'Contact & Reservation',
    description: 'Reservez votre table chez Chepele. Behind IUC, Logbessou, Douala. Tel: +237 671 669 006. Email: info@chepele.com. Ouvert 7j/7.',
    path: '/contact',
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Ou Nous Trouver
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md">
              On est a Logbessou, Douala — juste derriere IUC. Si vous etes plus de 6, appelez pour reserver votre table.
            </p>

            <dl className="mt-10 space-y-6">
              {INFO.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">{item.label}</dt>
                    <dd className="mt-0.5 text-foreground font-medium">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Social / Quick links */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-4">Suivez-nous</h3>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', url: 'https://facebook.com/profile.php?id=100088840404182' },
                  { name: 'Instagram', url: 'https://instagram.com/chepelebarbecue.shop/' },
                  { name: 'TikTok', url: 'https://tiktok.com/@chepele6' },
                  { name: 'WhatsApp', url: 'https://wa.me/237671669006' },
                ].map(platform => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps link */}
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/RMRxHHMSAcKADCSR9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Ouvrir dans Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Map + Reservation form */}
          <div className="space-y-8">
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-border min-h-[320px]">
              <iframe
                title="Localisation Chepele"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5!2d9.7791031!3d4.0852563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610df0581f48af%3A0x71be7f7abd2f0e71!2sChep%C3%A9l%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Reservation form */}
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
