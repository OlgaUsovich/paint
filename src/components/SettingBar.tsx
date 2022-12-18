import toolState from "../store/toolState";
import "../styles/settingbar.scss";

export const SettingBar = () => {
  return (
    <div className="settingbar">
      <label htmlFor="line-width">Line width</label>
      <input
        onChange={(e) => toolState.setLineWIdth(e.target.value)}
        id="line-width"
        style={{ margin: "0 10px" }}
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Stroke color</label>
      <input
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        id="stroke-color"
        type="color"
      />
    </div>
  );
};
