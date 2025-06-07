import { useState } from 'react'
import type { FormEvent } from 'react'
import { submitForm } from '../services/api'
import './Contactos.css'

const Contactos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitStatus({ loading: true, error: null, success: false })

    try {
      await submitForm(formData)
      setSubmitStatus({ loading: false, error: null, success: true })
      setFormData({ nombre: '', correo: '', mensaje: '' }) // Reset form
    } catch (error:unknown) {
      console.error('Error al enviar el formulario:', error)
      setSubmitStatus({
        loading: false,
        error: 'Error al enviar el formulario. Por favor, intente nuevamente.',
        success: false
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="contactos-container">
      <h2>Contactos</h2>
      <form className="contactos-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={submitStatus.loading}>
          {submitStatus.loading ? 'Enviando...' : 'Enviar'}
        </button>

        {submitStatus.error && (
          <div className="error-message">{submitStatus.error}</div>
        )}

        {submitStatus.success && (
          <div className="success-message">¡Mensaje enviado con éxito!</div>
        )}
      </form>
    </div>
  )
}

export default Contactos