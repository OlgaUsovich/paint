import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/canvas.scss";
import { Brush } from "../tools/Brush";

export const Canvas = observer(() => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [modal, setModal] = useState<boolean>(true);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  const connectHandler = () => {
    canvasState.setUsername(usernameRef.current.value)
    setModal(false)
  }

  return (
    <div className="canvas">
      <Modal show={modal} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>Введите Ваше имя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' ref={usernameRef} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectHandler()}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={500} />
    </div>
  );
});
