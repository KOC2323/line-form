'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    church: '',
    email: '',
    paper: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('https://script.google.com/macros/s/AKfycbyxfXYir_N-0ogxXRigiuAvDzFs1in4T7PWxq7EM2g2rsrnaJuZuMvz8qjoy1Kj9KhC/exec', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('送信しました！');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>電子版 管内通牒 登録フォーム</h1>
      <label>お名前：<br />
        <input name="name" onChange={handleChange} required />
      </label><br />
      <label>教会名：<br />
        <input name="church" onChange={handleChange} required />
      </label><br />
      <label>メールアドレス：<br />
        <input type="email" name="email" onChange={handleChange} required />
      </label><br />
      <label>
        <input type="checkbox" name="paper" onChange={handleChange} />
        紙の郵送も希望する
      </label><br /><br />
      <button type="submit">登録する</button>
    </form>
  );
}
