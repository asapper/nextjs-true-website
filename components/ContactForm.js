import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xnqlokva',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          '¡Pronto te estaremos enviando más información de True!',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className="py-4 sm:py-10 flex flex-col w-full lg:w-3/4 relative font-light">
      <form className="w-full flex" onSubmit={handleOnSubmit}>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          value={inputs.email}
          className="p-3 w-full focus:outline-none focus:ring focus:ring-inset focus:ring-blue-200 text-md border border-gray-200 rounded-md rounded-r-none"
          placeholder="Tu correo electrónico"
          required
        />
        <button
          className="p-3 rounded-md rounded-l-none bg-blue-600 hover:bg-blue-500 focus:ring-inset focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-white"
          type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Enviar'
              : '¡Enviado!'
            : 'Enviando...'}
        </button>
      </form>

      {status.info.error && (
        <div className="py-5 error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className="pt-5">{status.info.msg}</p>}
    </div>
  )
}
