import React, { useState, useRef } from "react";
import "../../styles/addeventmodal.css"; 

const AddEventModal = ({ show, onClose, addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");  // Estado para la fecha
  const [time, setTime] = useState("");  // Estado para la hora
  const [price, setPrice] = useState("");  // Estado para el precio
  const [imagePreview, setImagePreview] = useState(""); // Estado para el preview de la imagen
  const fileInputRef = useRef(null); // Referencia al input de archivo

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Crear URL para el preview
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview("");
    fileInputRef.current.value = null; // Resetear el input de archivo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image && category && date && time && price) {
      const newEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        description,
        category,
        date,
        time,
        price: `€${price}`, // Formato de precio
        image: imagePreview,
      };
      addEvent(newEvent);
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="add-event-modal-overlay" onClick={onClose}>
      <div className="add-event-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="add-event-modal-close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Agregar Nuevo Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="add-event-modal-details">
            <div className="add-event-modal-details-item">
              <label>
                Título del Evento:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="add-event-modal-details-item">
              <label>
                Descripción:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="add-event-modal-details-item">
              <label>
                Tipo de Evento:
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="Teatro">Teatro</option>
                  <option value="Salsa">Salsa</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Rock">Rock</option>
                </select>
              </label>
            </div>
            <div className="add-event-modal-row">
              <div className="add-event-modal-details-item">
                <label>
                  Fecha del Evento:
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="add-event-modal-details-item">
                <label>
                  Precio por Entrada:
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="0"
                    step="0.01"
                    placeholder="€"
                  />
                </label>
              </div>
              <div className="add-event-modal-details-item">
                <label>
                  Hora del Evento:
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="add-event-modal-details-item add-event-modal-image-input">
              <input
                type="file"
                id="event-image"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef} // Asignar referencia al input
                required={!imagePreview} // Requerido solo si no hay preview
                style={{ display: "none" }}
              />
              <label htmlFor="event-image" className="image-input-label">
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Preview" className="image-preview-thumbnail" />
                    <button type="button" className="remove-image-button" onClick={handleRemoveImage}>
                      Eliminar imagen
                    </button>
                  </>
                ) : (
                  <>
                    <div className="folder-icon">📁</div>
                    <span>Haga clic aquí para seleccionar una imagen</span>
                  </>
                )}
              </label>
            </div>
            <button type="submit" className="add-event-modal-purchase-button">
              Crear Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
