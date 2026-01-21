import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { GuestMessage } from '../types';
import { Send, User, WifiOff, AlertCircle } from 'lucide-react';
import { db, collection, addDoc, onSnapshot, query, orderBy, Timestamp, isConfigured } from '../services/firebase';

export const GuestBook: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<GuestMessage[]>([]);

  useEffect(() => {
    if (!isConfigured || !db) {
      setMessages([
        {
          id: '1',
          name: 'Keluarga Besar Bani Hasan',
          message: 'Barakallahu laka wa baraka alaika wa jamaa bainakuma fii khair. Semoga menjadi keluarga sakinah.',
          timestamp: new Date()
        },
        {
          id: '2',
          name: 'Sahabat SMA',
          message: 'Selamat menempuh hidup baru Syarifah & Fariz!',
          timestamp: new Date()
        }
      ]);
      return;
    }

    const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        message: doc.data().message,
        timestamp: doc.data().timestamp?.toDate() || new Date()
      })) as GuestMessage[];

      setMessages(fetchedMessages);
      setError(null);
    }, (err: any) => {
      console.error("Firestore Error:", err);
      const msg = err.code === 'permission-denied'
        ? "Izin ditolak (Cek Firestore Rules di Firebase Console)."
        : "Gagal memuat pesan dari server.";
      setError(msg);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      if (isConfigured && db) {
        await addDoc(collection(db, "wishes"), {
          name: name.trim(),
          message: message.trim(),
          timestamp: Timestamp.now()
        });
      } else {
        const newMessage: GuestMessage = {
          id: Date.now().toString(),
          name: name.trim(),
          message: message.trim(),
          timestamp: new Date()
        };
        setMessages(prev => [newMessage, ...prev]);
      }

      setName('');
      setMessage('');
    } catch (err: any) {
      console.error("Submission Error:", err);
      const msg = err.code === 'permission-denied'
        ? "Gagal mengirim: Izin ditolak. Pastikan Firestore Rules mengizinkan akses tulis."
        : "Gagal mengirim pesan. Periksa koneksi internet.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="pb-20">
      <h2 className="font-script text-4xl text-center text-islamic-800 mb-2">Doa & Harapan</h2>
      <p className="text-center text-sm text-gray-600 mb-8 font-sans">Berikan ucapan terbaik untuk kedua mempelai</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-islamic-100 mb-10">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-xs flex items-start gap-2">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-xs font-bold text-islamic-900 mb-2 uppercase tracking-wider">Nama Anda</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200 outline-none text-sm transition-all"
            placeholder="Tulis nama anda..."
            required
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs font-bold text-islamic-900 mb-2 uppercase tracking-wider">Ucapan & Doa</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200 outline-none text-sm h-32 resize-none transition-all"
            placeholder="Tulis ucapan..."
            required
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-islamic-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-islamic-700 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? <span>Mengirim...</span> : <><Send size={16} /> Kirim Ucapan</>}
        </button>
      </form>

      <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar">
        {!isConfigured && (
          <div className="text-center p-2 mb-4 bg-yellow-50 border border-yellow-100 rounded text-[10px] text-yellow-600 flex items-center justify-center gap-2">
            <WifiOff size={12} /> Mode Demo (Cek .env untuk mengaktifkan Firebase)
          </div>
        )}

        {messages.length === 0 && !error ? (
          <p className="text-center text-gray-400 text-sm italic py-4">Belum ada ucapan. Jadilah yang pertama!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-islamic-100 flex items-center justify-center text-islamic-700">
                  <User size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{msg.name}</h4>
                  <span className="text-[10px] text-gray-400">
                    {msg.timestamp instanceof Date ? msg.timestamp.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) : 'Baru saja'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </Section>
  );
};