import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { GuestMessage } from '../types';
import { Send, User, WifiOff } from 'lucide-react';
import { db, collection, addDoc, onSnapshot, query, orderBy, Timestamp, isConfigured } from '../services/firebase';

export const GuestBook: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Data dummy untuk mode offline/belum dikonfigurasi
  const [messages, setMessages] = useState<GuestMessage[]>([
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

  useEffect(() => {
    if (isConfigured && db) {
      // Realtime subscription dari Firestore
      const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          message: doc.data().message,
          // Convert Firestore Timestamp to Date, or fallback to now
          timestamp: doc.data().timestamp?.toDate() || new Date()
        })) as GuestMessage[];
        
        setMessages(fetchedMessages);
      }, (error) => {
        console.error("Error fetching messages:", error);
      });

      return () => unsubscribe();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);

    try {
      if (isConfigured && db) {
        // Simpan ke Firebase
        await addDoc(collection(db, "wishes"), {
          name,
          message,
          timestamp: Timestamp.now()
        });
      } else {
        // Simpan ke State Lokal (Mode Offline)
        const newMessage: GuestMessage = {
          id: Date.now().toString(),
          name,
          message,
          timestamp: new Date()
        };
        setMessages([newMessage, ...messages]);
      }
      
      setName('');
      setMessage('');
    } catch (err) {
      console.error("Failed to send message", err);
      alert("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="pb-20">
      <h2 className="font-script text-4xl text-center text-islamic-800 mb-2">Doa & Harapan</h2>
      <p className="text-center text-sm text-gray-600 mb-8 font-sans">Berikan ucapan terbaik untuk kedua mempelai</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-islamic-100 mb-10">
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
          {loading ? (
             <span>Mengirim...</span>
          ) : (
             <>
               <Send size={16} /> Kirim Ucapan
             </>
          )}
        </button>
      </form>

      <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar">
        {!isConfigured && (
           <div className="text-center p-2 mb-4 bg-yellow-50 border border-yellow-100 rounded text-xs text-yellow-600 flex items-center justify-center gap-2">
             <WifiOff size={12}/> Mode Demo (Data tidak tersimpan ke database)
           </div>
        )}
        
        {messages.length === 0 ? (
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
                     {/* Format date simple */}
                     {msg.timestamp instanceof Date ? msg.timestamp.toLocaleDateString('id-ID') : 'Baru saja'}
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