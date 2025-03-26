import './Canvas.css'
import { useRef, useState } from "react";

export default function CanvasComponent() {
    const canvasRef = useRef(null);
    const [text, setText] = useState("Мой текст");
    const [image, setImage] = useState(null);

    // Функция загрузки изображения
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            setImage(img);
            drawCanvas(img, text);
        };
    };

    // Функция отрисовки на Canvas
    const drawCanvas = (img, text) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Устанавливаем размеры Canvas по размеру изображения
        canvas.width = img.width;
        canvas.height = img.height;

        // Очищаем холст и рисуем изображение
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        // Рисуем текст поверх изображения
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.textAlign = "center";

        // Координаты для текста (внизу по центру)
        const x = canvas.width / 2;
        const y = canvas.height - 50;

        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
    };

    // Обновление текста и перерисовка
    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        if (image) drawCanvas(image, newText);
    };

    // Сохранение результата как картинки
    const saveImage = () => {
        const canvas = canvasRef.current;
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "meme-image.png";
        link.click();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <input type="file"  accept="image/*" onChange={handleImageUpload} />
            <br />
            <canvas ref={canvasRef} style={{
                width:'600px',
                height: '500px',
                border: "2px solid black",
                marginTop: 10 }} />
            <br />
            <input
                type="text"
                class='glow-on-hover'
                placeholder="Введите текст"
                value={text}
                onChange={handleTextChange}
            />
            <br />
            <button
                onClick={saveImage}
                class='glow-on-hover'
                type="button"
            >
                Сохранить
            <
            /button>

        </div>
    );
}
