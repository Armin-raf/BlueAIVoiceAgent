
import React from 'react';
import { InfoModalType } from './Footer';

interface LegalModalProps {
  type: InfoModalType | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    impressum: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Impressum</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="font-bold text-slate-500 uppercase tracking-widest text-xs">nach § 5 TMG</p>
          <div className="text-lg font-bold text-slate-900">
            <p>Amin Rafai | Blue Process</p>
            <p>Annenstraße 29, 31134 Hildesheim, Deutschland</p>
          </div>
          <div>
            <p className="font-bold">Kontakt:</p>
            <p>Telefon: +49 176 4334 7838</p>
            <p>E-Mail: <a href="mailto:herr.rafai@gmail.com" className="text-primary hover:underline">herr.rafai@gmail.com</a></p>
          </div>
          <div>
            <p>Steuernummer: 43196274049</p>
          </div>
          <div>
            <p className="font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p>Amin Rafai (Anschrift s.o.)</p>
          </div>
          <p className="text-sm text-slate-400 italic mt-8 border-t border-slate-50 pt-4">Quelle Impressum: e-recht24.de</p>
        </div>
      </div>
    ),
    agb: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <div className="space-y-6 text-slate-700 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
          <div className="text-lg font-bold text-slate-900 mb-4">
            Amin Rafai | Blue Process
          </div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 1 Geltungsbereich</h3>
            <p>Diese AGB gelten für alle Verträge über KI-Dienstleistungen, Prozessautomatisierung und Beratung zwischen Amin Rafai | Blue Process (nachfolgend „Auftragnehmer“) und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 2 Leistungsumfang und Abnahme</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot.</li>
              <li>Der Auftragnehmer schuldet die Einrichtung der Automatisierung nach bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher Erfolg wird nicht garantiert.</li>
              <li>Nach Fertigstellung der im Angebot beschriebenen Workflows ist der Kunde zur Abnahme verpflichtet. Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 7 Werktagen schriftlich Mängel rügt.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 3 Besondere Bedingungen für KI-Leistungen</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Der Kunde ist sich bewusst, dass KI-Modelle (wie z.B. Large Language Models) statistische Ergebnisse liefern. Der Auftragnehmer übernimmt keine Gewähr für die inhaltliche Richtigkeit, Vollständigkeit oder Logik der durch die KI generierten Texte, Daten oder Entscheidungen.</li>
              <li>Der Kunde ist verpflichtet, die durch die Automatisierung erzeugten Ergebnisse vor einer weiteren Verwendung (insbesondere bei Veröffentlichung oder Kundenkontakt) auf Richtigkeit zu prüfen.</li>
              <li>Der Auftragnehmer haftet nicht für Schäden, die durch Fehlentscheidungen einer KI oder durch „Halluzinationen“ des Modells entstehen.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 4 Zahlungsbedingungen</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Sofern im Angebot nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</li>
              <li>Der Auftragnehmer ist berechtigt, bei Projektstart eine Anzahlung in Höhe von 50 % der Angebotssumme zu verlangen. Die Arbeit beginnt erst nach Eingang der Anzahlung.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 5 Haftungsbeschränkung</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen.</li>
              <li>Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
              <li>Die Haftung für entgangenen Gewinn oder indirekte Folgeschäden ist ausgeschlossen.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2">§ 6 Urheberrecht und Nutzungsrechte</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>An den erstellten KI-Agenten, Automatisierungs-Workflows und Skripten räumt der Auftragnehmer dem Kunden ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht für den eigenen Betrieb ein.</li>
              <li>Die Weitergabe, der Weiterverkauf oder die Unterlizenzierung der Workflows an Dritte ist ohne schriftliche Zustimmung des Auftragnehmers untersagt.</li>
            </ol>
          </section>
        </div>
      </div>
    ),
    datenschutz: (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Datenschutz</h2>
        <div className="space-y-8 text-slate-700 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
          
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">1. Datenschutz auf einen Blick</h3>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800">Allgemeine Hinweise</h4>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unsere Dienstleistungen im Bereich der KI-Automatisierung in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              
              <h4 className="font-bold text-slate-800">Datenerfassung auf dieser Website</h4>
              <p><strong>Wer ist verantwortlich für die Datenerfassung?</strong> Die Datenverarbeitung auf dieser Website und im Rahmen der angebotenen Dienstleistungen erfolgt durch den Websitebetreiber:</p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 italic">
                <p className="font-bold not-italic">Amin Rafai | Blue Process</p>
                <p>Annenstraße 29, 31134 Hildesheim, Deutschland</p>
                <p>E-Mail: herr.rafai@gmail.com</p>
                <p>Telefon: +49 176 4334 7838</p>
              </div>
              <p><strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail oder Kontaktformular). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (technische Daten wie IP-Adresse, Browser, Uhrzeit).</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">2. Hosting und Infrastruktur</h3>
            <p>Wir hosten unsere Website, unsere Automatisierungs-Workflows sowie die dazugehörigen Datenbanken und Kundendaten bei folgendem Anbieter:</p>
            <p className="font-bold">Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland.</p>
            <p><strong>Serverstandort: Deutschland.</strong> Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und stabilen Bereitstellung unserer Dienste. Wir haben mit der Hetzner Online GmbH einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, der garantiert, dass Ihre Daten streng weisungsgebunden und nach deutschem Datenschutzstandard verarbeitet werden.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">3. Besonderheiten bei KI-Dienstleistungen</h3>
            <p>Im Rahmen unserer Automatisierungsprozesse setzen wir Künstliche Intelligenz ein. Die Verarbeitung erfolgt je nach individueller Vereinbarung (AVV) auf zwei Arten:</p>
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">A. Lokale KI-Modelle</h4>
                <p>Auf Wunsch werden Daten ausschließlich über lokale KI-Modelle verarbeitet, die auf unseren eigenen, in Deutschland gehosteten Servern (Hetzner) betrieben werden.</p>
                <p className="text-sm mt-2"><strong>Vorteil:</strong> 100% Datensouveränität. Kein Byte verlässt den deutschen Rechtsraum.</p>
                <p className="text-sm"><strong>Einschränkung:</strong> Diese Modelle sind in ihrer Rechenleistung und Komplexität im Vergleich zu großen KI-Anbietern begrenzt.</p>
              </div>
              <div className="p-4 border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">B. Ausländische KI-Modelle</h4>
                <p>Sofern für die Aufgabe eine höhere Intelligenzleistung erforderlich ist und dies im AVV vereinbart wurde, werden spezialisierte ausländische KI-Modelle genutzt.</p>
                <p className="text-sm mt-2"><strong>Datentransfer:</strong> Hierbei werden Daten an Server außerhalb der EU (meist USA) übertragen.</p>
                <p className="text-sm"><strong>Schutzmaßnahmen:</strong> Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission bzw. des Data Privacy Frameworks. Wir konfigurieren diese Schnittstellen so „Zero Retention Policy“, dass Ihre Daten in der Regel nicht zum Training der Modelle verwendet werden.</p>
                <p className="text-sm"><strong>Umfang:</strong> Es werden nur die Daten übertragen, die für die spezifische Anfrage (Prompt) zwingend erforderlich sind.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">4. Pflichtinformationen und Rechte der Betroffenen</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li><strong>Widerruf Ihrer Einwilligung:</strong> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</li>
              <li><strong>Recht auf Auskunft, Löschung und Berichtigung:</strong> Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li><strong>Beschwerderecht bei einer Aufsichtsbehörde:</strong> Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">5. Automatisierungs-Workflows</h3>
            <p>Bei der Nutzung unserer Automatisierungslösungen werden Daten zwischen verschiedenen Anwendungen übertragen.</p>
            <p><strong>Zweck:</strong> Erfüllung des mit Ihnen geschlossenen Vertrages (Art. 6 Abs. 1 lit. b DSGVO).</p>
            <p><strong>Speicherung:</strong> Daten in Workflows werden nur so lange zwischengespeichert, wie es für die Ausführung der Automatisierung technisch notwendig ist.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">6. Terminbuchung</h3>
            <p>Für die Online-Terminbuchung nutzen wir den Dienst <strong>Cal.eu</strong> (bereitgestellt durch Cal.com, Inc.). Durch die Nutzung der EU-Instanz erfolgt die Datenverarbeitung auf Servern innerhalb der Europäischen Union. Wenn Sie einen Termin über unsere Website buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Grund des Termins) an Cal.eu übertragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Wir haben die notwendigen datenschutzrechtlichen Vereinbarungen (DPA) getroffen, um ein DSGVO-konformes Datenschutzniveau sicherzustellen.</p>
          </section>
        </div>
      </div>
    ),
    'use-cases': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Voice Agent Use-Cases</h2>
        <div className="space-y-6 text-slate-600">
          <p>Unsere KI-Agenten decken eine breite Palette an Szenarien ab:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Inbound Support</h4>
              <p className="text-sm text-slate-500">Sofortige Beantwortung von FAQ, Bestellstatus-Abfragen und Ticket-Erstellung ohne Wartezeit.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Outbound Sales</h4>
              <p className="text-sm text-slate-500">Qualifizierung von Leads, Terminvereinbarungen und proaktive Kundenrückrufe.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Termin-Bot</h4>
              <p className="text-sm text-slate-500">Vollautomatisierte Buchung, Umbuchung und Stornierung von Terminen direkt am Telefon.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-1">Eskalations-Management</h4>
              <p className="text-sm text-slate-500">Intelligente Erkennung von Notfällen und direkte Weiterleitung an menschliche Experten.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    'integrations': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">System-Integrationen</h2>
        <div className="space-y-4 text-slate-600">
          <p>Ein Voice Agent ist nur so gut wie die Daten, auf die er zugreifen kann. Wir integrieren unsere Lösung nahtlos in Ihren Stack:</p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">hub</span>
              <div><span className="font-bold text-slate-900">CRM & ERP:</span> Salesforce, HubSpot, SAP, Odoo.</div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">call</span>
              <div><span className="font-bold text-slate-900">Telefonanlagen:</span> 3CX, Asterisk, Placetel, Microsoft Teams Voice.</div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">data_object</span>
              <div><span className="font-bold text-slate-900">API First:</span> Individuelle Anbindung über n8n, Make oder eigene Webhooks.</div>
            </li>
          </ul>
        </div>
      </div>
    ),
    'process': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Implementierungs-Ablauf</h2>
        <div className="relative pl-8 border-l-2 border-slate-100 space-y-8">
          {[
            { step: '1', title: 'Strategie-Workshop', text: 'Analyse Ihrer aktuellen Prozesse und Definition der KPIs.' },
            { step: '2', title: 'Persona Design', text: 'Festlegung von Stimme, Tonalität und Dialogleitplanken.' },
            { step: '3', title: 'Technische Kopplung', text: 'Integration in Telefonie und CRM-Systeme.' },
            { step: '4', title: 'Beta & Optimierung', text: 'Testlauf mit Real-Daten und Feinjustierung der KI-Logik.' }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-0 size-8 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-primary text-sm">
                {item.step}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    'compliance': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Datenschutz & Compliance</h2>
        <div className="space-y-4 text-slate-600">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">verified_user</span>
              DSGVO als Standard
            </h4>
            <p className="text-sm leading-relaxed">Unsere Systeme sind "Privacy by Design" konzipiert. Wir nutzen Anonymisierungstechniken, bevor Daten verarbeitet werden, und garantieren eine rechtssichere Auftragsdatenverarbeitung (AVV).</p>
          </div>
          <p>Wir arbeiten eng mit Ihren Datenschutzbeauftragten zusammen, um sicherzustellen, dass jeder Aspekt – von der Gesprächsaufzeichnung bis zur Datenspeicherung – den höchsten europäischen Standards entspricht.</p>
        </div>
      </div>
    ),
    'security-tech': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Sicherheits-Technologie</h2>
        <div className="space-y-4 text-slate-600">
          <p>Wir setzen auf einen mehrstufigen Sicherheits-Stack:</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Verschlüsselung:</span>
              <span>TLS 1.3 für alle Datenübertragungen und AES-256 für ruhende Daten.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">KI-Guardrails:</span>
              <span>Proprietäre Filtermechanismen verhindern "Halluzinationen" und stellen sicher, dass die KI niemals unautorisierte Informationen teilt.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-slate-900 min-w-[120px]">Zero Retention:</span>
              <span>Optionale Konfiguration, bei der keine Gesprächsdaten nach der Prozessierung gespeichert werden.</span>
            </div>
          </div>
        </div>
      </div>
    ),
    'hosting': (
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Hosting in Deutschland</h2>
        <div className="space-y-4 text-slate-600">
          <p>Ihre Daten verlassen niemals den deutschen Rechtsraum, sofern nicht anders vereinbart.</p>
          <ul className="space-y-4">
            <li className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">dns</span>
              <div>
                <h5 className="font-bold text-slate-900">Hetzner Data Centers</h5>
                <p className="text-sm text-slate-500">Hosting in Frankfurt am Main und Falkenstein. ISO 27001 zertifiziert und 100% Ökostrom.</p>
              </div>
            </li>
            <li className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">security</span>
              <div>
                <h5 className="font-bold text-slate-900">Physische Sicherheit</h5>
                <p className="text-sm text-slate-500">Zutrittskontrollen, 24/7 Überwachung und redundante Anbindungen garantieren 99,9% Verfügbarkeit.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl relative p-6 md:p-12 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
          {content[type]}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;
